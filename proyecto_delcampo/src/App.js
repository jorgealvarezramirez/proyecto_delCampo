//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Router, Routes } from 'react-router';
// import './App.css';
// //import bootstrap componentes
// import 'bootstrap/dist/css/bootstrap.min.css';
// // Import component
// import Home from './components/Home';
// import Login from './components/Login'

import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnauthRouter from './routers/UnauthRouter';

function App() {
  const { auth } = useContext(AuthContext);
  return (

    // <Router>
    //   <>
    //     <Home />
    //   </>

    // </Router>

    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>
    <div className="App">
      {auth ? <AuthRouter /> : <UnauthRouter />}
    </div>
  );
}

export default App;