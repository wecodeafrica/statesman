import react from "react";
import { HeaderStyles } from "./styles";
import { FlexibleDiv, GridableDiv } from "../Box/styles";
import Searchbar from "../Searchbar";
import { B } from "../FontSize/styles";

const Search = () => {
  return (
    <HeaderStyles>
      <FlexibleDiv
        justifyContent="flex-start"
        flexWrap="nowrap"
        className="header-wrap"
        width="88%"
      >
        <B color="#EC2C22" bold className="header-logo">
          LOGO
        </B>

        <Searchbar className="searchbar-container" />

        <div className="header-links-container">
          <GridableDiv className="header-menu" gap="3px">
            <div></div>
            <div></div>
            <div></div>
          </GridableDiv>
          <ul className="header-links">
            <li>HOME</li>
            <li>MORE</li>
            <li>DESIGN</li>
            <li>FOLLOW</li>
          </ul>
        </div>
      </FlexibleDiv>
    </HeaderStyles>
  );
  ``;
};

export default Search;
