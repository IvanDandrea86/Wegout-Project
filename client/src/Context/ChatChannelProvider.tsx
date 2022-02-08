import { createContext, useState } from "react";

interface IChatChannel {
    chatChannel: string;
    setChatChannel:Function;
 
}

export const ChatChannelContext = createContext<IChatChannel>({} as IChatChannel);

const ChatChannelProvider: React.FC<{}> = ({ children }) => {
  const [chatChannel, setChatChannel] = useState<string>("");
  return (
    <ChatChannelContext.Provider
      value={{
        chatChannel,
        setChatChannel
      }}
    >
      {children}
    </ChatChannelContext.Provider>
  );
};
export default ChatChannelProvider;