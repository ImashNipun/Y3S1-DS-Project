import React ,{useContext}from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navigationStyle.css";
import { Cartcontext } from "../context/Context";
import useAuth from "../hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";

export default function NavBar() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  const{auth} = useAuth();

  return (
    <Navbar variant="dark" expand="lg" className="nav-bar" sticky="top">
      <Container>
        <Link to="/" className="nav-bar-link-comp">
          <Navbar.Brand className="me-5">RareAyur</Navbar.Brand>
        </Link>
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
            <Nav.Link className="me-3 text-white">
              <Link to="/shop" className="nav-bar-link-comp">
                Shop
              </Link>
            </Nav.Link>
            <Nav.Link className="me-3 text-white">
              <Link to="/about" className="nav-bar-link-comp">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="me-3 text-white">
              <Link to="/Q&A" className="nav-bar-link-comp">
                Q&A
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ms-5 nav-links">
            <Nav.Link className="me-3 text-white">
              {auth.userdata? <ProfileDropdown/> : <Link to="/login" className="nav-bar-link-comp">
                SignIn
              </Link>}
              
            </Nav.Link>
            <Nav.Link className="me-3 text-white">
              <Link to="/cart" className="nav-bar-link-comp">
                <div className="d-flex bucket-container">
                  <BsCart2 className="bucket" />
                  <span className="cart-count">{state.length}</span>
                </div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
