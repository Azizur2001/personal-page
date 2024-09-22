import React, { useState, useRef } from 'react';
import { Box, Typography, Button, TextField, Grid, Container, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import useInView for scroll trigger
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hook to observe when the section comes into view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sd5szqp', 'template_1pwj4km', form.current, 'VshxAyZ4uRBYk-xRN')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setMessageSent(true);
        setErrorMessage('');
      }, (error) => {
        console.log('FAILED...', error);
        setErrorMessage('Failed to send message, please try again.');
      });
  };

  return (
    <Container 
      id="contact" 
      ref={ref} 
      sx={{ 
        maxWidth: { xs: '100%', sm: '90%', md: '1200px' }, // Adjusted for responsiveness
        margin: '0 auto', 
        padding: { xs: '50px 10px', md: '100px 20px' }, // Responsive padding for mobile, tablet, and desktop
        textAlign: 'center' 
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 }, fontSize: { xs: '2.5rem', md: '3rem' } }}>
          <span style={{ color: '#e53935' }}>Contact</span> Me
        </Typography>
      </Fade>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Fade in={inView} timeout={1500}>
            <form ref={form} onSubmit={sendEmail}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  name="from_name"
                  fullWidth
                  required
                  sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} // Responsive text size for input
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  name="email_id"
                  type="email"
                  fullWidth
                  required
                  sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} // Responsive text size for input
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  name="message"
                  multiline
                  rows={6}
                  fullWidth
                  required
                  sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} // Responsive text size for textarea
                />
                {messageSent && (
                  <Typography sx={{ color: 'green', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    Your message has been sent successfully!
                  </Typography>
                )}
                {errorMessage && (
                  <Typography sx={{ color: 'red', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    {errorMessage}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: '#e53935',
                    color: 'white',
                    padding: { xs: '8px 20px', md: '10px 30px' }, // Responsive button padding
                    fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#d32f2f',
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
    </Container>
  );
};

export default Contact;
