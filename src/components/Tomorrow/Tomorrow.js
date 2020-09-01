import React, { useEffect } from "react";
import Forecast from "../Additional/Forecast/Forecast";

const data = {
	dateTime: "August 21, 2020",
	data: [
		{
			dateTime: "00:00 PM",
			weather: "Clear Sky",
			imgSrc: "https://shorturl.at/demnX",
			info: [
				{ title: "Real feel", value: "23", unit: "C" },
				{ title: "Wind", value: "SSE 32", unit: "C" },
				{ title: "Cloud", value: "2", unit: "%" },
				{ title: "Humid", value: "2", unit: "%" },
			],
		},
		{
			dateTime: "01:00 PM",
			weather: "Cloudy",
			imgSrc: "https://shorturl.at/demnX",
			info: [
				{ title: "Real feel", value: "23", unit: "C" },
				{ title: "Wind", value: "SSE 32", unit: "C" },
				{ title: "Cloud", value: "2", unit: "%" },
				{ title: "Humid", value: "2", unit: "%" },
			],
		},
		{
			dateTime: "02:00 PM",
			weather: "Rain",
			imgSrc: "https://shorturl.at/demnX",
			info: [
				{ title: "Real feel", value: "23", unit: "C" },
				{ title: "Wind", value: "SSE 32", unit: "C" },
				{ title: "Cloud", value: "2", unit: "%" },
				{ title: "Humid", value: "2", unit: "%" },
			],
		},
		{
			dateTime: "02:00 PM",
			weather: "Clear Sky",
			imgSrc: "https://shorturl.at/demnX",
			info: [
				{ title: "Real feel", value: "23", unit: "C" },
				{ title: "Wind", value: "SSE 32", unit: "C" },
				{ title: "Cloud", value: "2", unit: "%" },
				{ title: "Humid", value: "2", unit: "%" },
			],
		},
	],
};

const Tomorrow = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Forecast
			info={data.data}
			header="Tomorrow Forecast"
			subheader={data.dateTime}
		/>
	);
};

export default Tomorrow;
