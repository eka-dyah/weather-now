import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const links = [
    { name: 'Home', path: '/' },
    { name: 'Hourly', path: '/hourly' },
    { name: 'Tomorrow', path: '/tomorrow' },
    { name: 'Daily', path: '/daily' },
];

const NavLinks = () => (
	<Nav navbar className="ml-auto">
        {links.map((link) => (
			<NavItem key={link.name}>
				<NavLink className="nav-link text-center" exact to={link.path}>
					{link.name}
				</NavLink>
			</NavItem>
		))}
	</Nav>
);

const FootLink = () => (
	<ul className="list-unstyled row" style={{width: "30%"}}>
        {links.map((link) => (
			<li key={link.name} className="col-12 col-md-6">
				<Link className="nav-link text-white" to={link.path}>
					{link.name}
				</Link>
			</li>
		))}
	</ul>
);

const Links = ({ type }) => {
    if (type === 'nav') {
        return <NavLinks />;
    }
    return <FootLink />;
};

export default Links;
