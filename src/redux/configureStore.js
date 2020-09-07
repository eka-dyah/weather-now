import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { locationReducer } from "./redux/reducers/location";

const composeEnhancers =
	process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
    location: locationReducer
})

export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
	);
}
