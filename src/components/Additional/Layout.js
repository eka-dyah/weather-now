import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import City from "./City";

const Layout = (props) => (
	<div>
		<Navigation />
		<div className="container content">
			<City />
		</div>
		{props.children}
		<Footer />
	</div>
);

export default Layout;
