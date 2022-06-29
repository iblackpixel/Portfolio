import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ContenedorSuperior = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  margin: 0.5vh;
  padding: 0.5vh;
`;
function Projects() {
  const descriptionHD =
    "Henry Dogs es una web de perros que incluye: búsquedas, filtrados, ordenamientos y creación de razas.";
  const descriptionIS =
    "Infusion Store es un ecommerce de infusiones hecho en React con app movil generada en React Native. Proyecto grupal final Bootcamp SoyHenry.";
  return (
    <ContenedorSuperior>
      <h1>Mis Proyectos</h1>
      <Contenedor>
        <Project
          title='Henry Dogs'
          url='https://pihenry-dogs.vercel.app'
          repo='https://github.com/iblackpixel/PIHenryDogs'
          description={descriptionHD}
          image='https://i.ibb.co/Q8KYxhc/Henry-Dogs-Port.png'
        >
          Henry Dogs
        </Project>
        <Project
          title='Infusion Store'
          url='https://pf-gp1-deploy.vercel.app/'
          repo='https://github.com/iblackpixel/InfusionStore'
          description={descriptionIS}
          image='https://i.ibb.co/kGvDb5h/infusionstoreport.png'
        >
          Infusion Store
        </Project>
      </Contenedor>
    </ContenedorSuperior>
  );
}

export default Projects;
