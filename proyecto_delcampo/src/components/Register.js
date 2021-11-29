import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import "./Components.css";
import logo from "../logo.svg"

const Register = () => {
  //Crear contexto de tipo AuthContext
  const { handleRegister } = useContext(AuthContext);

  const objForm = {
    name: "",
    lastname: "",
    nickname: "",
    kindId: "",
    id: "",
    tel: "",
    address: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(objForm);

  const handleForm = (e) => {
    let array = { ...form, [e.target.name]: e.target.value };
    setForm(array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Llamar la función del contexto
    handleRegister(form);
    setForm(objForm);
  };

  return (
    <div className="register">
      <br />
      <img className="logo" src={logo} />
      <br />
      <br />
      <br />
      <h2>Regístrate</h2>
      <br />
      {/**Formulario de registro**/}
      <Form onSubmit={handleSubmit}>
        <Row>
          {/**Nombre***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.name}
                onChange={handleForm}
                name="name"
                id="name"
                type="text"
                placeholder="Nombre"
                required
              />
            </Form.Group>
          </Col>
          {/**Apellido***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.lastname}
                onChange={handleForm}
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Apellido"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/**apodo***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.nickname}
                onChange={handleForm}
                name="nickname"
                id="nickname"
                type="text"
                placeholder="¿Cómo te gusta que te llamen?"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/**Tipo de cédula***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.kindId}
                onChange={handleForm}
                name="kindId"
                id="kindId"
                type="text"
                placeholder="Tipo de documento"
                required
              />
            </Form.Group>
          </Col>
          {/**Id***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.id}
                onChange={handleForm}
                name="id"
                id="id"
                type="text"
                placeholder="Número de documento"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/**Teléfono***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.tel}
                onChange={handleForm}
                name="tel"
                id="tel"
                type="number"
                placeholder="Número celular"
                required
              />
            </Form.Group>
          </Col>
          {/**dirección***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.address}
                onChange={handleForm}
                name="address"
                id="address"
                type="text"
                placeholder="Dirección"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/**Email***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.email}
                onChange={handleForm}
                name="email"
                id="email"
                type="email"
                placeholder="Correo electrónico"
                required
              />
            </Form.Group>
          </Col>
          {/**Password***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={form.password}
                onChange={handleForm}
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {/**Botón de registro***/}
        <Button variant="light" type="submit" className="BotonS">
          Iniciar sesión
        </Button>
        <Button variant="primary" type="submit" className="Boton">
          Registrame
        </Button>
      </Form>

    </div>


  );
};

export default Register;
