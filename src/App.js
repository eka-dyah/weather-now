import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./components/Additional/Layout";
import Loading from "./components/Additional/Loading";

const Home = React.lazy(() => import("./containers/Home/Home"));
const Today = React.lazy(() => import("./containers/Today/Today"));
const Tomorrow = React.lazy(() => import("./containers/Tomorrow/Tomorrow"));
const Daily = React.lazy(() => import("./containers/Daily/Daily"));

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
					<Suspense fallback={<div><Loading /></div>}>
						<Switch>
							{route}
							<Redirect to="/" />
						</Switch>
					</Suspense>
				</Layout>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
