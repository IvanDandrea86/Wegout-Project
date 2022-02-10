import { gql, useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import ErrorMess from "../Components/Utility/ErrorMess";
import Loading from "../Components/Utility/Loading";
import { UserContext } from "./UserContext";

interface IChatChannel {
  chatChannel: string;
  setChatChannel: Function;
}
const FINDALLCHAT = gql`
  {
    findAllChat {
      users
      _id
      lastMessage
    }
  }
`;

export const ChatChannelContext = createContext<IChatChannel>(
  {} as IChatChannel
);

const ChatChannelProvider: React.FC<{}> = ({ children }) => {
  const user = useContext(UserContext);
  const [chatChannel, setChatChannel] = useState<string>("");
  const { data, loading, error } = useQuery(FINDALLCHAT);

  useEffect(() => {
    if (data){
    if (data.findAllChat && chatChannel === "") {
      const firstChat = data.findAllChat.filter((val: any) => {
        return val.users.includes(user._id);
      });
      setChatChannel(firstChat[0]._id);
    }
  }
  }, [chatChannel]);
  if (loading) return <Loading />;
  if (error) return <ErrorMess />;
  

  return (
    <ChatChannelContext.Provider
      value={{
        chatChannel,
        setChatChannel,
      }}
    >
      {children}
    </ChatChannelContext.Provider>
  );
};
export default ChatChannelProvider;
