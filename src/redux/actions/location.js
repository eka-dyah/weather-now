import * as actionTypes from "./actionTypes.js";
import { fetchWeather } from "./weather.js";

export const initializeLocation = (location = null) => (dispatch) => {
	if (!location) {
		fetch("https://json.geoiplookup.io/")
			.then((res) => res.json())
			.then((data) => {
				dispatch(fetchInitLocation(location, data.ip));
			})
			.catch((errror) => dispatch(setFailedLocation(errror.message)));
	} else {
		dispatch(setLocation(location));
	}
};

export const updateLocation = (location = null) => (dispatch) => {
	if (!location) {
		dispatch(initializeLocation(location));
	} else {
		dispatch(fetchUpdateLocation(location));
	}
};

export const setLoadingLocation = (loading = true) => {
	return {
		type: actionTypes.FETCH_LOCATION_LOADING,
		payload: loading,
	};
};

export const setFailedLocation = (errorMessage) => {
	return {
		type: actionTypes.FETCH_LOCATION_FAIL,
		payload: errorMessage,
	};
};

export const setLocation = (location) => {
	return {
		type: actionTypes.SET_LOCATION,
		payload: location,
	};
};

export const fetchUpdateLocation = (location) => (dispatch) => {
	dispatch(setLoadingLocation());
	fetch(process.env.REACT_APP_BACKEND_URL + "/location/update", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			loc: location,
		}),
	})
		.then((res) => {
			dispatch(setLoadingLocation(false));
			return res.json();
		})
		.then((data) => {
			dispatch(setLocation(data.location));
			dispatch(fetchWeather(data.location.lat, data.location.lon));
		})
		.catch((error) => dispatch(setFailedLocation(error.message)));
};

export const fetchInitLocation = (location = null, ipAddress) => (dispatch) => {
	dispatch(setLoadingLocation());
	fetch(process.env.REACT_APP_BACKEND_URL + "/location", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			loc: location,
			ip: ipAddress,
		}),
	})
		.then((res) => {
			dispatch(setLoadingLocation(false));
			return res.json();
		})
		.then((data) => {
			dispatch(setLocation(data.location));
			dispatch(fetchWeather(data.location.lat, data.location.lon));
		})
		.catch((error) => dispatch(setFailedLocation(error.message)));
};
