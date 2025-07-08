
import React, { useState, useEffect } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMessage/ErrorMsg";
import { categories } from "../../components/category/Categories";
import './Home.css';


const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState(10); // New state for number of questions
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      const selectedCategory = categories.find(
        (cat) => cat.category === location.state.selectedCategory
      );
      if (selectedCategory) {
        setCategory(selectedCategory.value);
      }
    }
  }, [location.state]);

  const handleSubmit = async () => {
    if (!category || !difficulty || !name.trim() || !numQuestions) {
      setError(true);
      return;
    }

    setError(false);
    await fetchQuestions(category, difficulty, numQuestions); // Pass numQuestions
    navigate("/quiz");
  };

  return (
    <div className="home-container">
      <div className="content-row">
        <div className="settings">
          <h1 className="title">Quiz Settings</h1>
          <div className="settings__select">
            {error && <ErrorMsg>Please Fill all the fields</ErrorMsg>}

            <TextField
              fullWidth
              label="Enter Your Name"
              variant="outlined"
              className="input-field"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              fullWidth
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              className="input-field"
            >
              {categories.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              className="input-field"
            >
              <MenuItem value="easy">🟢 Easy</MenuItem>
              <MenuItem value="medium">🟡 Medium</MenuItem>
              <MenuItem value="hard">🔴 Hard</MenuItem>
            </TextField>

            <TextField
              fullWidth
              select
              label="Select Number of Questions"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              variant="outlined"
              className="input-field"
            >
              {[...Array(20).keys()].map(num => (
                <MenuItem key={num + 1} value={num + 1}>
                  {num + 1}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              color="primary"
              size="large"
              className="start-btn"
              onClick={handleSubmit}
            >
              🎡 Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
