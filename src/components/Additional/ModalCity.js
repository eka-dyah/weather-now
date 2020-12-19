import { useRef } from "react";
import {
	Modal,
	FormGroup,
	Input,
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";

const ModalCity = ({
	isOpen,
	toggleModal,
	updateCity,
	city,
}) => {
	const input = useRef();

	const changeCity = () => {
		updateCity(input.current.value);
		toggleModal();
	}
	
	return (
		<Modal isOpen={isOpen} toggle={toggleModal}>
			<ModalHeader toggle={toggleModal}>Change City</ModalHeader>
			<ModalBody>
				<FormGroup>
					<Input type="text" defaultValue={city} innerRef={input} />
				</FormGroup>
			</ModalBody>
			<ModalFooter>
				<Button color="primary" type="submit" onClick={changeCity}>
					Confirm
				</Button>
				<Button color="secondary" onClick={toggleModal}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default ModalCity;
