import { ObjectId } from "mongodb";
import { Resolver, Arg, Mutation, Subscription, Root, PubSub, Publisher, Ctx, Query } from "type-graphql";
import { Service } from "typedi";
import { Message, MessageModel } from "../../entities/message.entity";
import { MyContext } from "../../types/types";
import { ChatModel } from "../../entities/chat.entity";

const channel="newChatChannel"
interface MessagePayload{
  _id:string;
  body:string;
  chat:string;
  sender:string;
  createdAt:string;
}
@Service() // Dependencies injection
@Resolver(() => Message )
export default class MessageResolver {
  @Query(()=>[Message],{name:"getMessages"} )
  async getMessages(
    @Arg("chatid") chatid:string
  ){ 
return MessageModel.find({chat:chatid}).exec() 
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
      try{
          await pubsub(
     message       
          )
      }
      catch(err){
        console.log(err)
      }
          
     return message;
     
   }
   @Subscription({topics:channel,
    filter: ({ payload,args }) => 
    payload.chat===args.chatid
   })
   messageSent(
     @Root() message: MessagePayload,
    @Arg("chatid") chatid:string): Message {
     return  {
      _id:message._id,
      body:message.body,
      sender: message.sender,
      chat: message.chat,
      createdAt: new Date(message.createdAt)

     } ;
}
}