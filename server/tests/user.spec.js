import chai from "chai";
import chaiHttp from "chai-http";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const should = chai.should();
const url = "localhost:8000";

chai.use(chaiHttp);

const data = {
  name: "Aapan",
  email: "a@b.com",
  address: "ctg",
  phone: 12345,
  password: "abcd",
};

const queryData = `query signIn($email: String!, $password: String!){
  signIn(email: $email, password: $password) {
    id,
    name,
    address,
    email,
    phone,
    password
  }
}`;

const queryVariables = {
  email: "a@b.com",
  password: "abcd",
};

const query = {
  query: queryData,
  variables: queryVariables,
};

const mutation = {
  query: `mutation signUp($name:String!, $address:String!, $email:String!, $phone:Int!, $password:String!){
    signUp(name: $name,
    address: $address,
    email: $email,
    phone: $phone,
    password: $password,){
      id
      name
      address
      email
      phone
      password
    }
  }`,
  variables: {
    ...data,
  },
};

describe("user_signUp_signIn_api", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  it("should create a user", async () => {
    const response = await chai.request(url).post("/graphql").send(mutation);
    delete response.body.data.signUp.id;
    response.body.data.signUp.should.eql(data);
  });

  it("should return a user if given mail and password is matched!", async () => {
    const response = await chai.request(url).post("/graphql").send(mutation);
    delete response.body.data.signUp.id;
    const user = await chai.request(url).post("/graphql").send(query);
    delete user.body.data.signIn.id;
    user.body.data.signIn.should.eql(response.body.data.signUp);
  });

  it("should return a error message if email not found in the database while signing in", async () => {
    const user = await chai.request(url).post("/graphql").send(query);
    user.body.errors[0].message.should.eql(
      "Error: Error: Cannot find user with given mail"
    );
  });

  it("should return a error message if password doesnt match", async () => {
    const response = await chai.request(url).post("/graphql").send(mutation);
    const user = await chai
      .request(url)
      .post("/graphql")
      .send({
        ...query,
        ...(query.variables.password = "asdf"),
      });
    user.body.errors[0].message.should.eql("Error: Credentials do not match!");
  });
});
