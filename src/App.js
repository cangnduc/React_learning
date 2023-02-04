import "./App.css";
import Boxes from "./Components/Boxes";
import Card from "./Components/Card";
import Click from "./Components/Click";
import Count from "./Components/Count";
import Header from "./Components/Header";
import Jokes from "./Components/jokes/Jokes";
import Meme from "./Components/Meme";
import Form from "./Components/Form/Form";
import Form1 from "./Components/Form/Form1";
import SideEffect from "./Components/SideEffect";
import Toggle from "./Components/Toggle";
import Dice from "./Components/Dice/Dice";
import Quizs from "./Components/Quizs/Quizs";
import Practice from "./Components/practice";
import React from "react";
import { func } from "prop-types";
import { react } from "@babel/types";
function App() {
	return <GetApi />;
}

export default App;
function TodoList() {
	const [todo, setTodo] = React.useState(
		JSON.parse(localStorage.getItem("todoList")) ?? []
	);
	const [value, setValue] = React.useState("");
	function handleChange(event) {
		setValue(() => event.target.value);
	}
	return (
		<div className="App">
			<input type="text" value={value} onChange={handleChange} />
			<button
				onClick={() => {
					setTodo((pre) => {
						const newTodo = JSON.stringify([...todo, value]);
						localStorage.setItem("todoList", newTodo);
						return [...pre, value];
					});
					setValue("");
				}}>
				submit
			</button>

			<ul style={{ color: "white" }}>
				{todo.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
function GetApi() {
	let listApi = ["posts", "comments", "photos"];
	const [type, setType] = React.useState("posts");
	const [data,setData] = React.useState([])
	
	React.useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((response) => response.json())
			.then((json) => setData(()=>json));
	}, [type]);
	return (
		<div className="get-api">
			<ul style={{ listTypeTtyle: "none" }}>
				{listApi.map((item) => (
					<li onClick={() => setType(() => item)} style={type===item? {backgroundColor:"red",width:"100px"}: {backgroundColor:"navy"}} key={item}>
						{item}
					</li>
				))}
			</ul>
			<ul>
				{data.map((item,index)=><li key={item.id}>{index} {item.title}</li>)}
			</ul>
		</div>
	);
}
