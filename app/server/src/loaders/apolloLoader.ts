import {app} from '../server';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import {resolvers} from '../resolvers/index';
import {ALLOW_ORIGIN} from '../constants/const'
import { MyContext } from 'src/types/types';



export const apolloLoader=async():Promise<void>=>{
  
       const apolloServer = new ApolloServer({
        schema:await buildSchema({
            resolvers:resolvers,
            validate:false, 
        }),
        context: ({ req, res }):MyContext => ({
            req,
            res,

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
    })
}