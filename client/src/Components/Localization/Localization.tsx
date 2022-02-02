import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { languageContext } from "../../Context/LocalesProvider";
import LanguageIcon from "@mui/icons-material/Language";

export default function ControlledOpenSelect() {
  const [language, setLanguages] = React.useState<string>("en");
  const [open, setOpen] = React.useState(false);
  const { setLanguage } = React.useContext(languageContext);

  useEffect(() => {
    if (window.localStorage.getItem("lang") != null) {
      const value = localStorage.getItem("lang");
      if (typeof value === "string") {
        setLanguages(value);
      }
    }
  }, [language]);

  const handleChange = (event: SelectChangeEvent<typeof language>) => {
    window.localStorage.setItem("lang", event.target.value);
    setLanguages(event.target.value);
    setLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          id="select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          onChange={handleChange}
          IconComponent={LanguageIcon}
        >
          <MenuItem value={"it"}>Italiano</MenuItem>
          <MenuItem value={"fr"}>Français</MenuItem>
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"de"}>Deutsch</MenuItem>
          <MenuItem value={"nl"}>Nederlands</MenuItem>
          <MenuItem value={"es"}>Español</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
