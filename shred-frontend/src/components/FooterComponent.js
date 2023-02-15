import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";

const FooterComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '4vh' }}>
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand href="/" style={{ color: 'white', fontSize: '1vh' }}>
          © 2023 Jerry Miao. All rights reserved.
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default FooterComponent