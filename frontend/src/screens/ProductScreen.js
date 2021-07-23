import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Button,
	ListGroup,
	Card,
	Image,
	Form,
	Alert,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import LoadErrHandler from '../components/LoadErrHandler';
//redux
import {
	getProductDetails,
	reviewProduct,
} from '../redux/actions/productsActions';
import { PRODUCT_REVIEW_RESET } from '../redux/constants/productsConstants';
import { useSelector, useDispatch } from 'react-redux';
const ProductScreen = ({ match, history }) => {
	const dispatch = useDispatch();
	const [Qty, setQty] = useState(1);
	const [rating, setRating] = useState('');
	const [comment, setComment] = useState('');

	const { product, loading, error } = useSelector(
		(state) => state.productDetails,
	);
	const {
		success: productReviewSuccess,
		loading: productReviewLoading,
		error: productReviewError,
	} = useSelector((state) => state.productReview);
	const { userInfo } = useSelector((state) => state.userLogin);
	const addToCart = () => {
		history.push(`/cart/${match.params.id}?qty=${Qty}`);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(reviewProduct(match.params.id, { rating, comment }));
	};
	useEffect(() => {
		dispatch(getProductDetails(match.params.id));
		if (productReviewSuccess) {
			setComment('');
			setRating('');
			dispatch({ type: PRODUCT_REVIEW_RESET });
		}
	}, [match.params.id, dispatch, productReviewSuccess]);
	return (
		<>
			<LoadErrHandler
				loading={loading}
				error={error ? `OOPS! something went wrong` : false}
			>
				{product && (
					<>
						<Link className='my-3 btn btn-dark' to='/'>
							GO BACK
						</Link>
						<Row>
							<Col lg={6} md={6}>
								<Image src={product.image} alt={product.name} fluid />
							</Col>
							<Col lg={3} md={6}>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<h4>{product?.name?.toUpperCase()}</h4>
									</ListGroup.Item>
									<ListGroup.Item>
										<Rating
											rating={product.rating}
											text={`${product.numReviews} reviews`}
										/>
									</ListGroup.Item>
									<ListGroup.Item>
										<h3>PRICE : ${product.price}</h3>
									</ListGroup.Item>
									<ListGroup.Item>
										<h5>DESCRIPTION :</h5>
										<p>{product.description}</p>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col className='my-4'>
								<Card>
									<ListGroup variant='flush'>
										<ListGroup.Item>
											<Row>
												<Col>PRICE :</Col>
												<Col>{product.price}</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col> STATUS :</Col>
												<Col>
													{product.countInStock > 0
														? 'In stock'
														: 'Out of stock'}
												</Col>
											</Row>
										</ListGroup.Item>
										{product.countInStock > 0 && (
											<ListGroup.Item
												as='select'
												value={Qty}
												onChange={(e) => setQty(e.target.value)}
											>
												{[...Array(product.countInStock).keys()].map((x) => {
													return (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													);
												})}
											</ListGroup.Item>
										)}
										<ListGroup.Item>
											<Button
												className='btn btn-block btn-dark'
												type='button'
												style={{ width: '100%' }}
												disabled={product.countInStock <= 0}
												onClick={() => addToCart()}
											>
												ADD TO CART
											</Button>
										</ListGroup.Item>
									</ListGroup>
								</Card>
							</Col>
						</Row>
						<Row className='mt-2'>
							<Col md={6}>
								<h2>Reviews</h2>
								{product.reviews.length > 0 ? (
									<ListGroup>
										{product.reviews.map((review) => {
											return (
												<ListGroup.Item key={review._id}>
													<strong>{review.name}</strong>
													<Rating rating={review.rating} />
													<small>{review.createdAt.substring(0, 10)}</small>
													<p>
														"<i>{review.comment}</i>"
													</p>
												</ListGroup.Item>
											);
										})}
									</ListGroup>
								) : (
									<h6>this product has no reviews</h6>
								)}
								{userInfo && (
									<ListGroup className='mt-2'>
										<h4>Leave a review</h4>
										{productReviewError && (
											<Alert variant='danger'>{productReviewError}</Alert>
										)}
										{productReviewLoading && <h6>loading ...</h6>}
										<Form onSubmit={submitHandler}>
											<Form.Group controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as='select'
													value={rating}
													onChange={(e) => setRating(e.target.value)}
												>
													<option>Select..</option>
													<option value='1'>1 - poor</option>
													<option value='2'>2 - fair</option>
													<option value='3'>3 - good</option>
													<option value='4'>4 - very good</option>
													<option value='5'>5 - excellent</option>
												</Form.Control>
											</Form.Group>
											<Form.Group>
												<Form.Label>comment</Form.Label>
												<Form.Control
													as='textarea'
													value={comment}
													row='3'
													placeholder='leave a comment'
													onChange={(e) => setComment(e.target.value)}
												></Form.Control>
											</Form.Group>
											<Button variant='dark' type='submit'>
												{' '}
												Submit
											</Button>
										</Form>
									</ListGroup>
								)}
							</Col>
						</Row>
					</>
				)}
			</LoadErrHandler>
		</>
	);
};

export default ProductScreen;
