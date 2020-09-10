import React from "react";

import ScrollableHorizontal from "../UI/ScrollableHorizontal";
import { Link } from "react-router-dom";

const WeatherScrollable = ({ header, subheader, info, moreUrl, needMaxMin }) => {
	return (
		<div className="p-3 border rounded content data">
			<div className="mb-5 mt-2">
				<h3
					className="font-weight-bold text-center"
					style={{ fontSize: 18 }}
				>
					{header}
				</h3>
				<h4 className="text-center font-weight-bold" style={{ fontSize: 17 }}>
					{subheader ? subheader : " "}
				</h4>
			</div>
			<ScrollableHorizontal data={info} needMaxMin={needMaxMin} />
			<div className="text-right font-weight-bold mt-4">
				{moreUrl ? (
					<Link to={moreUrl} className="text-dark">
						More{" "}
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
					</Link>
				) : null}
			</div>
		</div>
	);
};

export default WeatherScrollable;
