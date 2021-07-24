import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<Card className='my-3 mb-2 ' style={{ height: '95%' }}>
			<Link to={`/product/${product._id}`}>
				<div
					style={{
						backgroundImage: `url("${product.image}")`,
						height: '25rem',
						width: '100%',
						backgroundPosition: 'center',
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundColor: '#FFF',
						borderRadius: '0.5rem',
					}}
				/>
			</Link>
			<Card.Header className='text-center ' style={{ height: '25%' }} as='div'>
				<Link to={`/product/${product._id}`}>{product.name}</Link>
			</Card.Header>
			<Card.Body>
				<Card.Text as='h6'>
					<div className='my-3 text-center'>
						<Rating
							rating={product.rating}
							text={`${product.numReviews} Reviews`}
						/>
					</div>
				</Card.Text>
			</Card.Body>
			<Card.Footer as='h3' className='text-center'>
				${product.price}
			</Card.Footer>
		</Card>
	);
};

export default Product;
