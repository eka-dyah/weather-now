import React, { Component } from "react";
import WeatherInfo from "../../components/Additional/Weather/WeatherInfo";
import WeatherScrollable from "../../components/Additional/Weather/WeatherScrollable";
import Loading from "../../components/Additional/Loading";
import { connect } from "react-redux";

class Home extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		let weather;
		if (this.props.isLoading) {
			weather = <Loading isLoading={this.props.isLoading} />
		} else if (this.props.error) {
			weather = <h5 className="text-center">{this.props.error}</h5>
		} else if (
			this.props.weather.current &&
			this.props.weather.hourly &&
			this.props.weather.tomorrow &&
			this.props.weather.daily
		) {
			const dateTomorrow = new Date(this.props.weather.current.time12);
			dateTomorrow.setDate(dateTomorrow.getDate() + 1);
			weather = (
				<div className="container mt-4">
					<WeatherInfo
						className="p-4 border rounded content"
						header={`Last Updated: ${this.props.weather.current.time12}`}
						weather={this.props.weather.current.weather.main}
						subweather={this.props.weather.current.weather.description}
						info={this.props.weather.current.info}
						infoAlign="right"
					>
						<div className="d-flex justify-content-center align-items-center h-100">
							<div className="d-flex align-items-center">
								<img
									className="weather-icon"
									src={this.props.weather.current.weather.icon}
									alt="weather condition"
									width={70}
								/>
								<h1 style={{ fontSize: "5rem" }}>
									{this.props.weather.current.temp}
								</h1>
							</div>
							<div className="ml-2 d-flex flex-column">
								<h6 className="font-weight-bold">o</h6>
								<h4 className="font-weight-bold">
									{this.props.weather.current.unit}
								</h4>
							</div>
						</div>
					</WeatherInfo>
					<WeatherScrollable
						header="Today Forecast"
						info={this.props.weather.hourly}
						moreUrl="/hourly"
						needMaxMin={false}
					/>
					<WeatherScrollable
						header="Tomorrow Forecast"
						subheader={dateTomorrow.toDateString()}
						info={this.props.weather.tomorrow}
						moreUrl="/tomorrow"
						needMaxMin={false}
					/>
					<WeatherScrollable
						header="Daily Forecast"
						info={this.props.weather.daily}
						moreUrl="/daily"
						needMaxMin={true}
					/>
				</div>
			);
		}
		return <div>{weather}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.weather.loading,
		error: state.weather.error,
		weather: state.weather.weather
	}
}

export default connect(mapStateToProps)(Home);
