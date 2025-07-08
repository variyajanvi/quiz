

import React from "react";


import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  FaBookOpen, FaBook, FaFilm, FaMusic, FaTheaterMasks, FaTv,
  FaGamepad, FaChessBoard, FaLeaf, FaLaptopCode, FaCalculator,
  FaDragon, FaFutbol, FaGlobe, FaHistory, FaVoteYea, FaPaintBrush,
  FaStar, FaDog, FaCar, FaMobileAlt, FaRocket, FaSmile,
} from "react-icons/fa";

// Export categories array separately for reuse in other components
export const categories = [
  { category: "General Knowledge", value: 9 },
  { category: "Books", value: 10 },
  { category: "Films", value: 11 },
  { category: "Music", value: 12 },
  { category: "Musicals and Theaters", value: 13 },
  { category: "Television", value: 14 },
  { category: "Video Games", value: 15 },
  { category: "Board Games", value: 16 },
  { category: "Science and Nature", value: 17 },
  { category: "Computer", value: 18 },
  { category: "Mathematics", value: 19 },
  { category: "Mythology", value: 20 },
  { category: "Sports", value: 21 },
  { category: "Geography", value: 22 },
  { category: "History", value: 23 },
  { category: "Politics", value: 24 },
  { category: "Art", value: 25 },
  { category: "Celebrities", value: 26 },
  { category: "Animals", value: 27 },
  { category: "Vehicles", value: 28 },
  { category: "Comics", value: 29 },
  { category: "Gadgets", value: 30 },
  { category: "Japanese Anime", value: 31 },
  { category: "Cartoon and Animations", value: 32 },
];

const iconMap = {
  "General Knowledge": <FaBookOpen size={60} color="#1976d2" />,
  Books: <FaBook size={60} color="#9c27b0" />,
  Films: <FaFilm size={60} color="#ff5722" />,
  Music: <FaMusic size={60} color="#3f51b5" />,
  "Musicals and Theaters": <FaTheaterMasks size={60} color="#e91e63" />,
  Television: <FaTv size={60} color="#00bcd4" />,
  "Video Games": <FaGamepad size={60} color="#4caf50" />,
  "Board Games": <FaChessBoard size={60} color="#795548" />,
  "Science and Nature": <FaLeaf size={60} color="#8bc34a" />,
  Computer: <FaLaptopCode size={60} color="#607d8b" />,
  Mathematics: <FaCalculator size={60} color="#ff9800" />,
  Mythology: <FaDragon size={60} color="#9c27b0" />,
  Sports: <FaFutbol size={60} color="#4caf50" />,
  Geography: <FaGlobe size={60} color="#2196f3" />,
  History: <FaHistory size={60} color="#6d4c41" />,
  Politics: <FaVoteYea size={60} color="#3f51b5" />,
  Art: <FaPaintBrush size={60} color="#e91e63" />,
  Celebrities: <FaStar size={60} color="#ffc107" />,
  Animals: <FaDog size={60} color="#ff5722" />,
  Vehicles: <FaCar size={60} color="#009688" />,
  Comics: <FaBookOpen size={60} color="#673ab7" />,
  Gadgets: <FaMobileAlt size={60} color="#607d8b" />,
  "Japanese Anime": <FaRocket size={60} color="#f44336" />,
  "Cartoon and Animations": <FaSmile size={60} color="#ff9800" />,
};

const CategoryCard = ({ title, value }) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/home", {
      state: { selectedCategory: title },
    });
  };

  return (
    <Card
      sx={{
        width: 260,
        height: 260,
        m: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Box sx={{ mb: 1 }}>{iconMap[title] || <FaBookOpen size={60} />}</Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Button variant="contained" onClick={handleStartQuiz}>
        🎯 Take a Quiz
      </Button>
    </Card>
  );
};

const Categories = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Select a Category
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {categories.map((cat) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={cat.category} sx={{ display: "flex", justifyContent: "center" }}>
              <CategoryCard title={cat.category} value={cat.value} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
