import {
	ORDER_CREATE_FAIL,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_REQUEST,
	ORDER_PAY_FAIL,
	ORDER_PAY_REQUEST,
	ORDER_PAY_RESET,
	ORDER_PAY_SUCCESS,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
	const { payload, type } = action;
	switch (type) {
		case ORDER_CREATE_REQUEST:
			return { loading: true };
		case ORDER_CREATE_SUCCESS:
			return { loading: false, order: payload, success: true };
		case ORDER_CREATE_FAIL:
			return { loading: false, success: false, error: payload };
		default:
			return state;
	}
};

export const orderDetailsReducer = (state = {}, action) => {
	const { payload, type } = action;
	switch (type) {
		case ORDER_DETAILS_REQUEST:
			return { loading: true };
		case ORDER_DETAILS_SUCCESS:
			return { loading: false, order: payload, success: true };
		case ORDER_DETAILS_FAIL:
			return { loading: false, success: false, error: payload };
		default:
			return state;
	}
};

export const orderPayReducer = (state = {}, action) => {
	const { payload, type } = action;
	switch (type) {
		case ORDER_PAY_REQUEST:
			return { loading: true };
		case ORDER_PAY_SUCCESS:
			return { loading: false, order: payload, success: true };
		case ORDER_PAY_FAIL:
			return { loading: false, success: false, error: payload };
		case ORDER_PAY_RESET:
			return state;
		default:
			return state;
	}
};
