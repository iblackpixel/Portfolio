import React from "react";
import styled from "styled-components";

const ContenedorCard = styled.div`
  height: 30vh;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2``;

export default function Card({ image, title }) {
  return (
    <ContenedorCard>
      <Title>{title}</Title>
      <img src={image} alt={title} />
    </ContenedorCard>
  );
}
