import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

const Billing = () => {
    return (
        <>
            <Header></Header>
            <Container className='mt-5'>
                <Navbar className='px-3' collapseOnSelect expand="sm" bg="secondary" variant="dark" sticky='top'>
                    <Container fluid>
                        <Navbar.Brand className='text-white py-auto' as={Link} to=""> <img src={'logo'} alt="" />Billing</Navbar.Brand>
                        <Navbar.Toggle className='mb-2'  aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto py-auto">
                              
                                <Form className=''>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>

                            </Nav>
                            <Nav className='py-auto'>
                                <Button variant='dark'>Add New Bill</Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

        </>
    );
};

export default Billing;