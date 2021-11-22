import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import logo from '../Img/logo_delcampo_b.svg';

const Dashboard = () => {

    let {signOut} = useContext(AuthContext);


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><img src={logo} className="App-logo"/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={signOut}>Salir</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            <Outlet/>
        </>
    )
}

export default Dashboard;