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
import React, { useRef } from "react";
import { func } from "prop-types";
import { react } from "@babel/types";
import { clear } from "@testing-library/user-event/dist/clear";
import Register from "./Components/Register";
function App() {
	return <Register />;
}

export default App;
function TimerID() {
	const [time,setTime] = React.useState(60)
	let timerID = useRef()
	
	function handleClick() {
		handleStop() //clear the old setInterval
		timerID.current = setInterval(()=>{
			setTime(pre=>pre-1)
		},1000)
	}
	function handleStop() {
		clearInterval(timerID.current)
	}
	return <div>
		<h3>{time}</h3>
		<button onClick={handleClick}>start</button>
		<button onClick={handleStop}>stop</button>
	</div>
}
function PrintText() {
	const [text, setText] = React.useState("");
	console.log("them vao");
	React.useEffect(() => {
		const test = setInterval(() => {
			setText((pre) => pre + " a");
		}, 2200);
		return () => {
			console.log("clear");
			clearInterval(test);
		};
	}, []);
	return <div>{text}</div>;
}
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
	const [data, setData] = React.useState([]);
	const [showbtn, setShowBtn] = React.useState(false);
	React.useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((response) => response.json())
			.then((json) => setData(() => json));
	}, [type]);
	React.useEffect(() => {
		const scrollHandle = () => {
			setShowBtn(window.scrollY >= 250);
		};
		window.addEventListener("scroll", scrollHandle);
	}, []);
	return (
		<div className="get-api">
			<ul style={{ listTypeTtyle: "none" }}>
				{listApi.map((item) => (
					<li
						onClick={() => setType(() => item)}
						style={
							type === item
								? { backgroundColor: "red", width: "100px" }
								: { backgroundColor: "navy" }
						}
						key={item}>
						{item}
					</li>
				))}
			</ul>
			<ul>
				{data.map((item, index) => (
					<li key={item.id}>
						{index} {item.title}
					</li>
				))}
			</ul>
			{showbtn && (
				<button
					onClick={() => {
						window.scroll(0, 0);
						console.log("da click");
					}}
					style={{ position: "fixed", bottom: "20px", right: "20px" }}>
					go to top
				</button>
			)}
		</div>
	);
}
function FecthApi() {
	React.useEffect( () => {
		const  fetchData = async()=> {
			// You can await here
			const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/items";

			const response = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"X-API-Key": "Testing",
					"Content-Type": "application/json",
				},
			});
			console.log(await response.json())
			//const items = await response.json()
			//return items
			// ...
		}
		
		fetchData()
	}, []);
	return <div>aaa</div>;
}
function ToggleBtn() {
	const [toggle, setToggle] = React.useState(false);
	const handleToggle = () => {
		setToggle((pre) => !pre);
	};
	return (
		<div>
			<button onClick={handleToggle}>Toggle</button>
			{toggle && <TimerID />}
		</div>
	);
}
function Timer() {
	const [time, setTime] = React.useState(20);
	React.useEffect(() => {
		const aaa = setInterval(() => {
			setTime((pre) => (pre <= 0 ? 20 : pre - 1));
			console.log("in");
		}, 1000);
		return () => {
			clearInterval(aaa);
		};
	}, []);
	return <div>{time}</div>;
}
function ResizeWindow() {
	const [size, setSize] = React.useState(window.innerWidth);
	React.useEffect(() => {
		window.addEventListener("resize", () => {
			setSize(window.innerWidth);
		});
	}, []);
	return (
		<div>
			<h3>{size}</h3>
		</div>
	);
}
