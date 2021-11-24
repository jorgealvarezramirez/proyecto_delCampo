import React from 'react'
import frutas from './assets/Imagenes/Categorias/cat_1_frutas.jpg';
import verduras from './assets/Imagenes/Categorias/cat_2_Verduras.jpg';
import legumbres from './assets/Imagenes/Categorias/cat_3_Legumbres.jpg';
import tuberculos from './assets/Imagenes/Categorias/cat_4_Tuberculos.jpg';
import lacteos from './assets/Imagenes/Categorias/cat_5_Lacteos.jpg';
import huevos from './assets/Imagenes/Categorias/cat_6_Huevos.jpg';
import carnes from './assets/Imagenes/Categorias/cat_7_Carne_pollo_pescado.jpg';
import otros from './assets/Imagenes/Categorias/cat_8_Otros.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';


export default function home() {

    return (
        <>
            <div align="center">
                <tr>
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '15rem' }}>
                            <Card.Img bg='Success' variant="top" src={frutas} />
                            <Card.Body>
                                <Card.Title>Frutas</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={verduras} />
                            <Card.Body>
                                <Card.Title>Verduras</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={legumbres} />
                            <Card.Body>
                                <Card.Title>Legumbres</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={tuberculos} />
                            <Card.Body>
                                <Card.Title>Tuberculos</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={lacteos} />
                            <Card.Body>
                                <Card.Title>Lacteos</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={huevos} />
                            <Card.Body>
                                <Card.Title>Huevos</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={carnes} />
                            <Card.Body>
                                <Card.Title>Carne / Pollo</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card border="success" style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={otros} />
                            <Card.Body>
                                <Card.Title>Otros</Card.Title>
                                <Button variant="outline-success">✪</Button>
                            </Card.Body>
                        </Card>
                    </td>
                </tr>
            </div>
        </>
    )
}

