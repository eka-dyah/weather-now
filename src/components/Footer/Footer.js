import React from "react";
import Logo from "../Logo/Logo";
import Links from "../Navigation/Links";

const Footer = () => (
	<div className="bg-secondary text-white" style={{ marginTop: 150 }}>
		<div className="container mt-5">
			<div className="pt-4 pb-2 pl-1">
				<Logo />
			</div>
			<div className="ml-4">
				<Links />
			</div>
		</div>
		<p
			className="text-center mb-0 py-2 text-white-50"
			style={{ fontSize: 12 }}
		>
			Copyright 2020 Dyah Eka Lestari
		</p>
	</div>
);

export default Footer;
