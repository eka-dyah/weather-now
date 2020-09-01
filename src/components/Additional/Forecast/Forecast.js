import React from "react";
import WeatherFullData from "../Weather/WeatherFullData";

const Forecast = ({ header, subheader, info }) => {
	const weatherData = info.map((property, index) => (
		<WeatherFullData
            key={index}
			weather={property.weather}
			info={property.info}
			dateTime={property.dateTime}
			imgSrc={property.imgSrc}
		/>
	));

	return (
			<div className="container mt-4">
				<h2 className="text-center mb-3">{header}</h2>
				<h3 className="text-center mb-3">{subheader}</h3>
				{weatherData}
			</div>
	);
};

export default Forecast;
