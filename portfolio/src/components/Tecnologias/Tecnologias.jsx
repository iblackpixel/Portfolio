import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import Cards from "../Cards/Cards";

const Contenedor = styled.div``;
const Title = styled.h1`
  display: flex;
  justify-content: center;
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
