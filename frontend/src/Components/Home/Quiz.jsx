// import React from 'react'

// const Quiz = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Quiz

import React, { useState } from 'react';
import "../../assets/style/Quiz.css" // Import the CSS file

const Quiz = () => {
  const [questions] = useState([
    {
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      questionText: "What is the largest ocean on Earth?",
      options: ["Indian", "Atlantic", "Arctic", "Pacific"],
      answer: "Pacific",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz</h2>
      {showScore ? (
        <div className="score-section">
          <h3>Your Score: {score} / {questions.length}</h3>
          <button className="quiz-button" onClick={() => {
            setScore(0);
            setCurrentQuestion(0);
            setShowScore(false);
          }}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-text">
            <h4>{questions[currentQuestion].questionText}</h4>
          </div>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`option-button ${selectedOption === option ? "selected" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="quiz-button" onClick={handleNextQuestion}>
            {currentQuestion < questions.length - 1 ? "Next Question" : "Show Score"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
