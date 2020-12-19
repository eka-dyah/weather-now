import WeatherInfo from "./WeatherInfo";

const WeatherFullData = ({weather, subweather, info, dateTime, imgSrc}) => (
	<WeatherInfo
		className="p-4 border rounded content"
		weather={weather}
		info={info}
		infoAlign="right"
		subweather={subweather}
	>
		<div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h3>{dateTime}</h3>
			<div className="d-flex align-items-center">
				<img
					src={imgSrc}
					alt="weather condition"
					width={100}
					className="mr-3 weather-icon"
				/>
			</div>
		</div>
	</WeatherInfo>
);

export default WeatherFullData;
