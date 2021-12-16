import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Col, Row, Tab, Container, Navbar } from "react-bootstrap";

const MenuPaises = () => {
  return (
    <div>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        className="d-flex"
      >
        <Row>
          <Col sm={3}>
            <Tab.Content>
              <nav>
                <Navbar expand="lg" variant="light" bg="light">
                  <Container className="d-block ">
                    <Accordion defaultActiveKey="0" className="d-block">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Menu </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-grid gap-2">
                            <Link
                              className="d-block p-3 bg-dark text-white badge badge-primary text-wrap text-decoration-none"
                              to="/"
                            >
                              Home
                            </Link>
                            <Link
                              className="d-block p-3 bg-dark text-white badge badge-primary text-wrap text-decoration-none"
                              to="/paises"
                            >
                              Paises
                            </Link>
                            <Link
                              className="d-block p-3 bg-dark text-white badge badge-primary text-wrap text-decoration-none"
                              to="/continentes"
                            >
                              Continentes
                            </Link>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Container>
                </Navbar>
              </nav>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
export default MenuPaises;
