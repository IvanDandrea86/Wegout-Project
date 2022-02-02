import { createContext, useState } from "react";
interface INavigation {
  link: "login" | "register" | "hero";
  setLink: Function;
}

export const navigatioContext = createContext<INavigation>({} as INavigation);

const NavigationProvider: React.FC<{}> = ({ children }) => {
  const [link, setLink] = useState<"login" | "register" | "hero">("hero");
  return (
    <navigatioContext.Provider
      value={{
        link,
        setLink,
      }}
    >
      {children}
    </navigatioContext.Provider>
  );
};
export default NavigationProvider;
