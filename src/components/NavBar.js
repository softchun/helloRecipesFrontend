import React, { useState, useEffect } from 'react';
import logo512 from './logo512.png';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {

    return (
        <div>
            <Navbar variant="dark" expand="md" style={{ position: "sticky", top: 0, zIndex: 1, background: '#93B5C6' }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={logo512}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        HelloRecipes
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/recipes">Recipes</Nav.Link>
                            <Nav.Link href="/fav">All Tags</Nav.Link>
                            <Nav.Link href="/createnote">Search</Nav.Link>
                            {/* <Nav.Item className="ms-auto">
                            <NavDropdown title={user} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/editprofile">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar