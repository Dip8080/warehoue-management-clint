import './Header.css'
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handlesignout = ()=>{
    signOut(auth)
    }
    return (
        <header className='sticky-top header-con'>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to={'/'} >
                    <img width="50px" height="50px" src="https://img.freepik.com/free-vector/realistic-mango-illustration_23-2148159320.jpg?t=st=1653063424~exp=1653064024~hmac=93c925bf8fc850a161ca290e368d33abe7540464eed6e32702be3a821770dd87&w=740" alt="" />
                  <span style={{color:"green"}}> Fruti </span>-exotica</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#services" as={Link} to='/'>Items</Nav.Link>
                        <Nav.Link href="#contact">Contact
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme">About me</Nav.Link>
                        {/* <Nav.Link as={} to="/login">Login</Nav.Link> */}
                        {
                            user && <>
                            <Nav.Link as={Link} to="/additem">add Item</Nav.Link>
                            <Nav.Link as={Link} to="/manage">manage Items</Nav.Link>
                            </>
                        }

                        {
                            user ?
                                <button className='bg-dark glow-on-hover border-0' onClick={handlesignout}>signout</button>
                                :
                                <Nav.Link as={Link} to='/login' className='glow-on-hover'>
                                    Login..................!
                                </Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </header>
    );
};

export default Header;