import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.scss";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">
              <img
              alt="Logo"
              src="./Logo.png"  
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Main page</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About me</Nav.Link>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
            <NavDropdown title="Приколоться здесь" id="basic-nav-dropdown">
              <NavDropdown.Item href="/art">Арт генератор</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/weather">
                Какая сейчас погода
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/countries">Страны мира и их флаги</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/smile">
                Бегающий за курсором смайлик
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;