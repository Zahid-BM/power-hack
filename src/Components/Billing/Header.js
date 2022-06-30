import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="warning" variant="dark" sticky='top'>
                <Container fluid>
                    <Navbar.Brand className='text-white fw-bold' as={Link} to=""> <img src={logo} alt="" />Power-Hack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <p className='me-auto text-white fw-bold'>Paid Total : <span>12000</span> $</p>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;