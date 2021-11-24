import './Footer.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react'
import logo from '../logo.svg';
import AuthContext from '../context/AuthContext'
import Footter from './Footter';
import Top_bar from './Top_bar';
import Registration from './Registration';


const Login = () => {
    //Usar el context
    const {handleAuth} = useContext(AuthContext);
    //Usar el hook useState para los estados del componente
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e)=>{
        setUser(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = ()=>{
        handleAuth(user, password);
    }

    const handleRegistration = ()=>{
        handleAuth();
    }

    return (
        <>
        <Top_bar/>
            <header className="App-header">
                <Form>
                    
                    <br/>
                    <br/>
                    <img src={logo} className="App-logo"/>
                    <br/>
                    <br/>
                    <h2>Iniciar sesión</h2>
                    <br/>
                    <InputGroup className="mb-3" controlId="formEmail">
                        <FormControl value={user} name="user" type="email" placeholder="Email"onChange={handleUser} aria-label="email" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formPassword">
                        <FormControl value={password} name="password" type="password" placeholder="Contraseña" onChange={handlePassword} type="password" aria-label="password"/>
                    </InputGroup>
                    {/* <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Mostrar contraseña" />
                    </Form.Group> */}
                    <Button variant="light" type="submit" onClick={handleRegistration} >
                        Regístrate
                    </Button>
                    <Button variant="success" type="submit" onClick={handleLogin}>
                        Iniciar sesión
                    </Button>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Form>
            </header>
            <Registration/>

            <Footter/>
        </>
    )
}

export default Login