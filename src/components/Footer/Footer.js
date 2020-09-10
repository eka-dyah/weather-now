import React from "react";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";

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
		<div
			className="text-center mb-0 py-2 text-white-50"
			style={{ fontSize: 12 }}
		>
			<p className="mb-0">Made by Dyah Eka Lestari, 2020</p>
			<p className="my-0">Weather data by <a className="text-white-50" target="_blank" href="https://openweathermap.org/">OpenWeather</a></p>
		</div>
	</div>
);

export default Footer;
