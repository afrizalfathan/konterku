import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div>
            <Navbar expand="lg" bg="body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={Logo} width="100" height="30" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Item className="mx-3">
                                <Nav.Link href="/" active>
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-3">
                                <Nav.Link href="#">Testimonial</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-3">
                                <Nav.Link href="#">Bantuan</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Link to="/login">
                            {" "}
                            <Button variant="outline-success" className="mx-3">
                                Login/Register
                            </Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="main-container-body">
                <Outlet />
            </div>
        </div>
    )
}

export default Navigation
