import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import Cards from "../Cards/Cards";

const Contenedor = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.5vh;
  padding: 0.5vh;
`;
const Title = styled.div`
  margin: 1vh;
  text-decoration: none;
  font-size: 4vh;
  font-weight: light;
  font-family: Lato;
`;

function Tecnologias() {
  return (
    <div>
      <Title>TECNOLOGIAS</Title>
      <Contenedor>
        <Cards>
          <Card>Tecno 1</Card>
        </Cards>
      </Contenedor>
    </div>
  );
}

export default Tecnologias;
