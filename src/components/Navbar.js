import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material"; // Menu and Close icons
import { Link } from "react-scroll"; // Use Link from 'react-scroll' for smooth scrolling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect window width and update the state for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960); // Use mobile view if width < 960px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle the drawer (sidebar) for mobile view
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            <span style={{ color: "#e53935" }}>AZIZUR</span> RAHMAN
          </Typography>

          {/* For mobile, show menu icon */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <Menu />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List
                  sx={{
                    width: "250px",
                    backgroundColor: "#333",
                    height: "100%",
                    color: "#fff",
                  }}
                >
                  <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{
                      color: "#fff",
                      position: "absolute",
                      top: 15,
                      right: 15,
                    }}
                  >
                    <Close />
                  </IconButton>
                  {navLinks.map((link, index) => (
                    <ListItem button key={index} onClick={toggleDrawer(false)}>
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        <ListItemText
                          primary={link.label}
                          sx={{
                            color: "white",
                            fontSize: "1.5rem",
                            textAlign: "center",
                          }}
                        />
                      </Link>
                    </ListItem>
                  ))}
                  {/* Github link for mobile */}
                  <ListItem button>
                    <a
                      href="https://github.com/your-github-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemText
                        primary="Github"
                        sx={{
                          color: "white",
                          fontSize: "1.5rem",
                          textAlign: "center",
                        }}
                      />
                    </a>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            // For desktop view, show regular navigation links
            <div>
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button sx={{ color: "white", fontWeight: "bold" }}>
                    {link.label}
                  </Button>
                </Link>
              ))}
              {/* Github link for desktop */}
              <Button
                sx={{ color: "white", fontWeight: "bold" }}
                href="https://github.com/Azizur2001?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
