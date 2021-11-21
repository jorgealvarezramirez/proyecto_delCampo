import React from "react";
import Banano from "../../assets/productos/Banano.png";

const ProductsList = () => {
  return (
    <>
      <h2 className="title">PRODUCTOS</h2>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={Banano} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h3>Title</h3>
            <p> Categoria</p>
            <p className="price">$1400=</p>
          </div>
          <div className="buttom">
            <button className="btn">Agregar al Carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
