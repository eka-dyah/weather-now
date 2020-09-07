import * as ActionTypes from "../actions/actionTypes";

const initialState = {
	loading: false,
	location: "",
	error: null,
};

export const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_LOCATION:
			return {
				...state,
				loading: false,
				location: action.payload,
				error: null,
			};
		case ActionTypes.FETCH_LOCATION_LOADING:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ActionTypes.FETCH_LOCATION_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			break;
	}
};
