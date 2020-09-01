import React from "react";
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
	changeCity,
	city,
	onChangeInput,
}) => (
	<Modal isOpen={isOpen} toggle={toggleModal}>
		<ModalHeader toggle={toggleModal}>Change City</ModalHeader>
		<ModalBody>
			<FormGroup>
				<Input type="text" value={city} onChange={onChangeInput} />
			</FormGroup>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" onClick={changeCity}>
				Confirm
			</Button>
			<Button color="secondary" onClick={toggleModal}>
				Cancel
			</Button>
		</ModalFooter>
	</Modal>
);

export default ModalCity;
