import React, { useState } from "react";

import "./City.css";
import ModalCity from "./ModalCity";

const City = () => {
	const [city, setCity] = useState("Jakarta, Indonesia");
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState(city);

	const changeCity = () => {
		setCity(input);
		toggleModal();
	};
	const toggleModal = () => setIsOpen(!isOpen);
	const onChangeInput = (e) => setInput(e.target.value);

	return (
		<React.Fragment>
			<ModalCity
				isOpen={isOpen}
				toggleModal={toggleModal}
				changeCity={changeCity}
				city={input}
				onChangeInput={onChangeInput}
			/>
			<div>
				<h4 className="City">
					{city}
					<i
						onClick={changeCity}
						role="button"
						className="fa fa-pencil ml-2"
						aria-hidden="true"
						style={{ fontSize: 15 }}
					></i>
				</h4>
			</div>
		</React.Fragment>
	);
};

export default City;
