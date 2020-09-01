import React, { useRef } from "react";

import "./ScrollableHorizontal.css";

const ScrollableHorizontal = ({ data }) => {
	const scrollItem = useRef();

	const rightScrollMove = () => {
		scrollItem.current.scrollLeft += scrollItem.current.clientWidth / 2;
	};

	const leftScrollMove = () => {
		scrollItem.current.scrollLeft -= scrollItem.current.clientWidth / 2;
	};

	const item = data.map((info, index) => {
		return (
			<div className="scroll-many-item" key={index}>
				<h5 className="text-center">{info.time}</h5>
				<div className="scroll-many-img">
					<img src={info.imgSrc} alt="weather condition" width={50} />
				</div>
				<h6 className="text-center">
					{info.min}
					<sup>o</sup>
				</h6>
				<h6 className="text-center">
					{info.max}
					<sup>o</sup>
				</h6>
			</div>
		);
	});
	return (
		<div className="scroll-many">
			<div className="scroll-many-items" ref={scrollItem}>
				{item}
			</div>
			<div
				className="scroll-many-control left"
				onClick={leftScrollMove}
			>
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
