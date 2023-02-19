import React, { useCallback } from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '8vh' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'white' }}>
          <FontAwesomeIcon icon={faPersonSnowboarding} />{'  '}
          Shred
        </Navbar.Brand>
        <Navbar.Collapse>
          <Button variant="outline-info" onClick={props.onLoginButton}>
            LOGINORLOGOUT</Button>
          <Button variant="outline-info" onClick={props.onRegisterButton}>Signup</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderComponent