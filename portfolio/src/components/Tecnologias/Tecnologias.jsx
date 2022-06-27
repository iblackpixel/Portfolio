import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import Cards from "../Cards/Cards";

const Contenedor = styled.div``;

function Tecnologias() {
  return (
    <div>
      <div>Tecnologias</div>
      <Contenedor>
        <Cards>
          <Card>Tecno 1</Card>
        </Cards>
      </Contenedor>
    </div>
  );
}

export default Tecnologias;
