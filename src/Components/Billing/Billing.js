
import React from 'react';
import { Button, Container, Form, Nav, Navbar, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBillingList from '../../hooks/useBillingList';
import Header from './Header';

const Billing = () => {
    const [blillingList, setBillingList]= useBillingList()

    return (
        <>
            <Header></Header>
            <Container className='mt-5'>
                <Navbar className='px-3' collapseOnSelect expand="sm" bg="warning" variant="dark">
                    <Container fluid>
                        <Navbar.Brand className='text-white py-auto' as={Link} to=""> <img src={'logo'} alt="" />Billing</Navbar.Brand>
                        <Navbar.Toggle className='mb-2' aria-controls="responsive-navbar-nav" />
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
                                <Button className='text-white' variant='secondary'>Add New Bill</Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Table striped bordered hover responsive variant='warning' className='text-center mt-4 rounded w-100 rounded-3'>
                    <thead>
                        <tr>

                            <th className='text-secondary'>Billing ID</th>
                            <th className='text-secondary'>Full Name</th>
                            <th className='text-secondary'>Email</th>
                            <th className='text-secondary'>Phone</th>
                            <th className='text-secondary'>Paid Amount</th>
                            <th className='text-secondary'>Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            blillingList.map((billing) => <tr key={billing?._id}>
                                <td className=''><small>{billing?._id}</small></td>
                                <td className=''><small>{billing?.fullName}</small></td>
                                <td className=''><small>{billing?.email}</small></td>
                                <td className=''><small>{billing?.phone}</small></td>
                                <td className=''><small>{billing?.paidAmount}</small></td>
                                <td className=''><Button variant='secondary' size='sm'>Edit</Button> || <Button variant='danger' size='sm'>Delete</Button></td>

                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>

        </>
    );
};

export default Billing;