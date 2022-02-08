import { ObjectId } from "mongodb";
import { UserModel } from "../../entities/user.entity";
import { Resolver, Arg,  Query, Mutation, Subscription, Root, PubSub, Publisher } from "type-graphql";
import { Service } from "typedi";
import { Chat, ChatModel } from "../../entities/chat.entity";
import { ChatResponse, FieldError, MessageChat, } from "../../types/types";




const channel='something_changed';

@Service() // Dependencies injection
@Resolver(() => Chat )
export default class ChatResolver {

    @Query(() => Chat , { name: "findChatByEmail" })
    async findChatById(@Arg("id") id: string) {
      return await ChatModel.findOne({ _id: id });
    }
  
    @Query(() => [Chat], { name: "findAllChat" })
    async findAllChat() {
      return await ChatModel.find({});
    }
    @Mutation(()=>ChatResponse,{name:"createChat"})
    async createChat(
        @Arg("senderId") senderId:string,
        @Arg("reciverId") reciverId:string,
    ){
        const ID=senderId+"/"+reciverId
        try{
        const reciver = await UserModel.findOne({_id:reciverId}).exec()
        if (reciver?.chatList.includes(senderId)){
            console.log(" chat alredy exist")
            const error = new FieldError(
                "chat",
                "chat alredy exist"
              );
              return {
                errors: error,
              };
            
        }
        else{
            const chat= new ChatModel({
                _id:ID
            })
            try{
            await   UserModel.findOneAndUpdate({_id:reciverId},{$push:{chatList:senderId}}).exec()
            await   UserModel.findOneAndUpdate({_id:senderId},{$push:{chatList:reciverId}}).exec()  
            await chat.save()
            return {chat}
            }
            catch(err){
                console.error(err)
            }
        }
        }
        catch(err){
            console.error(err)
        }
        return
    }

    @Mutation(() => ChatResponse, { name: "sendMessage" })
    async sendMessage(
      @PubSub(channel) pubsub: Publisher<Chat>,
      @Arg("sender") sender: string,
      @Arg("reciver") reciver: string,
      @Arg("content") content: string,
      @Arg("chat") chatId: string
    ): Promise<ChatResponse> {
      const include=chatId.split('/')
      if (include.includes(sender && reciver)){
        try{
            const id=new ObjectId()
            const created=new Date()
            const message={
                id:id,
                content: content,
                reciver:reciver,
                sender:sender,
                createdAt:created
            }
           const chat =  await ChatModel.findOneAndUpdate({_id:chatId},{$push:{messages:message}}).exec()
            const returnchat=await ChatModel.findById({_id:chatId})
           
           await pubsub({
             _id:chat?.id,
             messages:chat?.messages as MessageChat[],
             createdAt:chat?.createdAt as Date,
             updatedAt:chat?.updatedAt as Date
           })
           
            return {chat: returnchat?.toObject() as Chat};
        }
        catch(err){
            console.log(err)
            const error = new FieldError(
                "chat",
                "chat not exist"
              );
              return {
                errors: error,
              };
        }
      }
      else
      {const error = new FieldError(
        "chat",
        "chat not exist"
      );
      return {
        errors: error,
      };
    }
    }
    @Subscription({topics:channel})
    messageSent(@Root() chat: Chat): Chat {
      return  chat ;
}
}