import SearchIcon from "@mui/icons-material/Search";
import React, { FC, useContext } from "react";
import { FriendsContext } from "../../Context/FriendsProvider";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./CustomSearch.style";

export const FriendsSearch: FC = () => {
  const search = useContext(FriendsContext);
  const handleSearch = (e: string) => {
    search.setUserName(e);
    if (e.length >= 2) {
      search.setFriends(true);
    }
    if (e.length === 0) {
      search.setFriends(!search.friends);
    }
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
        value={search.userName}
      />
    </Search>
  );
};
