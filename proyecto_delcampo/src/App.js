import './App.css';
//Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnauthRouter from './routers/UnauthRouter';

import React from "react";
import Header from "./Components/Header/Header";
import "boxicons";
import { BrowserRouter as Route } from "react-router-dom";
import Pages from "./Components/Pages";
import { DataProvider } from "./Context/DataProvider";

function App() {

  const {auth} = useContext(AuthContext);

  return (
    <DataProvider>
      <div className="App">
        <Route>
          <Header />
          <Pages />
        </Route>
      </div>
    </DataProvider>
  );
}

export default App;
