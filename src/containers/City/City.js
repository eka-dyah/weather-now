import React, { useState } from "react";

import "./City.css";
import ModalCity from "../../components/Additional/ModalCity";
import Loading from "../../components/Additional/Loading";

const City = ({ isLoading, city, updateCity }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState(city);

	const changeCity = () => {
		updateCity(input);
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
				{isLoading ? (
					<Loading isLoading={isLoading} />
				) : (
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
				)}
			</div>
		</React.Fragment>
	);
};

export default City;
