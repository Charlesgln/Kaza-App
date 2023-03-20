import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src="../logo-kaza.png" alt="logo de kaza" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/a-propos">
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
