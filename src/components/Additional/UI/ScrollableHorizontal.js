import { useRef } from "react";

import "./ScrollableHorizontal.css";

const ScrollableHorizontal = ({ data, needMaxMin }) => {
	const scrollItem = useRef();

	const rightScrollMove = () => {
		scrollItem.current.scrollLeft += scrollItem.current.clientWidth / 2;
	};

	const leftScrollMove = () => {
		scrollItem.current.scrollLeft -= scrollItem.current.clientWidth / 2;
	};

	const item = data.map((weather, index) => {
		return (
			<div className="scroll-many-item" key={index}>
				<h5 className="text-center">
					{weather.time12 || weather.date}
				</h5>
				<div className="scroll-many-img">
					<img
						className="weather-icon"
						src={weather.weather.icon}
						alt="weather condition"
						width={50}
					/>
				</div>
				{needMaxMin ? (
					<>
						<h6 className="text-center">
							{weather.info[2].value}
							<sup>o</sup>
						</h6>
						<h6 className="text-center">
							{weather.info[3].value}
							<sup>o</sup>
						</h6>
					</>
				) : (
					<h6 className="text-center">
						{weather.info[0].value}
						<sup>o</sup>
					</h6>
				)}
			</div>
		);
	});
	return (
		<div className="scroll-many">
			<div className="scroll-many-items" ref={scrollItem}>
				{item}
			</div>
			<div className="scroll-many-control left" onClick={leftScrollMove}>
				<i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
			</div>
			<div
				className="scroll-many-control right"
				onClick={rightScrollMove}
			>
				<i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
			</div>
		</div>
	);
};

export default ScrollableHorizontal;
