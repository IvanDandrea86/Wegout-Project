import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";

import express from "express";
import cors from "cors";
 import path from "path";
import { ALLOW_ORIGIN, __prod__, __staging__ } from "./constants/const";
import session from "express-session";
import { sessionConfig } from "./config/sessionConfig";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers/index";

import { MyContext } from "src/types/types";
import { redis } from "./config/sessionConfig";
import pubSub from "./types/pubsub"
import http from "http";



//import { startSeed } from "./seeder";
dotenv.config();
export const app = express();
export const main = async () => {
  //Set Start Time
  // let startTime = new Date();
  let nStartTime = Date.now();
  //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });
  //Seed with FakeData
  //startSeed(60)
  //CORS middelware
  app.set('trust proxy', 1)
  app.use(
    cors({
      origin: ALLOW_ORIGIN,
      credentials: true,
    })
  );
  //Session middleware
  app.use(session(sessionConfig));
  //Start Apollo Server for graphql
  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
      validate: false,
      pubSub
    }),
    subscriptions: {
      path: "/subscriptions",
      onConnect: () => {
        console.log("🤝 new client connected for subscriptions");
      },
      onDisconnect: () => {
        console.log("👋 a client disconnected from subscriptions");
      },
    },
    context: ({ req, res,connection }): MyContext => {
        if (connection) {
            return {
              ...connection.context,
              
              res,
              req,
              redis
            };
          } else {
            return { redis,res,req };
          }
        },
});
  apolloServer.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: ALLOW_ORIGIN,
    },
  });
  let startnTime = new Date();
  apolloServer.installSubscriptionHandlers(httpServer);
    httpServer.listen(process.env.PORT, () => {
      console.log(
        startnTime,
        `\n🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${apolloServer.subscriptionsPath}`
      );
      console.log(
      startnTime,
      `\n🚀 Graphql running at:http://localhost:${process.env.PORT}/graphql`
    );
  });

  //Deploy Setup
  if(__prod__ ){
  app.use(express.static(path.resolve(__dirname, '../../client/build')));
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });
}

  let nEndTime = Date.now();
  console.log(
    `\tWeGOut v1.0.0\n\tServer up in: ${String(
      nEndTime - nStartTime
    )} milliseconds\n------------------------------------------------`
  );
};
