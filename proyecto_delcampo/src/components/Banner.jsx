import React from 'react'
import BannerHome from './assets/banners/banner-1-home.jpg';
import LogoCampo from './assets/logo_Delcampo_C.png';
import { Navbar, Container, ButtonGroup, Button, Nav, Form, Spinner } from 'react-bootstrap';


export default function banner() {

    return (
        <>

            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <img src={LogoCampo} align="left" width="25%" height="20%" />
                    {/* <ProgressBar variant="success" now={40} /> */}
                    <Nav.Item>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-success">Inicio de Sesion</Button>
                            <Button variant="outline-success">Registro</Button>
                        </ButtonGroup>
                    </Nav.Item>

                </Container>
            </Navbar>
            <br />
            <img src={BannerHome} align="center" width="100%" height="75%" />
        </>
    )
}
