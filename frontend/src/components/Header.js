import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >Ecommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/cart">
                <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header