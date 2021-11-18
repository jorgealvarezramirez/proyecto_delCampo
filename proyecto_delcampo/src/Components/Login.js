import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Login = ({ hanleAuth }) => {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const btnLogin = () => {
        hanleAuth(user, password);
    }

    return (
        <>
            <header className="App-header">
                <Form>
                    <h2>Iniciar sesión</h2>
                    <br/>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" placeholder="Email"onChange={handleUser} aria-label="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control type="password" placeholder="Contraseña" onChange={handlePassword} type="password" aria-label="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Mostrar contraseña" />
                    </Form.Group>
                    <Button variant="light" type="submit" onClick={btnLogin} >
                        Regístrate
                    </Button>
                    <Button variant="success" type="submit" onClick={btnLogin}>
                        Iniciar sesión
                    </Button>
                </Form>
            </header>
        </>
    )
}

export default Login