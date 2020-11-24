import React from "react";
import { Flex } from "../Box";
import { ProjectsStyle } from "./styles";


const Menu = () => {
  const works = [
    {
      name: "lorem lorem ippsuum",
      description:
        "lorem  Lorem ipsum dolor sit amet, consectetur adipisicing elit.    Laborum veniam",
      source: "/",
    },
    {
      name: "lorem lorem ippsuum",
      description:
        "lorem  Lorem ipsum dolor sit amet, consectetur adipisicing elit.    Laborum veniam",
      source: "/",
    },
  ];
  return (
    <ProjectsStyle>
      <Flex className="container" width="55%">
        <div className='sub-container drops'>
          <p className="lightText title">Here are some projects I've worked on:</p>

          <div>
            <ul>
              {works.map(({ name, description, source }) => (
                <li>
                  <h3 className="lightText">{name}</h3>
                  <p className="greyedText">{description}</p>
                  <div className="source">
                    <a href={source} className="darkText">
                      Source
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Flex>
    </ProjectsStyle>
  );
};
export default Menu;
