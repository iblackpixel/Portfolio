import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
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
  @media screen and (max-width: 660px) {
    top: 0;
    width: 100%;
    height: ${(props) => (props.open ? "30vh" : "15vh")};
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;
const ContenedorNav = styled.div`
  width: 20vw;
  margin: 0.1vw;
  @media screen and (max-width: 660px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100vw;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 75vw;
  @media screen and (max-width: 660px) {
    top: 70px;
    display: ${(props) => (props.open ? "flex" : "none  ")};
    flex-direction: column;
    align-items: center;
  }
`;
const StyledHome = styled(Link)`
  color: ${colors.quinto};
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: light;
  font-family: Lato;
  &:visited {
    color: ${colors.quinto};
    text-decoration: none;
  }
`;
const StyledLink = styled(Link)`
  color: ${colors.quinto};
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: light;
  font-family: Lato;
  &:visited {
    color: ${colors.quinto};
    text-decoration: none;
  }
  @media screen and (max-width: 660px) {
    font-size: 1.25rem;
    width: 100%;
    margin: 0;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MobileIcon = styled.div`
  display: none;
  font-size: 2em;
  @media screen and (max-width: 660px) {
    top: 0.2vh;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      height: 12.5vh;
      width: 12.5vw;
      fill: white;
      margin-left: 1rem;
    }
  }
`;
export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Contenedor open={showMobileMenu}>
      <ContenedorNav>
        <StyledHome style={{ fontFamily: "Monofett", lineHeight: 0.75 }} to='/'>
          ROQUE <br />
          IVAN
          <br />
          MOYANO
        </StyledHome>
        <MobileIcon
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <FaBars />
        </MobileIcon>
      </ContenedorNav>
      <Menu open={showMobileMenu}>
        <StyledLink to='/about'>Sobre mi</StyledLink>
        <StyledLink to='/projects'>Proyectos</StyledLink>
        <StyledLink to='/contact'>Contacto</StyledLink>
      </Menu>
    </Contenedor>
  );
}
