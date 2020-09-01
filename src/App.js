import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./components/Home/Home";
import Today from "./components/Today/Today";
import Tomorrow from "./components/Tomorrow/Tomorrow";
import Daily from "./components/Daily/Daily";
import Layout from "./components/Additional/Layout";

const routes = [
	{ exact: true, path: "/", Component: Home },
	{ exact: false, path: "/hourly", Component: Today },
	{ exact: false, path: "/tomorrow", Component: Tomorrow },
	{ exact: false, path: "/daily", Component: Daily },
];

function App() {
	const route = routes.map(({ exact, path, Component }) => (
		<Route
			exact={exact}
			path={path}
			key={path}
			children={({ match }) => (
				<TransitionGroup>
					<CSSTransition
						in={match != null}
						timeout={500}
						classNames="fade"
						unmountOnExit
						appear
					>
						<Component />
					</CSSTransition>
				</TransitionGroup>
			)}
		/>
	));

	return (
		<React.Fragment>
			<BrowserRouter>
				<Layout>
					<Switch>
						{route}
						<Redirect to="/" />
					</Switch>
				</Layout>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
