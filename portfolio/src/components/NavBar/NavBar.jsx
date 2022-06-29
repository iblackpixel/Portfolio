import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";

const Contenedor = styled.div`
  background-color: ${colors.principal};
  color: ${colors.quinto};
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 4vh;
  font-weight: light;
  font-family: Lato;
  &:visited {
    color: ${colors.quinto};
    text-decoration: none;
  }
`;
export default function NavBar() {
  return (
    <Contenedor>
      <StyledLink style={{ fontFamily: "Monofett", lineHeight: 0.75 }} to='/'>
        ROQUE <br />
        IVAN
        <br />
        MOYANO
      </StyledLink>
      <StyledLink to='/about'>Sobre mi</StyledLink>
      <StyledLink to='/projects'>Proyectos</StyledLink>
      <StyledLink to='/skills'>Tecnologías</StyledLink>
      <StyledLink to='/contact'>Contacto</StyledLink>
    </Contenedor>
  );
}
