import React from "react";
import Header from "./Components/Header/Header";
import "boxicons";
import { BrowserRouter as Route } from "react-router-dom";
import Pages from "./Components/Pages";
import { DataProvider } from "./Context/DataProvider";

function App() {
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
