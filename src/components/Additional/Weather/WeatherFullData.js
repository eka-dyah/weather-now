import React from "react";
import WeatherInfo from "./WeatherInfo";

const WeatherFullData = ({weather, info, dateTime, imgSrc}) => (
	<WeatherInfo
		className="p-4 border rounded content"
		weather={weather}
		info={info}
		infoAlign="right"
	>
		<div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h3>{dateTime}</h3>
			<div className="d-flex align-items-center">
				<img
					src={imgSrc}
					alt="weather condition"
					width={50}
					className="mr-3"
				/>
			</div>
		</div>
	</WeatherInfo>
);

export default WeatherFullData;
