import React from "react";

function Producto({ title, imageSource }) {
  return (
    <div className="producto text-center bg-dark ">
      <img src={imageSource} alt="fruta banano" />
      <div className="producto-body text-light">
        <h6 className="producto-title">{title}</h6>
        <p className="producto-text text-secondary">1 Kilo</p>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
          Agregar al Carrito
        </a>
      </div>
    </div>
  );
}

export default Producto;
