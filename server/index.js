import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import { types } from "./graphql/index.js";
import { Mutation } from "./graphql/resolvers/mutations/mutation.resolver.js";

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: types,
    resolvers: { Mutation },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("server started at port 8000");
  });
}

startServer();
