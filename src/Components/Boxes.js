import React from "react";
import Box from "./Box";
const data = [
	{ id: 1, on: true },
	{ id: 2, on: false },
	{ id: 3, on: true },
	{ id: 4, on: false },
	{ id: 5, on: true },
];
export default function Boxes() {
	const [boxes, setBoxes] = React.useState(data);
	function updateBox(Boxex) {}
	function toggle(id) {
		setBoxes((preBoxes) => {
			return preBoxes.map((item) => {
				//old javascript way
				// if(item.id === id) {
				// 	return {...item, on: !item.on}
				// }
				// else {
				// 	return item
				// }
				// short version using tenary
				return item.id === id ? { ...item, on: !item.on } : item;
			});
			// OLD VERSION
			// const tempArr = [];
			// for (let i = 0; i < preBoxes.length; i++) {
			// 	const temp  =preBoxes[i]
			// 	if (temp.id === id) {
			// 		const tempbox = {
			// 			...temp,
			// 			on: !temp.on,
			// 		};
			// 		tempArr.push(tempbox);
			// 	}
			// 	else {tempArr.push(preBoxes[i])};
			// }
			// return tempArr;
		});
	}
	const boxesElement = boxes.map((item) => (
		<Box key={item.id} id={item.id} on={item.on} handleClick={toggle} />
	));

	return <div className="boxes">{boxesElement}</div>;
}
