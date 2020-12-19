import { Component } from "react";
import Forecast from "../../components/Additional/Forecast/Forecast";
import { connect } from "react-redux";
import Loading from "../../components/Additional/Loading";

class Tomorrow extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		let weather;
		if (this.props.isLoading) {
			weather = <Loading isLoading={this.props.isLoading} />;
		} else if (this.props.error) {
			weather = <h5 className="text-center">{this.props.error}</h5>;
		} else if (this.props.tomorrow) {
			const dateStr = this.props.current.time24;
			const dateTomorrow = new Date(dateStr);
			dateTomorrow.setDate(dateTomorrow.getDate() + 1);
			weather = (
				<Forecast
					info={this.props.tomorrow}
					header="Tomorrow Forecast"
					subheader={dateTomorrow.toDateString()}
				/>
			);
		}
		return <div>{weather}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		tomorrow: state.weather.weather.tomorrow,
		current: state.weather.weather.current,
		isLoading: state.weather.loading,
	};
};

export default connect(mapStateToProps)(Tomorrow);
