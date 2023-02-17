import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '8vh' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'white' }}>
          <FontAwesomeIcon icon={faPersonSnowboarding} />{'  '}
          Shred
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default HeaderComponent