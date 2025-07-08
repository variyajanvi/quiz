

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/category/Categories";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/Home";
import Quiz from "./pages/Quizs/Quiz";
import Result from "./pages/Results/Result";
import HomieHome from "./pages/homie/Home";
import Blog from "./pages/blog/Blogpage";
import axios from "axios";

// 💡 Loader Component
function Loader() {
  return (
    <div style={loaderWrapperStyle}>
      <div style={questionMarkStyle}>💡</div>
      <div style={mindsparkerStyle}>Mindsparker</div>
    </div>
  );
}

// Loader Styles
const loaderWrapperStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  overflow: "hidden",
  zIndex: 9999,
};

const questionMarkStyle = {
  fontSize: "8rem",
  fontWeight: "bold",
  color: "#333",
  position: "relative",
  animation: "slideIn 2s forwards",
};

const mindsparkerStyle = {
  fontSize: "3rem",
  fontFamily: "cursive",
  fontWeight: "600",
  color: "#333",
  opacity: 0,
  animation: "fadeIn 1s 1.5s forwards",
};

// 💡 Keyframe animations
const styleSheet = `
@keyframes slideIn {
  0% { left: -100px; opacity: 0; }
  100% { left: 0; opacity: 1; }
}
@keyframes fadeIn {
  to { opacity: 1; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;

if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styleSheet;
  document.head.appendChild(styleTag);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingCategory, setPendingCategory] = useState(null);
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [quizLoading, setQuizLoading] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingScreen(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // const fetchQuestions = async (category = "", difficulty = "") => {
  //   setQuizLoading(true);
  //   try {
  //     const { data } = await axios.get(
  //       `https://opentdb.com/api.php?amount=10${
  //         category ? `&category=${category}` : ""
  //       }${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`
  //     );
  //     setQuestions(data.response_code === 0 ? data.results : []);
  //   } catch (err) {
  //     console.error("Error fetching questions:", err);
  //     setQuestions([]);
  //   }
  //   setQuizLoading(false);
  // };


// const fetchQuestions = async (category = "", difficulty = "", amount = 10) => {
 const fetchQuestions = async (category = "", difficulty = "", amount = 10) => {
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const data = await res.json();
    setQuestions(data.results);

    // ✅ Store count for Result page use
    localStorage.setItem("questionCount", data.results.length);
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};



  if (loadingScreen) return <Loader />;

  return (
    <BrowserRouter>
      <div className="app">
        {quizLoading && (
          <div style={quizLoaderScreenStyle}>
            <div style={quizLoaderStyle}></div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<HomieHome />} />
          <Route
            path="/login"
            element={
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
                pendingCategory={pendingCategory}
                setPendingCategory={setPendingCategory}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/category"
            element={
              <Categories
                isLoggedIn={isLoggedIn}
                setName={setName}
                name={name}
                fetchQuestions={fetchQuestions}
                setPendingCategory={setPendingCategory}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                setName={setName}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                name={name}
                score={score}
                setName={setName}
                setScore={setScore}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Quiz Loader
const quizLoaderScreenStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255,255,255,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const quizLoaderStyle = {
  width: "50px",
  height: "50px",
  border: "6px solid #ccc",
  borderTopColor: "#333",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default App;
