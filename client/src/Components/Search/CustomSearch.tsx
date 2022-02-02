import SearchIcon from "@mui/icons-material/Search";
import React, { FC, useContext } from "react";
import { filterContext } from "../../Context/FilterContext";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./CustomSearch.style";

export const CustomSearch: FC = () => {
  const filter = useContext(filterContext);
  const handleSearch = (e: string) => {
    filter.setKeyword(e);
  };
  return (
    <Search
      sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ ml: 3 }}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search…"
        value={filter.keyword}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
