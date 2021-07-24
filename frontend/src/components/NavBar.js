import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import DropDownNav from './DropDownNav';
const NavBar = ({ userLogin }) => {
	const { userInfo } = userLogin;
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<LinkContainer exact to='/'>
						<Navbar.Brand>
							<h4 variant='dark' className='text-secondary'>
								<b>PC - CENTER</b> {` `} <i className='fas fa-laptop'></i>
							</h4>
						</Navbar.Brand>
					</LinkContainer>
					<Nav>
						{userInfo ? (
							<DropDownNav userName={userInfo.name} />
						) : (
							<LinkContainer to='/SignIn'>
								<Nav.Link>
									<i className='fas fa-user' /> {` `}
									SIGN IN
								</Nav.Link>
							</LinkContainer>
						)}
						{userInfo && userInfo.isAdmin && (
							<NavDropdown drop='left' title='ADMIN' variant='dark'>
								<LinkContainer exact to='/admin/usersList'>
									<NavDropdown.Item>USERS</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Divider />
								<LinkContainer exact to='/admin/productsList'>
									<NavDropdown.Item>PRODUCTS</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer exact to='/admin/ordersList'>
									<NavDropdown.Item>ORDERS</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						)}
						<LinkContainer exact to='/Cart'>
							<Nav.Link>
								<i className='fas fa-shopping-cart' /> {` `}
								<span className='hide-sm'>CART</span>
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
