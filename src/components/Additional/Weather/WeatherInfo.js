import React from "react";
import { Row, Col } from "reactstrap";

const WeatherInfo = (props) => {
	return (
		<Row className={["align-self-center data", props.className].join(" ")}>
			<Col xs={12} className="mb-3">
				{props.header}
			</Col>
			<Col xs={12} md={8}>
				{props.children}
			</Col>
			<Col xs={12} md={4}>
				{props.info.map((property) => (
					<Row key={property.title} className="my-2 border-bottom">
						<Col xs={6}>{property.title}</Col>
						<Col xs={6} className="text-right font-weight-bold">{property.value + " " + property.unit}</Col>
					</Row>
				))}
			</Col>
			<Col xs={12}>
				<Row>
					<Col
						md={6}
						className="offset-md-7 text-center"
					>
						<h5 className="font-weight-bold">{props.weather}</h5>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default WeatherInfo;
