import './Footer.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react'
import logo from '../logo.svg';
import AuthContext from '../context/AuthContext'
import Footter from './Footter';
import Top_bar from './Top_bar';


const Registration = () => {
    //Usar el context
    const {handleAuth} = useContext(AuthContext);
    //Usar el hook useState para los estados del componente
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastname] = useState("");
    const [nickNames, setNicknames] = useState("");
    const [id, setId] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");


    const handleUser = (e)=>{
        setUser(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = ()=>{
        handleAuth(user, password);
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
                    <h2>Registro</h2>
                    <br/>
                    <InputGroup className="mb-3" controlId="formName">
                        <FormControl value={name} name="name" type="text" placeholder="Nombre"onChange={handleUser} aria-label="Nombre" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formLastName">
                        <FormControl value={lastName} name="lastName" type="text" placeholder="Apellido"onChange={handleUser} aria-label="Apellido" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formNickName">
                        <FormControl value={nickNames} name="nickName" type="text" placeholder="Apodo"onChange={handleUser} aria-label="Apodo" />
                    </InputGroup>

                    <FloatingLabel controlId="floatingSelect" label="Works with selects">
                        <Form.Select >
                            <option>Tipo de documento</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula de extrangería</option>
                            <option value="3">Pasaporte</option>
                        </Form.Select>
                    </FloatingLabel>

                    <InputGroup className="mb-3" controlId="formId">
                        <FormControl value={id} name="id" type="Id" placeholder="Número de identificación"onChange={handleUser} aria-label="Id" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formTel">
                        <FormControl value={tel} name="tel" type="tel" placeholder="Número de teléfono"onChange={handleUser} aria-label="Tel" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formAdress">
                        <FormControl value={address} name="Adress" type="Adress" placeholder="Dirección"onChange={handleUser} aria-label="Dirección" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formEmail">
                        <FormControl value={user} name="email" type="email" placeholder="Correo electrónico"onChange={handleUser} aria-label="Correo" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formPassword">
                        <FormControl value={password} name="password" type="password" placeholder="Contraseña" onChange={handlePassword} type="password" aria-label="password"/>
                    </InputGroup>

                    {/* <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Mostrar contraseña" />
                    </Form.Group> */}
                    <Button variant="light" type="submit" onClick={handleLogin}>
                        Iniciar sesión
                    </Button>
                    <Button variant="succes" type="submit" onClick={handleLogin} >
                        Regístrate
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Form>
            </header>

            <Footter/>
        </>
    )
}

export default Registration