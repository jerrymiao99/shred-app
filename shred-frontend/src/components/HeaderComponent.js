import React, { useCallback } from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: '8vh' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'white' }}>
          <FontAwesomeIcon icon={faPersonSnowboarding} />{'  '}
          Shred
        </Navbar.Brand>
        <Navbar.Collapse>
          {props.loggedIn ? null : <Button variant="outline-info"
            onClick={props.onLoginButton} style={{ position: 'fixed', right: '100px' }}>
            Login</Button>}
          {props.loggedIn ? null : <Button variant="outline-info"
            onClick={props.onRegisterButton} style={{ position: 'fixed', right: '10px' }}>Signup</Button>}
          {props.loggedIn ? <Button variant="outline-info"
            onClick={props.onLogoutButton} style={{ position: 'fixed', right: '1px' }}>Logout</Button> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderComponent