import React, { useState } from 'react';
import { Row, Col, Form, Button, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

export const LoginForm = ({ location, redirect }) => {
	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.userRegister);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const Login = (e) => {
		e.preventDefault();
		dispatch(userRegister(name, email, password));
		console.log(email, password);
	};
	return (
		<Col lg={6} md={12} sm={12}>
			<Container>
				<Form onSubmit={(e) => Login(e)}>
					<div className='mt-5 mb-5'>
						<h4>
							<b>
								<i>WELCOME TO TELEPHONAK SHOP</i>
							</b>
						</h4>
						<h5>
							<i>Where you can find your needs</i>
						</h5>
					</div>
					<Form.Group className='mt-3'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
							placeholder='Your Name'
						/>
					</Form.Group>
					<Form.Group className='mt-3'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Enter email'
						/>
					</Form.Group>
					<Form.Group className='mt-3'>
						<Form.Label>password</Form.Label>
						<Form.Control
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type='password'
							placeholder='Enter password'
						/>
					</Form.Group>
					<Form.Group className='mt-3'>
						<Form.Check label='Remember me' />
					</Form.Group>
					<div className='py-3'>
						<Row>
							<Col lg={8} md={8} sm={12}>
								<Button variant='dark' type='submit'>
									Register
								</Button>
							</Col>
							<Col lg={8} md={8} sm={12} className='mt-3'>
								<small>
									Already have an account ?<Link to='/SignIn'>LOG IN</Link>
								</small>
							</Col>
							{error && (
								<Col lg={12} md={12} sm={12} className='mt-3'>
									<Alert className='full-width' variant='danger'>
										{error}
									</Alert>
								</Col>
							)}
						</Row>
					</div>
				</Form>
			</Container>
		</Col>
	);
};

export default LoginForm;
