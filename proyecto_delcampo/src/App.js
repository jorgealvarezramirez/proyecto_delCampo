
import './App.css';
//Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Footer from './Components/Footter';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Login />
        {/* <Footer/> */}
        <br />
      </header>
    </div>
  );
}

export default App;
