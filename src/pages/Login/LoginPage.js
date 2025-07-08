// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   InputBase,
//   Button,
//   useMediaQuery,
//   useTheme,
//   Paper,
// } from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import { motion } from "framer-motion";
// import axios from "axios";

// const LoginPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/login", formData);
//       setFormData({ email: "", password: "" });
//     } catch (error) {
//       console.error("Error sending message", error);
//       alert("Something went wrong!");
//     }
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <Box sx={{ width: "100%", py: 6, backgroundColor: "#f0f0f0" }}>
//         <Container maxWidth="sm">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             transition={{ duration: 1 }}
//           >
//             <Paper
//               elevation={6}
//               sx={{
//                 p: 4,
//                 borderRadius: "16px",
//                 border: "1px solid #ddd",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <Typography
//                 variant={isMobile ? "h5" : "h4"}
//                 sx={{
//                   color: "#d90429",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   mb: 2,
//                   textShadow: "1px 1px 4px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 <LoginIcon sx={{ verticalAlign: "middle", mr: 1 }} />
//                 Chalo bhai, login maaro aur shuru karo! 🚀
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "#333",
//                   fontWeight: 600,
//                   fontSize: "1rem",
//                   textAlign: "center",
//                   mb: 1,
//                 }}
//               >
//                 Welcome Back
//               </Typography>

//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontWeight: "bold",
//                   textAlign: "center",
//                   mb: 4,
//                   color: "#333",
//                 }}
//               >
//                 Login to your account
//               </Typography>

//               <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{ display: "flex", flexDirection: "column", gap: 3 }}
//               >
//                 {["email", "password"].map((field, index) => (
//                   <InputBase
//                     key={index}
//                     name={field}
//                     type={field === "password" ? "password" : "email"}
//                     placeholder={
//                       field.charAt(0).toUpperCase() + field.slice(1)
//                     }
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                     sx={{
//                       px: 2,
//                       py: 1.8,
//                       border: "2px solid #ccc",
//                       borderRadius: "10px",
//                       fontSize: "16px",
//                       backgroundColor: "#fdfdfd",
//                       transition: "all 0.3s ease",
//                       '&:hover': {
//                         borderColor: "#d90429",
//                       },
//                       '&:focus-within': {
//                         borderColor: "#b40321",
//                         boxShadow: "0 0 0 2px rgba(217,4,41,0.2)",
//                       },
//                     }}
//                   />
//                 ))}

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#d90429",
//                     py: 1.5,
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                     textTransform: "none",
//                     borderRadius: "10px",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       backgroundColor: "#b40321",
//                       transform: "scale(1.03)",
//                     },
//                   }}
//                 >
//                   Log In 🚀
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import {
//   Box, Container, Typography, InputBase, Button,
//   useMediaQuery, useTheme, Paper,
// } from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import bg from "../../image/login.png";

// const LoginPage = ({ setIsLoggedIn, setName }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg("");
//     const { email, password } = formData;

//     const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     if (!validEmail) {
//       setErrorMsg("❌ Please enter a valid email address.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!data.success) {
//         setErrorMsg(data.message);
//         setLoading(false);
//         return;
//       }

//       localStorage.setItem("isLoggedIn", "true");
//       setIsLoggedIn(true);
//       setName(email.split("@")[0]);
//       setFormData({ email: "", password: "" });
//       navigate("/home");
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMsg("❌ Server error. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         py: 6,
//         backgroundColor: "#f7f7f7",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container maxWidth="md">
//         <Box
//           display="flex"
//           flexDirection={isMobile ? "column" : "row"}
//           alignItems="center"
//           justifyContent="center"
//           gap={4}
//         >
//           {/* Left: Login Form */}
//           <motion.div
//             style={{ flex: 1, width: "100%" }}
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 1 }}
//           >
//             <Paper
//               elevation={6}
//               sx={{
//                 p: 4,
//                 borderRadius: "16px",
//                 border: "1px solid #ddd",
//                 backgroundColor: "rgba(255,255,255,0.95)",
//               }}
//             >
//               <Typography variant={isMobile ? "h5" : "h4"} align="center" color="#d90429">
//                 <LoginIcon sx={{ verticalAlign: "middle", mr: 1 }} />
//                 Chalo bhai, login maaro aur shuru karo! 🚀
//               </Typography>

//               <Typography align="center" fontWeight={600} mt={2}>
//                 Login to your account
//               </Typography>

//               {errorMsg && (
//                 <Typography color="error" align="center" mt={1}>
//                   {errorMsg}
//                 </Typography>
//               )}

//               <Box component="form" onSubmit={handleSubmit} mt={3}>
//                 {["email", "password"].map((field) => (
//                   <InputBase
//                     key={field}
//                     name={field}
//                     type={field === "password" ? "password" : "email"}
//                     placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                     sx={{
//                       px: 2, py: 1.8, mb: 2,
//                       border: "2px solid #ccc", borderRadius: "10px",
//                       width: "100%", fontSize: "16px",
//                       backgroundColor: "#fff",
//                       "&:hover": { borderColor: "#d90429" },
//                       "&:focus-within": {
//                         borderColor: "#b40321",
//                         boxShadow: "0 0 0 2px rgba(217,4,41,0.2)",
//                       },
//                     }}
//                   />
//                 ))}
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   disabled={loading}
//                   sx={{
//                     backgroundColor: "#d90429", py: 1.5, width: "100%",
//                     "&:hover": { backgroundColor: "#b40321", transform: "scale(1.03)" },
//                   }}
//                 >
//                   {loading ? "Logging in..." : "Log In 🚀"}
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>

//           {/* Right: Image */}
//           {!isMobile && (
//             <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <img
//                 src={bg}
//                 alt="Login Illustration"
//                 style={{
//                   maxWidth: "100%",
//                   height: "auto",
//                   objectFit: "contain",
//                   borderRadius: "16px",
//                 }}
//               />
//             </Box>
//           )}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default LoginPage;

// LoginPage.js
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

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      setErrorMsg("❌ Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`$https://quizgame-nyw6.onrender.com}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!data.success) {
        setErrorMsg(data.message || "Login failed.");
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
