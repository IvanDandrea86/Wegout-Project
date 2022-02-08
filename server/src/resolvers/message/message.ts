import { ObjectId } from "mongodb";
import { Resolver, Arg, Mutation, Subscription, Root, PubSub, Publisher, Ctx, Query } from "type-graphql";
import { Service } from "typedi";
import { Message, MessageModel } from "../../entities/message.entity";
import { MyContext } from "../../types/types";
import { ChatModel } from "../../entities/chat.entity";

const channel="newChatChannel"

@Service() // Dependencies injection
@Resolver(() => Message )
export default class MessageResolver {
  @Query(()=>[Message],{name:"getMessages"} )
  async getMessages(
    @Arg("chat") chat:string
  ){ 
return MessageModel.find({chat:chat}).exec() 
  }

   @Mutation(() => Message, { name: "sendMessage" })
   async sendMessage(
     @PubSub(channel) pubsub: Publisher<Message>,
     @Arg("body") body: string,
     @Arg("chat") chatId: string,
     @Ctx() {req}:MyContext)
   : Promise<Message> {
       const userId=req.session.userID
       const Id=new ObjectId()
    const chat = await ChatModel.findById(chatId).select('users')
    const message = await MessageModel.create({
        _id:Id,
        body:body,
        sender: userId,
        chat: chatId
      })
      if(chat){
      chat.lastMessage = message._id
      await chat.save()
      }
          await pubsub(
           message
           
          )
          
     return message;
     
   }
   @Subscription({topics:channel})
   messageSent(@Root() message: Message): Message {
     return  message ;
}
}