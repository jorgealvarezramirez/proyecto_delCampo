import React, { useState, useEffect, createContext } from "react";
import Data from "../Data.js";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = Data;
    setProducts(products);
  }, []);
 
  const value = {
    products: [products],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
