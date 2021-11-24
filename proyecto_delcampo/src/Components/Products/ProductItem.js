import React from "react";
// import Banano from "../../assets/productos/Banano.png";
import ProductsList from "./ProductsList";

const ProductItem = ({id, title, price, image, category}) => {
  console.log(image)
  return (
    <div className="producto">
      <a href="#">
        <div className="producto__img">
          <img src={image.default} alt={title} />
        </div>
      </a>
      <div className="producto__footer">
        <h3>{title}</h3>
        <p> {category}</p>
        <p className="price">${price} </p>
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
  );
};

export default ProductItem;
