// Home.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import image1 from "../../image/q1.jpg";
import image2 from "../../image/man.svg";
import image3 from "../../image/secure.png";
import image4 from "../../image/time.svg";
import top from "../../image/top2.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/category/Categories";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      textAlign: "center",
      rowGap: "1rem",
    }}
  >
    {text.split(" ").map((word, wordIndex) => (
      <Box key={wordIndex} sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
        {word.split("").map((char, charIndex) => (
          <Typography
            key={charIndex}
            component="span"
            sx={{
              color: "white",
              fontSize: { xs: "2.8rem", sm: "4rem", md: "6rem" },
              fontWeight: 850,
              transition: "transform 0.3s ease, color 0.3s ease",
              display: "inline-block",
              mx: "1px",
              "&:hover": {
                transform: "scale(1.3) rotate(5deg)",
                color: "#FF4081",
              },
            }}
          >
            {char}
          </Typography>
        ))}
        {wordIndex !== text.split(" ").length - 1 && (
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "2.8rem", sm: "4rem", md: "5rem" },
              fontWeight: 850,
              mx: "2px",
              color: "white",
            }}
          >
            {"\u00A0"}
          </Typography>
        )}
      </Box>
    ))}
  </Box>
);

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const [showBackToHome, setShowBackToHome] = useState(false);

  const { ref: blogRef, inView: blogInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: gamifyRef, inView: gamifyInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: secureRef, inView: secureInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const handleScroll = () => setShowBackToHome(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.7)30%,rgba(0,0,0,0.1)100%),url(${image1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            opacity: 0.1,
            whiteSpace: "nowrap",
            fontSize: { xs: "10rem", sm: "15rem", md: "20rem" },
            fontWeight: 1000,
            color: "white",
            animation: "scrollQuizText 10s linear infinite",
            userSelect: "none",
          }}
        >
          QUIZ
        </Box>

        <Header />
        <Container
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 10, sm: 15, md: 20 },
            pb: { xs: 5, sm: 10 },
            zIndex: 2,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mb: 2,
              fontSize: { xs: "18px", sm: "22px", md: "25px" },
              fontFamily: "cursive",
              textAlign: "center",
            }}
          >
            "Where Curiosity Meets Challenge."
          </Typography>
          <AnimatedText text="Think Fast, Score Faster!" />
          <Button
            onClick={() => navigate("/home")}
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "red",
              padding: "10px 25px",
              borderRadius: "23px",
              fontSize: { xs: "14px", sm: "16px" },
              "&:hover": { backgroundColor: "#c62828" },
            }}
          >
            Get started!
          </Button>
        </Container>
      </Box>

      <style>
        {`
          @keyframes scrollQuizText {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
          @keyframes floatHero {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* JOY OF QUIZZING */}
      <Container ref={blogRef} sx={{ py: 6 }}>
        <motion.div variants={fadeInVariants} initial="hidden" animate={blogInView ? "show" : "hidden"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              textAlign: "left",
             
            }}
          >
            <Box sx={{ flex: "1 1 300px", animation: "floatHero 3s ease-in-out infinite", textAlign: {
      xs: "center",   // ✅ For below 680px
      sm: "left",   }, }}>
              <img src={image2} alt="Developer" style={{ width: "100%", maxWidth: "400px" }} />
            </Box>
            <Box sx={{ flex: "1 1 300px" }}>
              <Typography sx={{ color: "#003a66", fontSize: "30px" }}>More to Discover -----------------</Typography>
              <Typography sx={{ color: "#003a66", fontSize: "40px", fontWeight: 750, mb: 2 }}>Discover the Joy of Quizzing</Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
             Quizzes are not just questions and answers — they're a journey into curiosity, excitement, and discovery.
          Whether you're brushing up on world capitals, testing your movie knowledge, or diving into science facts,
          each quiz brings you closer to becoming a true knowledge ninja. Our platform is fast, fun, and rewarding,
          with thousands of questions across many categories.

              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* GAMIFY */}
      <Container ref={gamifyRef} sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
        <motion.div variants={fadeInVariants} initial="hidden" animate={gamifyInView ? "show" : "hidden"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box sx={{ flex: "1 1 300px" }}>
              <Typography sx={{ color: "#003a66", fontSize: "20px" }}>Gamify Your Experience -----------------</Typography>
              <Typography sx={{ color: "#003a66", fontSize: "40px", fontWeight: 750, mb: 2 }}>Leaderboards, Timers & More</Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
              Step into a dynamic quiz journey where learning meets fun! With real-time leaderboards,
          you can compete with friends or global users to see who tops the charts. Timed quizzes
          keep the thrill alive, pushing you to think quickly and accurately under pressure.
          Maintain answer streaks to unlock exciting rewards and collect badges as proof of your
          consistency. As you complete more quizzes, you earn XP and level up, opening doors to
          harder challenges and exclusive themes. It's not just about answers—it's about the
          experience!
              </Typography>
            </Box>
            <Box sx={{ flex: "1 1 300px", animation: "floatHero 3s ease-in-out infinite" }}>
              <img src={image4} alt="Gamify" style={{ width: "100%", maxWidth: "500px" }} />
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* SECURITY */}
      <Container ref={secureRef} sx={{ py: 6 }}>
        <motion.div variants={fadeInVariants} initial="hidden" animate={secureInView ? "show" : "hidden"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box sx={{ flex: "1 1 300px" }}>
              <Typography sx={{ color: "#003a66", fontSize: "20px" }}>Privacy & Security -----------------</Typography>
              <Typography sx={{ color: "#003a66", fontSize: "40px", fontWeight: 750, mb: 2 }}>Keep It Secure</Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
                Your privacy is our top priority, and we ensure that your data remains safe with
          end-to-end encryption. We do not share your information with any third parties,
          keeping your activity completely confidential. Our secure login system ensures only
          you can access your account and quiz progress. All results and history are stored
          securely for your convenience. We regularly update our security protocols to stay
          ahead of threats. With us, you can focus on learning while we focus on protecting
          your privacy.
              </Typography>
            </Box>
            <Box sx={{ flex: "1 1 300px", animation: "floatHero 3s ease-in-out infinite" }}>
              <img src={image3} alt="Security" style={{ width: "100%", maxWidth: "400px" }} />
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* CATEGORY SECTION */}
      <Container id="topics">
        <Box sx={{ width: "100%", backgroundColor: "white", py: 6 }}>
          <Typography sx={{ color: "#003a66", textAlign: "center", fontSize: "20px" }}>
            ----------------- More to Discover -----------------
          </Typography>
          <Typography sx={{ color: "#003a66", textAlign: "center", fontSize: "50px", fontWeight: 750 }}>
            Large set of topics
          </Typography>
          <Typography sx={{ color: "gray", textAlign: "center", fontSize: "18px" }}>
            Test your knowledge across a wide variety of topics...
          </Typography>
          <Categories />
        </Box>
      </Container>

      <Footer />

      {showBackToHome && (
        <Box
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 900, cursor: "pointer" }}
        >
          <img src={top} alt="Top" style={{ width: "100px", transition: "transform 0.3s" }} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
