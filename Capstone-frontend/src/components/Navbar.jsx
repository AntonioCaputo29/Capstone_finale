import React from 'react';
import { Navbar, Nav, NavDropdown,  Container } from 'react-bootstrap';
import '../App.css';

import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";
import showbeach from "../immagini/show beach.png"

function Navigation() {
  return (
    <Navbar sticky="top" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">
        <img className='display-8 fw-bold ml-3 logo-img' src={showbeach} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto sticky-top">
            <Nav.Link href="/" style={{ color: '#058789' }}>Home</Nav.Link>
            <NavDropdown title="Contatti" id="basic-nav-dropdown" className="custom-dropdown" style={{ color: '#F7931E'}}>
              <NavDropdown.Item href="https://web.whatsapp.com/" >
                <FaPhoneAlt className="me-2 text-white" />
               <span className='text-white'> 324.1525557</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/intl/it/gmail/about/">
                <FaEnvelope className="me-2 text-white" />
                <span className='text-white'>showbeach@estate.com</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.facebook.com/"  style={{ color: '#F7931E' }} ><FaFacebook className="me-3" /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/"  style={{ color: '#F7931E' }} ><FaInstagram className="me-3" /></Nav.Link>
              <Nav.Link href="https://www.youtube.com/" style={{ color: '#F7931E' }} ><FaYoutube className="me-3" /></Nav.Link>
              <Nav.Link href="https://www.google.com/"  style={{ color: '#F7931E' }} ><FaGoogle className="me-3" /></Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

