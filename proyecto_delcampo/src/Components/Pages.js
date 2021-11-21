// Para enturar el proyecto
import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import ProductsList from "./Products/ProductsList";
const Pages = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/ProductsList" exact component={ProductsList} />
      </Switch>
    </section>
  );
};

export default Pages;
