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


    const handleName = (e)=>{
        setName(e.target.value);
    }

    const handleLastname = (e)=>{
        setLastname(e.target.value);
    }

    const handleNicknames = (e)=>{
        setNicknames(e.target.value);
    }

    const handleId = (e)=>{
        setId(e.target.value);
    }

    const handleTel = (e)=>{
        setTel(e.target.value);
    }

    const handleAddress = (e)=>{
        setAddress(e.target.value);
    }

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
        handleAuth(name, lastName, nickNames, id, tel, address, user, password);
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
                    <div className="mb-3">
                        <div>
                        <InputGroup className="mb-3" controlId="formName">
                            <FormControl value={name} name="name" type="text" placeholder="Nombre"onChange={handleName} aria-label="Nombre" />
                        </InputGroup>

                        <InputGroup className="mb-3" controlId="formLastName">
                            <FormControl value={lastName} name="lastName" type="text" placeholder="Apellido"onChange={handleLastname} aria-label="Apellido" />
                        </InputGroup>
                    </div>

                    
                    <InputGroup className="mb-3" controlId="formNickName">
                        <FormControl value={nickNames} name="nickName" type="text" placeholder="Apodo"onChange={handleNicknames} aria-label="Apodo" />
                    </InputGroup>

                    <div>
                        <Form.Select >
                            <option>Tipo de documento</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula de extrangería</option>
                            <option value="3">Pasaporte</option>
                        </Form.Select>

                        <InputGroup className="mb-3" controlId="formId">
                            <FormControl value={id} name="id" type="Id" placeholder="Número de identificación"onChange={handleId} aria-label="Id" />
                        </InputGroup>
                    </div>

                    <div>
                        <InputGroup className="mb-3" controlId="formTel">
                            <FormControl value={tel} name="tel" type="tel" placeholder="Número de teléfono"onChange={handleTel} aria-label="Tel" />
                        </InputGroup>

                        <InputGroup className="mb-3" controlId="formAdress">
                            <FormControl value={address} name="Adress" type="Adress" placeholder="Dirección"onChange={handleAddress} aria-label="Dirección" />
                        </InputGroup>
                    </div>

                    <div>
                    <InputGroup className="mb-3" controlId="formEmail">
                        <FormControl value={user} name="email" type="email" placeholder="Correo electrónico"onChange={handleUser} aria-label="Correo" />
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formPassword">
                        <FormControl value={password} name="password" type="password" placeholder="Contraseña" onChange={handlePassword} type="password" aria-label="password"/>
                    </InputGroup>
                    </div>
                </div>

                    {/* <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Mostrar contraseña" />
                    </Form.Group> */}
                    <Button variant="light" type="submit" onClick={handleLogin}>
                        Iniciar sesión
                    </Button>
                    <Button variant="succes" type="submit" onClick={handleRegistration} >
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