import { ObjectId } from "mongodb";
import { UserModel } from "../../entities/user.entity";
import { Resolver, Arg,  Query, Mutation, Ctx } from "type-graphql";
import { Service } from "typedi";
import { Chat, ChatModel } from "../../entities/chat.entity";
import { ChatResponse, MyContext } from "../../types/types";







@Service() // Dependencies injection
@Resolver(() => Chat )
export default class ChatResolver {

    @Query(() => Chat , { name: "findChatById" })
    async findChatById(@Arg("_id") _id: string) {
      return await ChatModel.findOne({ _id: _id });
    }
  
    @Query(() => [Chat], { name: "findAllChat" })
    async findAllChat() {
      return await ChatModel.find({});
    }
    @Query(() => Chat , { name: "findChatbyUser" })
    async findChatByUser(@Ctx() {req}:MyContext) {
      return await ChatModel.findOne({ users:  {$contains:req.session.userID }});
    }

    @Mutation(()=>ChatResponse,{name:"createChat"})
    async createChat(
      @Arg("user", type=> [String] ) userIds:String[],
      @Ctx() {req}:MyContext 
    ){
      const userId=req.session.userID
      userIds.push(userId as string)
      const Id=new ObjectId()
      try{
     
     const exist=  await ChatModel.findOne({users:userIds}).exec()
     if(exist){
       return {chat:exist}
     }
     else{
      const chat=await ChatModel.create({_id:Id,users:userIds,lastMessage:""})
      
      const user =await UserModel.updateMany(
        { _id: { $in: userIds } },
        {
          $push: { chatList: chat._id }
        }
        )
        console.log("write",user)
        
        return{chat}}
      }
      catch(err){
        console.log(err)
      }
    
        return {}
    }

       }

