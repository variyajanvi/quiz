
import React, { useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn, setName }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { email, password } = formData;

    if (!email || !password) {
      setErrorMsg("❌ Email and password required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://mindsparker.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Server response:", data);
      if (!response.ok || !data.success) {
        setErrorMsg(data.message || "❌ Login failed.");
        setLoading(false);
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      setName(email.split("@")[0]);
      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("❌ Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "16px",
          width: "100%",
          maxWidth: 400,
          border: "2px solid #d90429",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#d90429",
            fontFamily: "cursive",
          }}
        >
          <LoginIcon sx={{ mr: 1 }} />
          Login to Continue 🚀
        </Typography>

        {errorMsg && (
          <Typography color="error" align="center" mb={2}>
            {errorMsg}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <InputBase
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              px: 2,
              py: 1.5,
              mb: 2,
              border: "2px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          />

          <Box sx={{ position: "relative", mb: 2 }}>
            <InputBase
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              sx={{
                px: 2,
                py: 1.5,
                border: "2px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              title="Toggle password"
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: "#d90429",
              py: 1.5,
              "&:hover": { backgroundColor: "#b40321" },
            }}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
