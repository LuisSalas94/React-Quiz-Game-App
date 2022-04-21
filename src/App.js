import React, { useState } from "react";
import "./App.css";

function App() {
	const questions = [
		{
			questionText:
				"Which event is generally considered to be the first belligerent act of World War II?",
			answerOptions: [
				{ answerText: "Germany’s attack on Russia", isCorrect: false },
				{ answerText: "Germany’s attack on Britain", isCorrect: false },
				{ answerText: "Germany’s attack on Poland", isCorrect: true },
				{
					answerText: "Germany’s occupation of Austrialin",
					isCorrect: false,
				},
			],
		},
		{
			questionText:
				"Which two countries were the first to declare war on Germany?",
			answerOptions: [
				{ answerText: "Italy and Greece", isCorrect: false },
				{ answerText: "Britain and France", isCorrect: true },
				{ answerText: "Norway and Denmark", isCorrect: false },
				{ answerText: "The United States and the USSR", isCorrect: false },
			],
		},
		{
			questionText:
				"What were the first two western European countries that Germany invaded?",
			answerOptions: [
				{ answerText: "Norway and Denmark", isCorrect: true },
				{ answerText: "France and Belgium", isCorrect: false },
				{ answerText: "Switzerland and Liechtenstein", isCorrect: false },
				{ answerText: "Austria and the Netherlands", isCorrect: false },
			],
		},
		{
			questionText: "What happened at Dunkirk in May 1940?",
			answerOptions: [
				{
					answerText: "German forces were defeated in a large naval battle",
					isCorrect: false,
				},
				{ answerText: "American forces invaded France", isCorrect: false },
				{ answerText: "The French army lost a major battle", isCorrect: false },
				{
					answerText: "British forces retreated across the English Channel",
					isCorrect: true,
				},
			],
		},
		{
			questionText: "What was the “London Blitz”?",
			answerOptions: [
				{
					answerText: "Germany’s plan for a blitzkrieg on London",
					isCorrect: false,
				},
				{
					answerText: "A term used for Germany’s bombing campaign on London",
					isCorrect: true,
				},
				{
					answerText: "A series of German missile attacks late in the war",
					isCorrect: false,
				},
				{
					answerText: "Code name for a secret British radar system",
					isCorrect: false,
				},
			],
		},
		{
			questionText:
				"What was the code name given to Germany’s plan to invade the USSR?",
			answerOptions: [
				{
					answerText: "Operation Crossbow",
					isCorrect: false,
				},
				{ answerText: "Operation Wolfenstein", isCorrect: false },
				{ answerText: "Operation Sea Lion", isCorrect: false },
				{
					answerText: "Operation Barbarossa",
					isCorrect: true,
				},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showMessage, setShowMessage] = useState(false);
	const [score, setScore] = useState(0);

	const handleQuestionBtn = (isCorrect) => {
		if (isCorrect === true) {
			setScore((prevScore) => prevScore + 1);
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowMessage(true);
		}
	};

	const resetBtn = () => {
		setCurrentQuestion(0);
		setShowMessage(false);
		setScore(0);
	};

	return (
		<div className="App">
			<h1 className="title">
				WWII
				<span> Quiz</span>
			</h1>
			{showMessage ? (
				<>
					<div className="score-section">
						Your score: {score} out of {questions.length}
					</div>
					<button onClick={resetBtn} className="retryBtn">
						Retry
					</button>
				</>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className="question-text">
							{/* Display question text */}
							{questions[currentQuestion].questionText}
						</div>
					</div>
					<div className="answer-section">
						{/* Display buttons answers */}
						{questions[currentQuestion].answerOptions.map((answer, index) => (
							<button
								key={index}
								onClick={() => handleQuestionBtn(answer.isCorrect)}
							>
								{answer.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
