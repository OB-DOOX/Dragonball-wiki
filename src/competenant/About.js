import React, { useEffect, useState } from "react";
import "./Header.css";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/questions") // Charge les questions depuis le fichier JSON
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des questions :", error)
      );
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Enregistrer la réponse du joueurs
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = {
      question: currentQuestion.question,
      selected: selectedAnswer,
      correct: currentQuestion.answer,
      isCorrect: selectedAnswer === currentQuestion.answer,
    };
    setUserAnswers(newAnswers);

    // Passer à la question suivante ou afficher le score final
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  if (questions.length === 0) {
    return <p>Chargement du quiz...</p>;
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>
            Votre score :{" "}
            {userAnswers.filter((answer) => answer.isCorrect).length} /{" "}
            {questions.length}
          </h2>

          <h3>Résumé des réponses :</h3>
          <ul className="answer-review">
            {userAnswers.map((answer, index) => (
              <li
                key={index}
                className={answer.isCorrect ? "correct" : "incorrect"}
              >
                <strong>Question {index + 1}:</strong> {answer.question}
                <br />
                <strong>Votre réponse:</strong> {answer.selected}
                {answer.isCorrect ? (
                  <span className="result correct"> (Vrai)</span>
                ) : (
                  <span className="result incorrect">
                    {" "}
                    (Faux, la bonne réponse était : {answer.correct})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="question-section">
          <h2 className="question-text">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
