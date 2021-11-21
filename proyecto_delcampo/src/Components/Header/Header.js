import React from "react";
import logo_Delcampo from "../../assets/logo_Delcampo_C.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={logo_Delcampo} alt="" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="ProductsList">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">99</span>
      </div>
    </header>
  );
};

export default Header;
