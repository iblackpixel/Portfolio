import React from "react";
import styled from "styled-components";
import About from "../About/About";
import Tecnologias from "../Tecnologias/Tecnologias";
import Projects from "../Projects/Projects";

const Contenedor = styled.div`
  background-color: transparent;
`;

function Home() {
  return (
    <Contenedor>
      <About />
      <Projects />
      <Tecnologias />
    </Contenedor>
  );
}

export default Home;
