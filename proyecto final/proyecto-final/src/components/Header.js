import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <Link to="/" activeStyle={activeStyle} exact>
        Home
      </Link>
      {" | "}
      <Link to="/paises" activeStyle={activeStyle}>
        Continentes
      </Link>
      {" | "}
      <Link to="/continentes" activeStyle={activeStyle}>
        paises
      </Link>
    </nav>
  );
};

export default Header;
