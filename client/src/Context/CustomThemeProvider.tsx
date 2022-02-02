import React, { FC } from "react";
import { themeDark, themeLight } from "../Themes/themes";
import { Theme } from "@emotion/react";

interface ITheme {
  dark?: boolean;
  theme?: Theme;
  toggle?: Function;
}

const initialState = {
  dark: false,
  theme: themeLight,
  toggle: () => {},
};
const CustomThemeContext = React.createContext(initialState);

const CustomThemeProvider: FC<ITheme> = ({ children }) => {
  const [dark, setDark] = React.useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themeDark : themeLight;

  return (
    <CustomThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeProvider, CustomThemeContext };
