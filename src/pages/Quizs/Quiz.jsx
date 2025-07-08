
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import Question from "../../components/Question/Question";

const Quiz = ({ name, setName, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState([]);
  const [currQue, setCurrQue] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) navigate("/");

    const timer = setTimeout(() => {
      if (!questions || questions.length === 0) {
        alert("No questions loaded. Please try again.");
        navigate("/home");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [name, questions, navigate]);

  useEffect(() => {
    if (questions && questions.length > 0) {
      setLoading(false);

      const currQuestion = questions[currQue];
      const answers = [
        currQuestion.correct_answer,
        ...currQuestion.incorrect_answers,
      ];

      setOptions(shuffleArray(answers));
    }
  }, [questions, currQue]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getCorrectAnswer = (question) => {
    return question?.correct_answer || null;
  };

  return (
    <div className="quiz">
      <div className="quiz-container">
        <span className="subtitle">😎 {name}, let's crack this!</span>

        {loading ? (
          <div className="loading-container">
            <CircularProgress className="loading-spinner" size={80} thickness={2} />
            <p className="loading-text">Loading questions, please wait ..</p>
          </div>
        ) : (
          <>
            <div className="quizInfo">
              <span>📚 {questions[currQue]?.category}</span>
              <span>🏆 Score: {score}</span>
            </div>

            <Question
              currQue={currQue}
              setCurrQue={setCurrQue}
              questions={questions}
              options={options}
              correct={getCorrectAnswer(questions[currQue])}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              setName={setName}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;

