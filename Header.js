import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from './Images/logo.jpeg';
const Header = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>ONLINE ART GALLERY</h1>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:"bold",fontFamily:"cursive"}}><img src={logo} style={{height:"40px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Home</Nav.Link>
            <Nav.Link href="/about"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>About</Nav.Link>
            <Nav.Link href="/product"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Product</Nav.Link>
            <Nav.Link href="/profile"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Profile</Nav.Link>
            <Nav.Link href="/feedback"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Feedback</Nav.Link>
            <Nav.Link href="/cart"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
