import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { color } from "framer-motion";

const iconStyle = {
  mx: 1,
  width: 60,
  height: 60,
  borderRadius: "50%",
  border: "2px solid white",
  transition: "all 0.4s ease",
  color: "white",
  "&:hover": {
    transform: "rotate(360deg)",
    backgroundColor: "white",
    color: "#003a66", // Icon turns dark blue on hover, but you can keep it white too
  },
};

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003a66",
        color: "white",
        padding: "40px 20px 20px",
        mt: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        MindSparker
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
        "Where Curiosity Meets Challenge"
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="/category" color="inherit" underline="none" sx={{ mx: 1 }}>
          category
        </Link>
        <Link href="/quiz" color="inherit" underline="none" sx={{ mx: 1 }}>
          Quiz
        </Link>
        
      </Box>

      <Box>
        <IconButton href="https://facebook.com" target="_blank" sx={iconStyle}>
          <FacebookIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" sx={iconStyle}>
          <InstagramIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" sx={iconStyle}>
          <TwitterIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton href="https://github.com" target="_blank" sx={iconStyle}>
          <GitHubIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
        © {new Date().getFullYear()} Mindsparker. All rights reserved.
      </Typography>
      <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
       <span  >💖</span> Developed By Janvi Variya 🚀 
      </Typography>
    </Box>
  );
};

export default Footer;
