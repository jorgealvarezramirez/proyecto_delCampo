import React from "react";
import Producto from "./Producto";
import Banano from "../assets/productos/1_Banano.png";
import Durazno from "../assets/productos/1_Durazno.png";
import Fresa from "../assets/productos/1_Fresa.png";

const productos = [
  {
    id: "1",
    title: "Banano",
    image: "1_Banano.png",
  },
  {
    id: "2",
    title: "Durazno",
    image: "1_Durazno.png",
  },
  {
    id: "3",
    title: "Fresa",
    image: "1_Fresa.png",
  },
];

function Productos() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={productos.id}>
            <Producto title={productos.title} imageSource={productos.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
