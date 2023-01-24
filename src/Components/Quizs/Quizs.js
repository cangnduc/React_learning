import React from "react";
import "./quiz.css";
export default function Quizs() {
	const [quizs, setQuizs] = React.useState([]);
	const [index, setIndex] = React.useState(0);
	const [result, setResult] = React.useState(0);
	React.useEffect(() => {
		const apiUrl =
			"https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple";
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				const temp = data.results;
				setQuizs(
					temp.map((item) => ({
						...item,
						allAnswer: [...item.incorrect_answers, item.correct_answer],
						userChoice: "",
					}))
				);
			});
	}, [index]);
	function handleAnswer(answer, question, correctAnswer) {
		console.log(question);
		console.log("ban chon" + answer);
		console.log("cau tra loi dung la" + correctAnswer);
		setQuizs((oldQuiz) => {
			return oldQuiz.map((item) => ({
				...item,
				userChoice: item.question === question ? answer : item.userChoice,
			}));
		});
	}
	console.log(quizs);
	const quizElement = quizs.map((item) => {
		return (
			<EachQuestion
				key={item.question}
				handleAnswer={handleAnswer}
				question={item}
			/>
		);
	});

	function handleResult() {
		setResult(() => {
			let pre = 0;
			for (let i = 0; i < quizs.length; i++) {
				if (quizs[i].userChoice === quizs[i].correct_answer) {
					pre = pre + 1;
				}
			}
			return pre;
		});
		console.log("you have " + result + " correct answers");
	}
	function handleQuestion() {
		setIndex((pre) => pre + 1);
	}
	return (
		<div className="quiz">
			<div>{quizElement}</div>
			<button onClick={handleResult}>Check Answer</button>
			<button onClick={handleQuestion}>Change question</button>
			<h3>you have {result} correct answer</h3>
		</div>
	);
}
function EachQuestion(props) {
	const items = props.question;

	return (
		<div>
			<h4>{items.question}</h4>
			{items.allAnswer.map((item) => {
				return (
					<div>
						<input
							type="radio"
							id={item}
							value={item}
							checked={items.userChoice === item}
							key={item}
							onClick={() =>
								props.handleAnswer(item, items.question, items.correct_answer)
							}
							onChange={e => {}}
						/>
						<label htmlFor={item}>{item}</label>
					</div>
				);
			})}
		</div>
	);
}
