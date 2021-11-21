import React from "react";
import logo_Delcampo from "../../assets/logo_Delcampo_C.png";

const Header = () => {
  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src={logo_Delcampo} alt="" width="150" />
        </div>
      </a>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
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
