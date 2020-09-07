import React, { useEffect } from "react";
import Forecast from "../../components/Additional/Forecast/Forecast";

const data = {
	data: [
		{
			dateTime: "August 21, 2020",
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
			dateTime: "August 22, 2020",
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
			dateTime: "August 23, 2020",
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
			dateTime: "August 24, 2020",
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

const Daily = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <Forecast info={data.data} header="Daily Forecast" />;
};

export default Daily;
