import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { types } from "./graphql/index.js";
import { Mutation } from "./graphql/resolvers/mutations/mutation.resolver.js";
import { Query } from "./graphql/resolvers/query/query.resolver.js";

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs: types,
  resolvers: { Mutation, Query },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

app.use(bodyParser.json());
app.use(cors());

await server.start();

app.use("/graphql", expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 8000 }, resolve));

console.log(`Server ready at http://localhost:8000/`);
