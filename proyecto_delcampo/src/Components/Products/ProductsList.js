import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  console.log(products);

  return (
    <>
      <h2 className="title">PRODUCTOS</h2>
      <div className="productos">
        {
          products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            cantidad={product.cantidad}
          />
        ))}

        {/* <ProductItem /> */}

      </div>
    </>
  );
};

export default ProductsList;
