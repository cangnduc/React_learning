import React from "react";
export default function Click() {
	const thingArr = ["Thing 1", "Thing 2"];
	const [arrItem, setArrItem] = React.useState(thingArr);
	function Them() {
		const temp = arrItem;
		temp.push(`Thing ${arrItem.length + 1}`);
		setArrItem([...temp]);
		//setArrItem((preItem) => [...preItem, `Thing ${preItem.length + 1}`]);
	}
	function Xoaa() {
		const temp = arrItem.slice(0, -1);
		setArrItem(temp);
	}
	const arrElements = arrItem.map((item) => <div key={item}>{item}</div>);
	return (
		<div>
			<button onClick={Them}>Them</button>
			<button onClick={Xoaa}>XOa</button>
			{arrElements}
		</div>
	);
}
