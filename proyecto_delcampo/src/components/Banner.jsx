import React from 'react'
import BannerHome from './assets/banners/banner-1-home.jpg';
import LogoCampo from './assets/logo_Delcampo_C.png';
import AuthContext from '../context/AuthContext';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

const Ban = () => {

    let { login } = useContext(AuthContext);
    let { register } = useContext(AuthContext);

    return (
        <>

            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <img src={LogoCampo} align="left" width="25%" height="20%" />
                    {/* <ProgressBar variant="success" now={40} /> */}
                    <Nav.Item>
                        <ButtonGroup aria-label="Basic example">
                            <Link to="/Login.js">
                                <Button variant="outline-success" onClick={login}>Inicio de Sesion</Button>
                            </Link>
                            <Button variant="outline-success" onClick={register}>Registro</Button>
                        </ButtonGroup>
                    </Nav.Item>

                </Container>
            </Navbar>
            <br />
            <img src={BannerHome} align="center" width="100%" height="75%" />
        </>
    )
}

export default Ban;