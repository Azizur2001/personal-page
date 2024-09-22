import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import codingImage from '../images/coding.png'; // Import the image correctly
import { keyframes } from '@mui/system'; // For defining custom animations

// Define keyframes for reveal animation
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        backgroundImage: `url(${codingImage})`,
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Overlay for dark effect over background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay effect
          zIndex: -1,
        }}
      />

      {/* Reveal effect for each part of the text */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
          animation: `${slideUp} 1s ease-out`,
        }}
      >
        Hello,
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
          animation: `${slideUp} 1.5s ease-out`,
        }}
      >
        My Name is
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
          animation: `${slideUp} 2s ease-out`,
        }}
      >
        Azizur
      </Typography>

      {/* Button */}
      <Button
        variant="outlined"
        sx={{
          mt: 4,
          borderColor: '#e53935',
          color: '#e53935',
          zIndex: 1,
          padding: { xs: '8px 20px', md: '10px 30px' }, // Responsive padding
          fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
          animation: `${slideUp} 2.5s ease-out`,
          '&:hover': {
            borderColor: '#ffffff',
            color: '#ffffff',
          },
        }}
      >
        Portfolio
      </Button>
    </Box>
  );
};

export default HeroSection;
