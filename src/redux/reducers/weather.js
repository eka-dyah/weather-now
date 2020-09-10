import * as ActionTypes from "../actions/actionTypes";

const initialState = {
	loading: true,
	error: null,
	weather: {
		current: null,
		hourly: null,
		tomorrow: null,
		daily: null,
	},
};

export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_WEATHER:
			return {
                ...state,
                loading: false,
                error: null,
				weather: {
					...state.weather,
					current: action.payload.current,
					hourly: action.payload.hourly,
					tomorrow: action.payload.tomorrow,
					daily: action.payload.daily,
				},
			};
		case ActionTypes.FETCH_WEATHER_LOADING:
			return {
				...state,
				weather: {
					...state.weather,
				},
				loading: action.payload,
			};
		case ActionTypes.FETCH_WEATHER_FAIL:
			return {
				...state,
				weather: {
					...state.weather,
				},
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
