
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';


const Header = () => {
  return (


    <Navbar bg="dark" variant="dark" expand="lg">
         <Container className="mt-3"> {/* Add margin-top here */}
        {/* Add your logo image and link here */}
        <Navbar.Brand href="#home">
          <img
            src="https://www.shutterstock.com/image-vector/dog-paw-vector-footprint-icon-600nw-1487692316.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Paws Logo"
          />
          {' Paws'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

{/* About Link */}
<Nav.Link href="#about">About</Nav.Link>

{/* Contact Link */}
<Nav.Link href="#contact">Contact</Nav.Link>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




