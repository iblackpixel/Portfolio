import React from "react";
import styled from "styled-components";

const ContenedorCard = styled.div`
  height: 25vh;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  margin: 1vh;
  text-decoration: none;
  font-size: 2vh;
  font-weight: light;
  font-family: Lato;
  width: 30%;
  &:hover {
    cursor: default;
  }
`;
const ContenedorImg = styled.img`
  object-fit: fill;
  height: 18vh;
`;

export default function Card({ image, title }) {
  return (
    <ContenedorCard>
      <Title>{title}</Title>
      <ContenedorImg src={image} alt={title} />
    </ContenedorCard>
  );
}
