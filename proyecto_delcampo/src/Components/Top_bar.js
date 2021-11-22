import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import logo from '../Img/logo_delcampo_b.svg';

const Top_bar = () => {

    let {signOut} = useContext(AuthContext);


    return (
        <>
            <Navbar variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link onClick={signOut}>Barra de herramientas</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            <Outlet/>
        </>
    )
}

export default Top_bar;