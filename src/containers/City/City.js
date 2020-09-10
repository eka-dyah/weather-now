import React, { Component } from "react";
import { connect } from "react-redux";
import "./City.css";
import ModalCity from "../../components/Additional/ModalCity";
import Loading from "../../components/Additional/Loading";
import {
	initializeLocation,
	updateLocation,
} from "../../redux/actions/location";
import { fetchWeather } from "../../redux/actions/weather";

class City extends Component {
	state = {
		isOpen: false,
	};

	componentDidMount() {
		if (this.props.city) {
			const { lat, lon } = this.props.city;
			this.props.getWeatherData(lat, lon);
		} else {
			this.props.getInitializeLocation();
		}
	}

	toggleModal = () => this.setState((state) => ({ isOpen: !state.isOpen }));

	render() {
		let location = "";
		if (this.props.isLoading) {
			location = <Loading isLoading={this.props.isLoading} />;
		} else if (this.props.error !== null) {
			location = (
				<>
					<ModalCity
						isOpen={this.state.isOpen}
						toggleModal={this.toggleModal}
						updateCity={this.props.updateCity}
						city=""
					/>
					<h4 className="City">{this.props.error}</h4>
					<i
						onClick={this.toggleModal}
						role="button"
						className="fa fa-pencil ml-2"
						aria-hidden="true"
						style={{ fontSize: 15 }}
					></i>
				</>
			);
		} else if (this.props.city === null) {
			location = (
				<>
					<ModalCity
						isOpen={this.state.isOpen}
						toggleModal={this.toggleModal}
						updateCity={this.props.updateCity}
						city=""
					/>
					<h4 className="City">
						Enter a city
						<i
							onClick={this.toggleModal}
							role="button"
							className="fa fa-pencil ml-2"
							aria-hidden="true"
							style={{ fontSize: 15 }}
						></i>
					</h4>
				</>
			);
		} else {
			location = (
				<>
					<ModalCity
						isOpen={this.state.isOpen}
						toggleModal={this.toggleModal}
						city={this.props.city.name}
						updateCity={this.props.updateCity}
					/>
					<h4 className="City">
						{this.props.city.name}
						<i
							onClick={this.toggleModal}
							role="button"
							className="fa fa-pencil ml-2"
							aria-hidden="true"
							style={{ fontSize: 15 }}
						></i>
					</h4>
				</>
			);
		}
		return (
			<React.Fragment>
				<div>{location}</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		city: state.location.location,
		isLoading: state.location.loading,
		error: state.location.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getInitializeLocation: () => dispatch(initializeLocation()),
		updateCity: (location) => dispatch(updateLocation(location)),
		getWeatherData: (lat, lon) => dispatch(fetchWeather(lat, lon)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
