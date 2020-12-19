import { Spinner, Row, Col } from "reactstrap";

const Loading = ({ isLoading }) => (
	<Row style={{ display: isLoading }}>
		<Col className="text-center">
			<Spinner />
		</Col>
	</Row>
);

export default Loading;
