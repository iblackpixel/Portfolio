import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: inset;
  border-color: ${colors.secundario};
  height: 50vh;
  width: 40vw;
  margin: 2vh;
  padding: 0.5vh;
  border-radius: 1rem;
  @media screen and (max-width: 660px) {
    height: 55vh;
    width: 60vw;
  }
`;
const Title = styled.div`
  margin: 1vh;
  text-decoration: none;
  font-size: 2vh;
  font-weight: light;
  font-family: Lato;
`;
const ContenedorImagen = styled.div`
  display: flex;
  height: 30vh;
  width: 30vw;
  object-fit: contain;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 660px) {
    width: 40vw;
  }
`;
const ImageUrl = styled.img`
  height: 25vh;
  width: 30vw;
  object-fit: contain;
  @media screen and (max-width: 660px) {
    width: 40vw;
  }
`;
const ContenedorLinks = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
const LinkDeploy = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 15 vw;
  text-decoration: none;
  font-size: 2vh;
  font-weight: light;
  font-family: Lato;
  margin: 2vh;
  border-style: solid;
  border-color: ${colors.terciario};
  margin: 0.4rem;
  border-radius: 0.5rem;
  color: ${colors.terciario};
  &:visited {
    color: ${colors.principal};
    text-decoration: none;
  }
  &:hover {
    color: ${colors.principal};
    text-decoration: none;
  }
  @media screen and (max-width: 660px) {
    width: 25vw;
  }
`;
const Description = styled.a`
  text-decoration: none;
  font-size: 2vh;
  font-weight: light;
  font-family: Lato;
  height: 10 vh;
  width: 40vw;
  @media screen and (max-width: 660px) {
    width: 50vw;
  }
`;
const ContenedorDescription = styled.div`
  display: flex;
  height: 20vh;
  width: 40vw;
  margin: 1.5vh;
  @media screen and (max-width: 660px) {
    width: 50vw;
  }
`;
function Project({ title, url, repo, description, image }) {
  return (
    <Contenedor>
      <Title>{title}</Title>
      <ContenedorImagen>
        <ImageUrl src={image} alt={`Imagen ${title}`} />
      </ContenedorImagen>
      <ContenedorLinks>
        <LinkDeploy href={url} target='_blank'>
          Deploy
        </LinkDeploy>
        <LinkDeploy href={repo} target='_blank'>
          Repo
        </LinkDeploy>
      </ContenedorLinks>
      <ContenedorDescription>
        <Description>{description}</Description>
      </ContenedorDescription>
    </Contenedor>
  );
}

export default Project;
