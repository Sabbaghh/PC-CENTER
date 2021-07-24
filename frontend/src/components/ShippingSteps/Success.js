import React, { useEffect } from 'react';
import { cartReset } from '../../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Success = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { order } = useSelector((state) => state.orderCreate);
	useEffect(() => {
		let timer = setTimeout(() => {
			history.push(`/order/${order._id}`);
			dispatch(cartReset());
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [history, dispatch, order]);

	return (
		<Alert variant='success'>
			Order has been placed , you will be redirected
		</Alert>
	);
};

export default Success;
