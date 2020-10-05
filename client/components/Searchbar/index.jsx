import React, { useState } from "react";
import { SearchIcon, DropdownIcon } from "@assets/svg/index";
import { Flex } from "@components/Box";

/* Locally scoped component styles */
import { SearchStyles } from "./styles";

const Search = () => {
  const [searching, setSearching] = useState(false);

  return (
    <SearchStyles className="searchbar-container" searching={searching}>
      <Flex justifyContent="space-between" flexWrap="nowrap">
        <div className="searchicon-container">
          <SearchIcon
            className="searchIcon"
            color={searching ? "#000" : "#444343"}
            height="20px"
            width="20px"
          />
        </div>
        <input
          type="text"
          onFocus={() => setSearching(true)}
          onBlur={() => setSearching(false)}
        />
        <div className="dropdownicon-container">
          <DropdownIcon
            className="dropDownIcon"
            color="#FF9893"
            height="20px"
            width="20px"
          />
        </div>
      </Flex>
    </SearchStyles>
  );
  ``;
};

export default Search;
