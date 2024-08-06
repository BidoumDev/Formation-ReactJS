import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const NavBar = (props) => {     // Arrow function
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Thumbnail</Nav.Link>
            <Nav.Link href="#features">edit id:1</Nav.Link>
            <Nav.Link href="#pricing">Nouveau</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

NavBar.propTypes = {
  children: PropTypes.any.isRequired
};

NavBar.defaultProps = {
  children: 'Template NavBar'
};

export default NavBar;
