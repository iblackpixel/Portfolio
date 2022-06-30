import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ContenedorCartas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.4vh;
  grid-auto-rows: minmax(25vh, auto);
`;

const auxiliar = [
  {
    image: "https://i.ibb.co/Pc91S3n/javascript.png",
    title: "JavaScript",
  },
  {
    image: "https://i.ibb.co/syyPnxw/html5.png",
    title: "HTML 5",
  },
  {
    image: "https://i.ibb.co/PNtH28D/css33.png",
    title: "CSS 3",
  },
  {
    image: "https://i.ibb.co/qjbHY54/react.png",
    title: "React",
  },
  {
    image: "https://i.ibb.co/6JtytQZ/node.png",
    title: "NodeJS",
  },
  {
    image: "https://i.ibb.co/94WQ3zw/postgre.png",
    title: "PostgreSQL",
  },
  {
    image: "https://i.ibb.co/Mp5dn9p/redux.png",
    title: "Redux",
  },
  {
    image: "https://i.ibb.co/KFyVKTb/sequelize.png",
    title: "Sequelize",
  },
  {
    image: "https://i.ibb.co/ZhFZBxb/express.png",
    title: "Express Js",
  },
];

function Cards() {
  return (
    <ContenedorCartas>
      {auxiliar.map((c) => (
        <Card title={c.title} image={c.image} />
      ))}
    </ContenedorCartas>
  );
}

export default Cards;
