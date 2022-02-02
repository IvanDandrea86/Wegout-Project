import { useState, FC, useContext } from "react";
import { CustomThemeContext } from "../../Context/CustomThemeProvider";
import { MaterialUISwitch } from "./ThemeSwitch.style";

const ThemeSwitch: FC = () => {
  const { toggle } = useContext(CustomThemeContext);
  const [checked, setChecked] = useState<boolean>(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggle();
  };
  return (
    <MaterialUISwitch
      color="secondary"
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ThemeSwitch;
