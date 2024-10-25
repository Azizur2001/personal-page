import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Container,
  Fade,
  Paper,
} from "@mui/material";
import { useInView } from "react-intersection-observer"; // Import useInView for scroll trigger
import emailjs from "@emailjs/browser";

// Define the contact data for Phone, Email, and Address
const contactDetails = [
  {
    icon: "📞", // You can replace this with actual icon paths
    title: "Phone",
    details: ["+1 347-691-0612"],
  },
  {
    icon: "✉️", // You can replace this with actual icon paths
    title: "Email",
    details: ["Rahmanazizur946@gmail.com", "Azizur.rahman59@gmail.cuny.edu"],
  },
  {
    icon: "📍", // You can replace this with actual icon paths
    title: "Address",
    details: ["United States of America, New York, Bronx"],
  },
];

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Hook to observe when the section comes into view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sd5szqp",
        "template_1pwj4km",
        form.current,
        "VshxAyZ4uRBYk-xRN"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          setMessageSent(true);
          setErrorMessage("");
        },
        (error) => {
          console.log("FAILED...", error);
          setErrorMessage("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Container
      id="contact"
      ref={ref}
      sx={{
        maxWidth: { xs: "100%", sm: "90%", md: "1200px" }, // Adjusted for responsiveness
        margin: "0 auto",
        padding: { xs: "50px 10px", md: "100px 20px" }, // Responsive padding for mobile, tablet, and desktop
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          <span style={{ color: "#e53935" }}>Let's</span> Connect!
        </Typography>
      </Fade>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Fade in={inView} timeout={1500}>
            <form ref={form} onSubmit={sendEmail}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  name="from_name"
                  fullWidth
                  required
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} // Responsive text size for input
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  name="email_id"
                  type="email"
                  fullWidth
                  required
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} // Responsive text size for input
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  name="message"
                  multiline
                  rows={6}
                  fullWidth
                  required
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} // Responsive text size for textarea
                />
                {messageSent && (
                  <Typography
                    sx={{
                      color: "green",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Your message has been sent successfully!
                  </Typography>
                )}
                {errorMessage && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {errorMessage}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "#e53935",
                    color: "white",
                    padding: { xs: "8px 20px", md: "10px 30px" }, // Responsive button padding
                    fontSize: { xs: "1rem", md: "1.2rem" }, // Responsive font size
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#d32f2f",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Fade>
        </Grid>
      </Grid>

      {/* Contact Details Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
        {contactDetails.map((detail, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Fade in={inView} timeout={1500 + index * 300}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "200px", // Ensures all boxes are the same height
                }}
              >
                <Typography variant="h4" sx={{ fontSize: "3rem" }}>
                  {detail.icon}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {detail.title}
                </Typography>
                {detail.details.map((info, idx) => (
                  <Typography key={idx} sx={{ fontSize: "1rem", mb: 0.5 }}>
                    {info}
                  </Typography>
                ))}
              </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;
