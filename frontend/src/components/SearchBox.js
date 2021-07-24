import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SearchBox = ({ route = '' }) => {
	const history = useHistory();
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`${route}/search/${keyword}`);
		} else {
			history.push(`${route}`);
		}
	};

	return (
		<Form onSubmit={submitHandler}>
			<Row>
				<Col>
					<Form.Control
						type='text'
						name='q'
						onChange={(e) => setKeyword(e.target.value)}
						placeholder='Search Products...'
						className='mb-3 mr-sm-2 ml-sm-5'
					></Form.Control>
				</Col>
				<Col>
					<Button type='submit' variant='outline-success' className='p-2'>
						Search
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchBox;
