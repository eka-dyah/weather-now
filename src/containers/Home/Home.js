import React, { useEffect } from "react";
import WeatherInfo from "../../components/Additional/Weather/WeatherInfo";
import WeatherScrollable from "../../components/Additional/Weather/WeatherScrollable";

const info = {
	current: {
		temp: 20,
		unit: "C",
		time: "02.15 PM June 12, 2020",
	},
	info: [
		{ title: "Real feel", value: "23", unit: "C" },
		{ title: "Wind", value: "SSE 32", unit: "C" },
		{ title: "Cloud", value: "2", unit: "%" },
		{ title: "Humid", value: "2", unit: "%" },
	],
};

const weatherInfo = [
	{ time: "2.00 PM", min: 32, max: 30, imgSrc: "https://shorturl.at/demnX" },
	{ time: "3.00 PM", min: 32, max: 30, imgSrc: "https://shorturl.at/demnX" },
	{ time: "4.00 PM", min: 32, max: 30, imgSrc: "https://shorturl.at/demnX" },
	{ time: "5.00 PM", min: 32, max: 30, imgSrc: "https://shorturl.at/demnX" },
	{ time: "6.00 PM", min: 32, max: 30, imgSrc: "https://shorturl.at/demnX" },
	{ time: "7.00 PM", min: 32, max: 30, imgSrc: "https://shorturl.at/demnX" },
];

const dailyInfo = [
	{
		time: "August 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
	{
		time: "September 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
	{
		time: "November 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
	{
		time: "May 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
	{
		time: "January 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
	{
		time: "June 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
	{
		time: "July 8, 2020",
		min: 32,
		max: 30,
		imgSrc: "https://shorturl.at/demnX",
	},
];

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
			<div className="container mt-4">
				<WeatherInfo
					className="p-4 border rounded content"
					header={`Last Updated: ${info.current.time}`}
					weather="Cloudy"
					info={info.info}
					infoAlign="right"
				>
					<div className="d-flex justify-content-center align-items-center h-100">
						<div className="d-flex align-items-center">
							<img
								src="https://shorturl.at/demnX"
								alt="weather condition"
								width={50}
								className="mr-3"
							/>
							<h1 style={{ fontSize: "5rem" }}>
								{info.current.temp}
							</h1>
						</div>
						<div className="d-flex flex-column">
							<h6 className="font-weight-bold">o</h6>
							<h4 className="font-weight-bold">
								{info.current.unit}
							</h4>
						</div>
					</div>
				</WeatherInfo>
				<WeatherScrollable
					header="Today Forecast"
					info={weatherInfo}
					moreUrl="/hourly"
				/>
				<WeatherScrollable
					header="Tomorrow Forecast"
					subheader="August 31, 2020"
					info={weatherInfo}
					moreUrl="/tomorrow"
				/>
				<WeatherScrollable
					header="Daily Forecast"
					info={dailyInfo}
					moreUrl="/daily"
				/>
			</div>
	);
};

export default Home;
