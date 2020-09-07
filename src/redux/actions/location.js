import * as actionTypes from "./actionTypes.js";

export const initializeLocation = (location = null) => (dispatch) => {
	if (!location) {
		fetch("https://api.ipify.org/?format=json")
			.then((res) => res.json())
			.then((data) => dispatch(fetchInitLocation(location, data.ip)))
			.catch((errror) => dispatch(setFailedLocation(errror.message)));
	} else {
		dispatch(setLocation(location));
	}
};

export const updateLocation = (location = null) => (dispatch) => {
	if (!location) {
		dispatch(fetchInitLocation(location, ip));
	} else {
		dispatch(fetchUpdateLocation(location));
	}
};

export const setLoadingLocation = () => {
	return {
		type: actionTypes.FETCH_LOCATION_LOADING,
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
	fetch("http://localhost:8000/location/update", {
		method: "POST",
		body: JSON.stringify({
			loc: location,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => dispatch(setLocation(data)))
		.catch((error) => dispatch(setFailedLocation(error.message)));
};

export const fetchInitLocation = (location, ip) => (dispatch) => {
	dispatch(setLoadingLocation());
	fetch("http://localhost:8000/location", {
		method: "POST",
		body: JSON.stringify({
			loc: location,
			ip,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => dispatch(setLocation(data)))
		.catch((error) => dispatch(setFailedLocation(error.message)));
};
