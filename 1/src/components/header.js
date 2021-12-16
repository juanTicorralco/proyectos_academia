import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mb-5">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Proyecto React Redux</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
