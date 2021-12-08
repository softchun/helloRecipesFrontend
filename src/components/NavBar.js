import React from 'react';
import logo512 from './logo512.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from '../components/SearchBar';

function NavBar() {

    return (
        <Navbar variant="dark" expand="md" style={{ position: "sticky", top: 0, zIndex: 1, background: '#93B5C6', minHeight: 70 }}>
            <Container>
                <Navbar.Brand href="/" style={{ fontSize: 32 }}>
                    <img
                        alt=""
                        src={logo512}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{'  '}
                    HelloRecipes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid" style={{fontSize: 20}}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Nav.Link href="/tag">All Tags</Nav.Link>
                    </Nav>
                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar