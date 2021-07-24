import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PaginationComponent = ({ pages, page, keyword = '', route = '' }) => {
	return (
		pages > 1 && (
			<Pagination>
				{[...Array(pages).keys()].map((p) => (
					<LinkContainer
						key={p + 1}
						to={
							keyword
								? `${route}/search/${keyword}/page/${p + 1}`
								: `${route}/page/${p + 1}`
						}
					>
						<Pagination.Item active={p + 1 === page}>{p + 1}</Pagination.Item>
					</LinkContainer>
				))}
			</Pagination>
		)
	);
};

export default PaginationComponent;
