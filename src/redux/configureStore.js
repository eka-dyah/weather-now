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
	weather: weatherReducer
});

export default function configureStore() {
	return createStore(
		rootReducer,
        composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
	);
}
