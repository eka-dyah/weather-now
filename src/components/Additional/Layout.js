import React from "react";
import Navigation from "../../containers/Navigation/Navigation";
import Footer from "../Footer/Footer";
import City from "../../containers/City/City";

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
