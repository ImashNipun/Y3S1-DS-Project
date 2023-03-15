import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { BsSearch, BsCart2 } from "react-icons/bs";
import "./navigationStyle.css"

export default function NavBar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand className="me-5">RareAyur</Navbar.Brand>
          <Navbar.Toggle aria-controls="rareayur-navbar" />
          <Navbar.Collapse id="rareayur-navbar">

            {/* Search Bar */}

            <InputGroup className=" mt-2 mt-lg-0">
              <Form.Control type="search" placeholder="Search" />
              <Button className="search-btn">
                <BsSearch />
              </Button>
            </InputGroup>

            {/* Nav Links */}

            <Nav className="ms-5 nav-links">
              <Nav.Link className="me-3 text-white">Shop</Nav.Link>
              <Nav.Link className="me-3 text-white">About</Nav.Link>
              <Nav.Link className="me-3 text-white">Q&A</Nav.Link>
            </Nav>
            <Nav className="ms-5 nav-links">
              <Nav.Link className="me-3 text-white">SignIn</Nav.Link>
              <Nav.Link className="me-3 text-white">
                <BsCart2 className="bucket"/>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
