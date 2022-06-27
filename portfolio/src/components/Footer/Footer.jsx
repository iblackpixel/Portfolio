import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Link to='/Github'>Github</Link>
      <Link to='/Linkedin'>LinkedIn</Link>
    </div>
  );
}

export default Footer;
