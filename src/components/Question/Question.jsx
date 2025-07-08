import React, { useState } from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../ErrorMessage/ErrorMsg";
import { Button, CircularProgress } from "@mui/material";

const Question = ({
  currQue,
  setCurrQue,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  setName,
}) => {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Determine class for options based on selection and correctness
  const handleSelect = (option) => {
    if (selected === option && selected === correct) return "select";
    else if (selected === option && selected !== correct) return "wrong";
    else if (option === correct) return "select";
    return "";
  };

  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (!selected) {
      setError("Please select an option first");
      return;
    }

    if (currQue >= questions.length - 1) {
      navigate("/result");
    } else {
      setCurrQue(currQue + 1);
      setSelected(null);
    }
  };

  const handleQuit = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrQue(0);
      setQuestions([]);
      setName("");
      localStorage.removeItem("name");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="question">
      <h1>Question {currQue + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQue]?.question || "Loading Question..."}</h2>

        <div className="options">
          {error && <ErrorMsg>{error}</ErrorMsg>}
          {options.map((option) => (
            <button
              key={option}
              className={`singleOption ${selected && handleSelect(option)}`}
              onClick={() => handleCheck(option)}
              disabled={selected || loading}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className="quit-btn"
            onClick={handleQuit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Quit"}
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            className="next-btn"
            onClick={handleNext}
            disabled={loading}
          >
            {currQue === questions.length - 1 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
