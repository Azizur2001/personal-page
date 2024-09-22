import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Grow, Fade } from '@mui/material';
import profileImage from '../images/aziz.png'; // Importing the image

const About = () => {
  const [imageInView, setImageInView] = useState(false);
  const [textInView, setTextInView] = useState(false);
  const sectionRef = useRef(null); // Ref to track the section visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animations once the section is visible
            setImageInView(true);
            setTextInView(true);
            observer.unobserve(entry.target); // Stop observing once the animation has been triggered
          }
        });
      },
      { threshold: 0.3 } // Adjust the threshold value (0.3 means 30% of the section should be visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container 
      id="about" 
      ref={sectionRef} 
      sx={{ 
        maxWidth: { xs: '100%', sm: '90%', md: '1200px' }, // Responsive container width
        margin: '0 auto', 
        padding: { xs: '50px 10px', md: '100px 20px' }, // Responsive padding
        textAlign: 'center' 
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column-reverse', md: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}
      >
        
        {/* Left Side - Image with Grow Animation */}
        <Grow in={imageInView} timeout={1000}>
          <div> {/* Wrapping in a div to ensure valid child for Grow */}
            <Box sx={{ position: 'relative', display: 'inline-block', mb: { xs: 4, md: 0 }, width: { xs: '80%', md: '100%' } }}>
              <img
                src={profileImage} // Using the imported image
                alt="Profile"
                style={{ width: '100%', border: '10px solid white', position: 'relative' }}
              />
              {/* Red Border after the image */}
              <Box
                sx={{
                  content: '""',
                  position: 'absolute',
                  left: { xs: '-20px', md: '-45px' }, // Adjusted for smaller screens
                  top: { xs: '15px', md: '34px' },
                  height: '98%',
                  width: '98%',
                  border: '7px solid crimson',
                  zIndex: -1,
                }}
              />
            </Box>
          </div>
        </Grow>

        {/* Right Side - Text Content with Fade Animation */}
        <Fade in={textInView} timeout={1500}>
          <div> {/* Wrapping in a div to ensure valid child for Fade */}
            <Box 
              sx={{ 
                maxWidth: '600px', 
                ml: { xs: 0, md: 5 }, 
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 4, md: 0 } // Adjust margin for better spacing on mobile
              }}
            >
              <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
                About <Box component="span" sx={{ color: '#e53935' }}>Me</Box>
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', my: 2 }}>
                Front End Developer
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque repellat ratione qui veritatis repudiandae adipisci maiores.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt reprehenderit libero enim!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: '#e53935',
                  borderColor: '#e53935',
                  padding: { xs: '8px 20px', md: '10px 30px' }, // Responsive padding for button
                  fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
                  fontWeight: 'bold',
                  mt: 3,
                  '&:hover': {
                    borderColor: '#333',
                    color: '#333',
                  },
                }}
                href="/Azizurresume.pdf"
                download
              >
                Download Resume
              </Button>
            </Box>
          </div>
        </Fade>
      </Box>
    </Container>
  );
};

export default About;
