import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import Cards from "../Cards/Cards";
import colors from "../utils/colors";

const Contenedor = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0.5vh;
  padding: 0.5vh;
`;
const Title = styled.div`
  margin: 1vh;
  text-decoration: none;
  font-size: 4vh;
  font-weight: light;
  font-family: Lato;
  color: ${colors.cuarto};
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
