import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Lightbulb, EmojiObjects, School } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import card1 from "../../image/img1.webp";
import card2 from "../../image/img2.jpg";
import card3 from "../../image/img3.jpg";

const cardData = [
  {
    title: "Boost Your Brain",
    description:
      "Quizzes are like mental workouts — they help improve your memory, sharpen logic, and enhance problem-solving skills. A daily quiz can do wonders!",
    image: card1,
  },
  {
    title: "Fun Learning",
    description:
      "Learning through quizzes makes knowledge stick better. The element of fun keeps your curiosity alive, making you want to learn more every day!",
    image: card2,
  },
  {
    title: "Challenge Yourself",
    description:
      "Push your limits with challenging quizzes. The harder the question, the greater the thrill. Keep leveling up with every attempt!",
    image: card3,
  },
];

const Blogpage = () => {
  return (
    <>
      <Header />
      <Box sx={{ py: 6, px: { xs: 2, sm: 6 }, background: "#f7f9fc", minHeight: "100vh" }}>
        {/* Blog Header */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: "center", color: "#003a66" }}>
          Welcome to Our Quiz Blog!
        </Typography>

        {/* Blog Cards */}
        <Grid container spacing={4}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.03 }} style={{ height: "100%" }}>
                <Card sx={{ height: "100%", background: "#fff", boxShadow: 4, borderRadius: 3 }}>
                  <CardContent>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "1rem" }}
                    />
                    <Typography variant="h5" sx={{ color: "#FF9800", fontWeight: 600 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ mt: 1, color: "#555", fontSize: "16px", lineHeight: 1.7 }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Quotes Section */}
        <Box sx={{ mt: 10, py: 6, px: 3, background: "#e3f2fd", borderRadius: "16px" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#003a66", mb: 4, textAlign: "center" }}>
            ✨ Motivational Quiz Quotes
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Lightbulb sx={{ fontSize: 50, color: "#ff9800" }} />
                  <Typography sx={{ mt: 2, fontSize: "18px", color: "#444" }}>
                    “It’s not that I’m so smart, it’s just that I stay with problems longer.”<br />― Einstein
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Box sx={{ textAlign: "center" }}>
                  <EmojiObjects sx={{ fontSize: 50, color: "#2196f3" }} />
                  <Typography sx={{ mt: 2, fontSize: "18px", color: "#444" }}>
                    “Learning never exhausts the mind.”<br />― Leonardo da Vinci
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Box sx={{ textAlign: "center" }}>
                  <School sx={{ fontSize: 50, color: "#4caf50" }} />
                  <Typography sx={{ mt: 2, fontSize: "18px", color: "#444" }}>
                    “The beautiful thing about learning is that nobody can take it away from you.”<br />― B.B. King
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Blogpage;
