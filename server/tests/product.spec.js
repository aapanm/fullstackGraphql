import chai from "chai";
import chaiHttp from "chai-http";
import { PrismaClient } from "@prisma/client";
import { exec } from "child_process";
import { app, server } from "../app";
import supertest from "supertest";

const prisma = new PrismaClient();
const should = chai.should();
const url = "localhost:8000";

chai.use(chaiHttp);

const data = {
  title: "iphone",
  description: "Brand new",
  categoryId: 1,
  userId: 1,
  purchasePrice: 10.0,
  rentPrice: 3.0,
  rentOptionId: 1,
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

const fetchProductQuery = {
  query: `query{
		fetchAllProductData{
		  id
		  userId
		  title
		  description
		  productPurchasePrice
		  productRentPrice
		  categoryInfo
		}
	  }`,
};

const mutation = {
  query: `mutation createProduct($input: ProductInput){
	createProduct(input: $input) {
	  title
	  description
	  categoryId
	  userId
	}
  }`,
  variables: {
    input: data,
  },
};

const userData = {
  name: "Aapan",
  email: "a@b.com",
  address: "ctg",
  phone: 12345,
  password: "abcd",
};

const userMutation = {
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
    ...userData,
  },
};

describe("products_api", () => {
  beforeEach(async () => {
    try {
      await prisma.$queryRaw`TRUNCATE TABLE "User", "Products", "ProductRentPrice", "ProductPurchasePrice" CASCADE`;
    } catch (e) {
      throw new Error(e);
    }
  });

  afterEach(async () => {
    try {
      await prisma.$queryRaw`TRUNCATE TABLE "User", "Products", "ProductRentPrice", "ProductPurchasePrice" CASCADE`;
    } catch (e) {
      throw new Error(e);
    }
  });

  it("should return null array if no product exists", async () => {
    const response = await chai
      .request(url)
      .post("/graphql")
      .send(fetchProductQuery);
    response.body.data.fetchAllProductData.should.eql([]);
  });

  it("should create a product", async () => {
    const user = await chai.request(url).post("/graphql").send(userMutation);
    console.log(user.body.data.signUp.id);
    data.userId = user.body.data.signUp.id;
    mutation.variables.input = data;
    const response = await chai.request(url).post("/graphql").send(mutation);
    delete response.body.data.createProduct.id;
    delete data.purchasePrice;
    delete data.rentOptionId;
    delete data.rentPrice;
    response.body.data.createProduct.should.eql(data);
  });
});
