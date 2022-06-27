import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>NavBar</div>
      <Link to='/about'>Sobre mi</Link>
      <Link to='/projects'>Proyectos</Link>
      <Link to='/skills'>Tecnologías</Link>
      <Link to='/contact'>Contacto</Link>
    </div>
  );
}
