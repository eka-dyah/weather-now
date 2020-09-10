import React, { Component } from "react";
import Forecast from "../../components/Additional/Forecast/Forecast";
import { connect } from "react-redux";
import Loading from "../../components/Additional/Loading";

class Daily extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		let weather;
		if (this.props.isLoading) {
			weather = <Loading isLoading={this.props.isLoading} />;
		} else if (this.props.error) {
			weather = <h5 className="text-center">{this.props.error}</h5>;
		} else if (this.props.daily) {
			weather = (
				<Forecast info={this.props.daily} header="Daily Forecast" />
			);
		}
		return <div>{weather}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		daily: state.weather.weather.daily,
		isLoading: state.weather.loading,
		error: state.weather.error,
	}
}

export default connect(mapStateToProps)(Daily);
