import {app} from '../server';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import {resolvers} from '../resolvers/index';
import {ALLOW_ORIGIN} from '../constants/const'
import { MyContext } from 'src/types/types';
import { redis } from '../config/sessionConfig';
import http from "http"

export const apolloLoader=async():Promise<void>=>{
    const httpServer = http.createServer(app);
       const apolloServer = new ApolloServer({
        schema:await buildSchema({
            resolvers:resolvers,
            validate:false, 
        }),
        subscriptions: {
            path: "/subscriptions",
            onConnect: () => {
              console.log("Client connected for subscriptions");
            },
            onDisconnect: () => {
              console.log("Client disconnected from subscriptions");
            },
          },
       
        
        context: ({ req, res }):MyContext=> ({
            req,
            res,
           redis, 
        })    
    }); 
    await apolloServer.start()
    .then(()=>{
        let startTime= new Date();
           let port = process.env.ENV || 4000
           
        console.log(startTime,`\n🚀 Graphql running at:http://localhost:${port}/graphql`); 
        apolloServer.applyMiddleware({app,
            cors:{
                credentials:true,
                origin:ALLOW_ORIGIN,
            }
            });
            apolloServer.installSubscriptionHandlers(httpServer);
            console.log(startTime,`\n🚀 Subscriptions ready at ws://localhost:${port}${apolloServer.subscriptionsPath}`
              );
    })
}