import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img
              src="https://www.ladoweb.com.ar/wp-content/uploads/2022/10/logo_final.png"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Catálogo</Nav.Link>
            <Nav.Link as={Link} to='/category/oferta'>Ofertas</Nav.Link>
            <NavDropdown title="Colores" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/color/negro'>Negro</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/rojo'>Rojo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/azul'>Azul</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/rosa'>Rosa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/verde'>Verde</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/violeta'>Violeta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/celeste'>Celeste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/amarillo'>Amarillo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/color/gris'>Gris</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Shop <CartWidget />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
