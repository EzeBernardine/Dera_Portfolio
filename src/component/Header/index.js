import React from "react";
import { Flex, PictureFrame } from "../Box";
import { HeaderStyle } from "./styles";
import avatar from "../../assets/avatar.JPG";

const Menu = () => {
  return (
    <HeaderStyle>
      <Flex className="container" width="55%">
        <Flex flexWrap="nowrap" className="profile">
          <div className="profile-details">
            <h1>Chidera Paul Ugwuanyi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda nam labore
            </p>
            <div className="social-handle">
              <a href="/">M</a>
              <a href="/">G</a>
              <a href="/">T</a>
              <a href="/">L</a>
            </div>
          </div>

          <div className="profile-image">
            <PictureFrame height="200px" width="200px">
              <img src={avatar} alt="" />
            </PictureFrame>
          </div>
        </Flex>

        <div className="about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus
            harum deserunt, veniam dicta numquam debitis commodi possimus.
            Officia, velit? Minus iste dolorum fuga minima nihil excepturi
            repellendus repellat pariatur?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            sapiente, libero dolore nihil deserunt expedita beatae odio nesciunt
            architecto voluptatum eius a assumenda neque, officiis dicta odit
            temporibus exercitationem magni!
            
          </p>
        </div>
      </Flex>
    </HeaderStyle>
  );
};
export default Menu;
