import { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Outlet } from "react-router-dom"

function LoginNavigation() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    bg="body-tertiary"
                    sticky="top"
                >
                    <Container fluid>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />

                        <Navbar.Brand className="navbar-brand dropdown navbar-profile-menu">
                            <div className="d-flex">
                                <img src="images/profile-img.svg" alt="" />
                                <NavDropdown
                                    title={"Admin Afrizal Fathan"}
                                    id="basic-nav-dropdown"
                                    className="text-decoration-none text-dark fs-6 ms-2"
                                >
                                    <NavDropdown.Item href="#">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Navbar.Brand>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    KonterKu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <img
                                                src="images/profile-img.svg"
                                                alt=""
                                            />
                                            <p className="mt-2 ms-3">
                                                Welcome, <br /> Admin
                                            </p>
                                        </div>
                                        <div className="d-flex">
                                            <img
                                                src="images/greendot.svg"
                                                alt=""
                                            />
                                            <p className="mt-2 ms-3">Online</p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link href="/">Home</Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link href="/login/barang">
                                            Barang
                                        </Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link href="/login/Tambah">
                                            Tambah
                                        </Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link href="#">Pembelian</Nav.Link>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <div className="main-container-body">
                <Outlet />
            </div>
        </>
    )
}

export default LoginNavigation
