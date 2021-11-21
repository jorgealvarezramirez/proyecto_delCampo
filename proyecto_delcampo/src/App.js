import React from "react";
import Header from "./Components/Header/Header";
// import ProductsList from "./Components/Products/ProductsList";
import "boxicons";
import { BrowserRouter as Route } from "react-router-dom";

import Pages from "./Components/Pages";

function App() {
  return (
    <div className="App">
      <Route>
        <Header />
        <Pages/>
      </Route>
    </div>
  );
}

export default App;
