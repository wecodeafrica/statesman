import React from "react";
import { Flex, Grid } from "@components/Box";
import { Bold } from "@components/Typography";
import { HeaderLayout } from '@components/Layout'

/* Locally scoped component styles */
import { HeaderStyles } from "./styles";

const Search = () => {
  return (
    <HeaderStyles>
      <HeaderLayout>

        <Flex
          justifyContent="flex-start"
          flexWrap="nowrap"
          className="header-wrap"
          width="100%"
        >
          <Bold fontSize color="#EC2C22" bold className="header-logo">
            Statesman
        </Bold>


          <div className="header-links-container">
            <Grid className="header-menu" gap="3px" />
            <ul className="header-links">
              <li>Browse</li>
              <li>Countries</li>
              <li>Offices</li>
              <li>Contributors</li>
            </ul>
          </div>
        </Flex>
      </HeaderLayout>
    </HeaderStyles>
  );
  ``;
};

export default Search;
