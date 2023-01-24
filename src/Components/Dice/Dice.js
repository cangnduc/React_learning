import React from "react";
import "./dice.css";
import {nanoid} from 'nanoid'
export default function Dice() {
	//const arr =[1,2,3,4,5,6,7,8,9,10]
	const [arr, setArr] = React.useState(generateObjectArray());
    
	const diceElements = arr.map((item) => (
		<DiceFace handleClick={() =>toggle(item.id)} key={item.id} id ={item.id} value={item.value} isHeld={item.isHeld} />
	));
	function handleChange() {
		setArr(generateObjectArray());
	}
    function toggle(id) {
        setArr(oldArr =>oldArr.map((item)=>{return item.id !== id? item: {...item,isHeld:!item.isHeld}}))
    }
    
	return (
		<div className="dice-container">
			<div className="dice">{diceElements}</div>

			<button onClick={handleChange} className="btn-roll">
				Reroll
			</button>
		</div>
	);
}

function DiceFace(props) {
	
	return (
		<div onClick={props.handleClick} className={`dice-face ${props.isHeld? "true-dice": ""}`}>
			{props.value}
		</div>
	);
}
function generateArray() {
	let arr = [];
	while (arr.length < 10) {
		let randnum = Math.floor(Math.random() * 10) + 1;
		if (!arr.includes(randnum)) {
			arr.push(randnum);
		}
	}
	return arr;
}
function generateObjectArray() {
	let arr = generateArray();
	const newarr = arr.map((old) => (old.isHeld? old: { value: old, isHeld: false, id: nanoid() }));
    
	return newarr;
}
