import React from "react";

import "./Logo.css";

const Logo = ({ color }) => {
	return (
		<div>
			<h1 className="Logo" style={{ color: { color } }}>
				Weather Now
			</h1>
		</div>
	);
};

export default Logo;
