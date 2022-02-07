import UserResolver from "./user/user";
import ChatResolver from "./chat/chat";


export const resolvers: [Function, ...Function[]] = [
  
    UserResolver,
    ChatResolver
  ];