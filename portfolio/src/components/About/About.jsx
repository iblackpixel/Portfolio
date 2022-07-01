import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${colors.cuarto};
`;
const ContenedorTexto = styled.div`
  display: flex;
  width: 70%;
  margin: 1vh;
  text-decoration: none;
  font-size: 2.5vh;
  font-weight: light;
  font-family: Lato;
  text-align: justify;
`;
const texto =
  "Entusiasta, atento y comprometido.  Busco desafíos que me ayuden a desarrollar mis habilidades al máximo.  Con una sutil preferencia por el back pero siempre abierto a progresar en el front.  ";
const texto2 =
  "Mi background viene de una formación como técnico y universitaria hasta tercer año completo en ingeniería eléctrica y laboral primero como ayudante de Laboratorio de Física y diez años en At. al Cliente en telecomunicaciones.  Mis años de formación me han permitido desarrollar mi amor por la resolución de problemas y me han forjado duramente en matemática y física, además de dotarme de un criterio técnico.  También me permitieron acercarme a la docencia en mis años de ayudante estudiantil en el laboratorio de Física y me acercaron a la programación por primera vez, donde no era JavaScript sino rudimentos de C. ";
const texto3 =
  " Ya en mis años laborales, aunque fuera de mi ecosistema y confort pude crecer en la atención al público y llevándome habilidades como la escucha activa y la empatía orientada al cliente.  También, a su manera, la post venta es resolución de problemas.  No quiero olvidarme que en ese tiempo trabajando empecé con un perfil casi nulo en ventas y pude trabajar en ello hasta destacarme repetidamente en este ítem adaptándome al rol y utilizando mis habilidades y perfil para tener mi propio estilo de vendedor.  Creo que mi principal diferencial es mi dedicación y apego a la cultura de trabajo de la empresa. Lo cual me llevó a obtener un reconocimiento internacional en materia de Integridad en 2021 desde la empresa Telefónica. ";
const texto4 =
  " Mi formación como developer la cursé en Henry y las tecnologías que manejo son las siguientes:HTML, CSS, JavaScript, SQL, React ,React Native, Redux, Node.js, Express, Postgres, Sequelize, Scrum. ";
const texto5 = " ¿Una frase?  “La estrella siempre es el equipo”.";
function About() {
  return (
    <Contenedor>
      <Title>SOBRE MI</Title>
      <ContenedorTexto>{texto}</ContenedorTexto>
      <ContenedorTexto>{texto2}</ContenedorTexto>
      <ContenedorTexto>{texto3}</ContenedorTexto>
      <ContenedorTexto>{texto4}</ContenedorTexto>
      <ContenedorTexto>{texto5}</ContenedorTexto>
    </Contenedor>
  );
}

export default About;
