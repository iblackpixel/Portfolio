import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 4vh;
  font-weight: light;
  font-family: Lato;
  color: ${colors.quinto};
  &:visited {
    color: ${colors.quinto};
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <Contenedor>
      <StyledLink to='/Github'>Github</StyledLink>
      <StyledLink to='/Linkedin'>LinkedIn</StyledLink>
    </Contenedor>
  );
}

export default Footer;
