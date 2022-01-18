import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";
import { apolloLoader } from "./loaders/apolloLoader";
import express from "express";
import cors from 'cors';
// import path from "path";
import {
  ALLOW_ORIGIN,
  __prod__,
  PORT
} from "./constants/const";
// import { startSeed } from "./seeder";


dotenv.config();


export const app = express();

export const main = async () => {
  //Set Start Time
let startTime= new Date();
let nStartTime = Date.now()


   //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });
  //Seed with FakeData
  // startSeed(60)

  // CORS middelware
  app.use(
    cors({
      origin:ALLOW_ORIGIN ,
      credentials: true,

    })
  );


  //Start Apollo Server for graphql
  apolloLoader().catch((err) => {
    console.error(err);
  });

  // app.use(express.static(path.join(__dirname,'../../client/build')));
  // app.get("*",(req,res)=>{
  //   res.sendFile(path.join(__dirname,'../client/build'),"index.html")
  // })

  app.listen( PORT, () => {
  console.log(startTime,`\n🚀 Server running at: http://localhost:${PORT}`);
  });

  let nEndTime = Date.now()
  console.log(`\tBookFace_Server v1.0.0\n\tServer up in: ${ String(nEndTime - nStartTime) } milliseconds\n------------------------------------------------`)    
  
};
