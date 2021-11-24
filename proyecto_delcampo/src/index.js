import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  //Envolver  en browserRouter

  <BrowserRouter>
    <App />

  </BrowserRouter>,

  document.getElementById('root')
);


