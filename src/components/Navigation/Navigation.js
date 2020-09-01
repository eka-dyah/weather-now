import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Container,
} from "reactstrap";
import Logo from "../Logo/Logo";
import Links from "./Links";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Navbar light expand="md" className="border-bottom">
				<Container>
					<NavbarBrand href="/" className="mr-auto">
						<Logo color="white" />
					</NavbarBrand>
					<NavbarToggler onClick={toggleNav} className="ml-auto" />
					<Collapse isOpen={isOpen} navbar>
						<Links type='nav'/>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;
