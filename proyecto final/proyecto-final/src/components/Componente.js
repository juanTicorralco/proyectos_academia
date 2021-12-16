import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Comp = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Tab.Content>
              <nav>
                <Navbar expand="lg" variant="light" bg="light">
                  <Container>
                    <Navbar.Brand>
                      <NavLink to="/" activeStyle={activeStyle} exact>
                        Menu
                      </NavLink>
                    </Navbar.Brand>
                  </Container>
                </Navbar>
                <div className="d-grid gap-2">
                  <NavLink to="/paises" activeStyle={activeStyle}>
                    Paises
                  </NavLink>

                  <NavLink to="/continentes" activeStyle={activeStyle}>
                    Continentes
                  </NavLink>
                </div>
              </nav>
            </Tab.Content>
          </Col>
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h2>hola</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2>como estas</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Comp;
