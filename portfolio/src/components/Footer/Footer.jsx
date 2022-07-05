import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import colors from "../utils/colors";

const Contenedor = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: ${colors.principal};
  color: ${colors.quinto};
  justify-content: space-evenly;
  align-items: center;
`;
const StyledLink = styled.a`
  text-decoration: none;
  font-size: 9vh;
  color: ${colors.quinto};
  &:visited {
    color: ${colors.quinto};
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <Contenedor>
      <StyledLink href='https://github.com/iblackpixel' target='_blank'>
        <FaGithubSquare />
      </StyledLink>
      <StyledLink
        href='https://www.linkedin.com/in/roque-ivan-moyano-tucuman/'
        target='_blank'
      >
        <FaLinkedin />
      </StyledLink>
    </Contenedor>
  );
}

export default Footer;
