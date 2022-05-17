import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='sticky-top shadow'>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to={'/'} >Hot-tub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#services">Items</Nav.Link>
                        <Nav.Link href="#contact">Contact
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme">About me</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        {/* {
                            user ?
                                <button className='bg-dark text-success border-0' onClick={handlesignout}>signout</button>
                                :
                                <Nav.Link as={} to='/login'>
                                    Login
                                </Nav.Link>

                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </header>
    );
};

export default Header;