import { createContext, useState } from "react";

interface IFriends {
  userName: string;
  setUserName: Function;
  friends: boolean;
  setFriends: Function;
}

export const FriendsContext = createContext<IFriends>({} as IFriends);

const FriendsProvider: React.FC<{}> = ({ children }) => {
  const [friends, setFriends] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  return (
    <FriendsContext.Provider
      value={{
        userName,
        setUserName,
        friends,
        setFriends,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};
export default FriendsProvider;
