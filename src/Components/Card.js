import React from "react";
import CardIn from "./CardIn";
export default function Card() {
	const [object, setObject] = React.useState({
		firstname: "Cang",
		lastname: "Nguyen",
		email: "cang.ngyenduc@gmail.com",
		phone: "0936338309",
		isFavorite: true,
	});
	function toggleFavorite() {
		setObject((preIt) => ({
			...preIt,
			isFavorite: !preIt.isFavorite,
		}));
	}

	return (
		<div className="card">
			<img src="Assets/images/card/user.png" />
			<CardIn isFilled={object.isFavorite} handleClick={toggleFavorite} />
			<h3>
				{object.firstname} {object.lastname}
			</h3>
		</div>
	);
}
