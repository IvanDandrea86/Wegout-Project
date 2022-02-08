import UserResolver from "./user/user";
import ChatResolver from "./chat/chat";
import MessageResolver from "./message/message";


export const resolvers: [Function, ...Function[]] = [
  
    UserResolver,
    ChatResolver,
    MessageResolver
  ];