import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate();

    const btnLogin = () => {
        navigate('/home');
    }

    return (
        <>
            <Card border="dark" style={{ width: '15rem' }}>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    {/*-----Usuario-----*/}
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Usuario</InputGroup.Text>
                        <FormControl aria-label="First name" />
                    </InputGroup>
                    {/*-----Password-----*/}
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Password</InputGroup.Text>
                        <FormControl type="password" aria-label="First name" />
                    </InputGroup>
                    {/*-----Boton Login-----*/}
                    <Button variant="primary" onClick={btnLogin}>Iniciar Sesión</Button>

                </Card.Body>
            </Card>
        </>
    )
}

export default Login
