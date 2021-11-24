import './App.css';
//Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnauthRouter from './routers/UnauthRouter';

import React from "react";
import Header from "./Components/Header/Header";
import ProductsList from "./Components/Products/ProductsList";
import "boxicons";

function App() {

  const {auth} = useContext(AuthContext);

  return (
    <div className="App">
      
      {auth? <AuthRouter/>: <UnauthRouter/>}

      <Header />
      <ProductsList />
    </div>
  );
}

export default App;
