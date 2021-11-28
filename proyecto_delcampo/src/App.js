import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Router, Routes } from 'react-router';
import './App.css';
//import bootstrap componentes
import 'bootstrap/dist/css/bootstrap.min.css';
// Import component
import Banner from './components/Banner';
import Barra from './components/Barra';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login'


function App() {
  return (

    <Router>
      <>
        <Home />
      </>
      {/*          <Route path="/barra"></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home autorizado={false} />}></Route> */}

    </Router >
    /*
        <div className="App">
          <header className="App-header">

          </header>
        </div> */
  );
}

export default App;
