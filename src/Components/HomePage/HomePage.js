import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const HomePage = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        reset();
        toast.success('Login Success')
        navigate('/billing')
    };
    return (
        <>
            <Container>
                <h1 className='text-center fw-bolder display-1 mt-4'><span className=' text-secondary'>Welcome to</span> <span className='text-warning'>Power Hack</span></h1>

                <Row>
                    <Col lg={7}>
                        <img className='w-100' src="https://i.ibb.co/Xs0JQbv/pngwing-com.png" alt="" />
                    </Col>
                    <Col lg={5} className='my-auto'>
                        <form className='p-5 base-bg rounded my-3 shadow' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-center fw-bolder text-secondary mb-5'>Login</h4>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Control className='text-center'
                                    type="text"
                                    placeholder='Your Email'
                                    autoComplete='none'

                                    {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Please input email in the correct format'
                                            },
                                        })}
                                />
                                <Form.Label>
                                    <small className='text-danger mt-2'>
                                        {errors.email?.type === 'required' && errors?.email?.message}
                                        {errors.email?.type === 'pattern' && errors?.email?.message}

                                    </small>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Control className='text-center'
                                    type="text"
                                    placeholder='Your Password'
                                    autoComplete='none'

                                    {...register("password",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
                                                message: 'Password must be between 8 to 15 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
                                            },
                                        })}
                                />
                                <Form.Label>
                                    <small className='text-danger mt-2'>
                                        {errors.password?.type === 'required' && errors?.password?.message}
                                        {errors.password?.type === 'pattern' && errors?.password?.message}

                                    </small>
                                </Form.Label>
                            </Form.Group>

                            <input className='text-center d-block mt-4 w-50 mx-auto bg-warning border-0 rounded-3 py-2 text-white' value={'Login'} type="Submit" />
                            <p className='my-3 text-center'><small>New to Power-Hack ?</small>  <Link to='register'><small>Register a new account</small></Link> </p>
                        </form>

                    </Col>
                </Row>

            </Container >
        </>
    );
};

export default HomePage;