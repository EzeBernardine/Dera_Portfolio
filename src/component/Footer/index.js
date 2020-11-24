import React from "react";
import { Flex } from "../Box";
import { FooterStyle } from "./styles";
import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterStyle>
      <Flex className="footer-container">
        <Flex className="container" justifyContent="space-between">
          <h4>&#169; Chidera Paul Ugwuanyi 2020. All rights reserved</h4>

          <div>
            <ul>
              <li>
                <a rel="noopener noreferrer" target="_blank" href="/">
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a rel="noopener noreferrer" target="_blank" href="/">
                  <TiSocialInstagram />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" target="_blank" href="/">
                  <FaMediumM />
                </a>
              </li>
            </ul>
          </div>
        </Flex>
      </Flex>
    </FooterStyle>
  );
};
export default Footer;
