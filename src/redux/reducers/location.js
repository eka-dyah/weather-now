import * as ActionTypes from "../actions/actionTypes";

const initialState = {
	loading: true,
	location: null,
	error: null,
};

export const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_LOCATION:
			if (!action.payload) {
				return initialState;
			}
			return {
				...state,
				loading: false,
				location: action.payload,
				error: null,
			};
		case ActionTypes.FETCH_LOCATION_LOADING:
			return {
				...state,
				loading: action.payload,
				error: null,
				location: null
			};
		case ActionTypes.FETCH_LOCATION_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
				location: null
			};
		default:
			return state;
	}
};
