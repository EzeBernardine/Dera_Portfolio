import React from "react";
import { Flex } from "../Box";
import { MenuStyle } from "./styles";

const Menu = () => {
  return (
    <MenuStyle>
      <Flex height="72px">
        <Flex justifyContent="space-between" width="90%" className="header-sub">
          <div>
            <h3>Blog</h3>
          </div>
          <div>
            <a href="/" className="blog text">
              BLOG
            </a>
          </div>
        </Flex>
      </Flex>
    </MenuStyle>
  );
};
export default Menu;
