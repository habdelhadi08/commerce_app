import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "red", fontSize: "x-large" }}>
          Fashionista Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              style={{ color: "red", fontSize: "x-large" }}
            >
              Home
            </Nav.Link>

            <NavDropdown
              id="navbarScrollingDropdown"
              style={{ fontSize: "x-large" }}
            >
              <NavDropdown.Item href="#action3">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Men</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Kids</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
