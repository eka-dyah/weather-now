import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { locationReducer } from "./reducers/location";
import { weatherReducer } from "./reducers/weather";

const composeEnhancers =
	process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const loggerMiddleware = createLogger();
console.log(locationReducer);

const rootReducer = combineReducers({
	location: locationReducer,
	weather: weatherReducer,
});

const saveToLocalStorage = (state) => {
	try {
		const stringifyState = JSON.stringify(state);
		localStorage.setItem("reduxState", stringifyState);
	} catch (error) {
		console.warn(error);
	}
};

const loadFromLocalStorage = () => {
	try {
		const locationState = localStorage.getItem("reduxState");
		if (!locationState) return undefined;
		return JSON.parse(locationState);
	} catch (error) {
		return undefined;
	}
};

const store = createStore(
	rootReducer,
	loadFromLocalStorage(),
	composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
