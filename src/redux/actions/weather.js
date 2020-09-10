import * as ActionTypes from "./actionTypes";

export const setWeather = (weather) => {
	return {
		type: ActionTypes.SET_WEATHER,
		payload: weather,
	};
};

export const fetchWeather = (lat, lon) => (dispatch) => {
	dispatch(weatherLoading(true));
	fetch("http://localhost:8000/current", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			lat,
			lon,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			dispatch(weatherLoading(false));
			dispatch(setWeather(data));
		})
		.catch((error) => {
			dispatch(weatherLoading(false));
			dispatch(weatherFailed(error.errorMessage));
		});
};

export const weatherLoading = (loading = true) => {
	return {
		type: ActionTypes.FETCH_WEATHER_LOADING,
		payload: loading,
	};
};

export const weatherFailed = (errorMessage) => {
	return {
		type: ActionTypes.FETCH_WEATHER_FAIL,
		payload: errorMessage,
	};
};
