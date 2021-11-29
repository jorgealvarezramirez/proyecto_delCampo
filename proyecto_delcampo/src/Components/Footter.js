import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import logo from '../Img/logo_delcampo_b.svg';

const Footter = () => {

    let { signOut } = useContext(AuthContext);


    return (
        <>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="App-logo" />
                        <h6>Todos los derechos reservados ©2021</h6>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={signOut}>PQRS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
}

export default Footter;