import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // 🔥 Added for smooth scrolling

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setOpen(open);
  };

  const navLinks = [
    { label: "Home", path: "/", isScrollLink: false },
   { label: "Blog", path: "/blog" },, // 🔥 Changed from page to section link
    { label: "Categories", path: "topics", isScrollLink: true },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
          <Typography variant="h4" sx={{ fontFamily: "cursive", color: "#FF9800" }}>
            💡 MindSparker
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navLinks.map((link, index) =>
              link.isScrollLink ? (
                <ScrollLink
                  key={index}
                  to={link.path}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  style={{
                    color: "#333",
                    cursor: "pointer",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? "#FF9800" : "#333",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </Link>
              )
            )}

            <Button
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "red",
                borderRadius: "23px",
                padding: "10px 25px",
                fontSize: { xs: "14px", sm: "16px" },
                "&:hover": { backgroundColor: "#c62828" },
                color: "white",
                textTransform: "none",
              }}
              variant="contained"
            >
              login
            </Button>
            
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "#FF9800" }} />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: "#fff", height: "100%", p: 2 }}>
          <List>
            {navLinks.map((link, index) =>
              link.isScrollLink ? (
                <ScrollLink
                  key={index}
                  to={link.path}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={toggleDrawer(false)}
                  style={{
                    color: "#333",
                    cursor: "pointer",
                    textDecoration: "none",
                    fontWeight: 500,
                    display: "block",
                    padding: "10px 0",
                  }}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <ListItem button key={index} onClick={toggleDrawer(false)} component={Link} to={link.path}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === link.path ? 600 : 400,
                      color: location.pathname === link.path ? "#FF9800" : "#333",
                    }}
                  />
                </ListItem>
              )
            )}
          </List>

          <Button
            onClick={() => {
              setOpen(false);
              navigate("/login");
            }}
            sx={{
              mt: 2,
              backgroundColor: "red",
              borderRadius: "23px",
              padding: "10px 25px",
              fontSize: { xs: "14px", sm: "16px" },
              "&:hover": { backgroundColor: "#c62828" },
              color: "white",
              textTransform: "none",
            }}
            variant="contained"
          >
            get started !
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;