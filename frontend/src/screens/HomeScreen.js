import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { getProducts } from '../redux/actions/productsActions';
import LoadingErrHandler from '../components/LoadErrHandler';
import SearchBox from '../components/SearchBox';
import PaginationComponent from '../components/Pagination';
import Carousel from '../components/Carousel';

//redux
import { useSelector, useDispatch } from 'react-redux';
const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;
	const dispatch = useDispatch();
	const { products, pages, page, loading, error } = useSelector(
		(state) => state.products,
	);
	useEffect(() => {
		dispatch(getProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);
	return (
		<>
			<LoadingErrHandler
				loading={loading}
				error={error ? 'OOPS! Something went wrong!' : false}
			>
				{/* render the slider when there's no search or pagination */}
				{!keyword && pageNumber === 1 && (
					<Carousel products={[...products].splice(0, 4)} />
				)}

				<SearchBox />
				<h1>LATEST </h1>
				<Row>
					{products && products.length > 0 ? (
						<>
							{products.map((product) => {
								return (
									<Col key={product._id} sm={12} md={4} lg={4} xl={3}>
										<Product product={product} />
									</Col>
								);
							})}
						</>
					) : (
						<h6>There are no products for now!</h6>
					)}
				</Row>
			</LoadingErrHandler>
			<div className='mt-5 flex-center-container'>
				<PaginationComponent pages={pages} page={page} keyword={keyword} />
			</div>
		</>
	);
};

export default HomeScreen;
