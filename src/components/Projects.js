// import React from 'react';
// import { Box, Grid, Typography, Container, Slide } from '@mui/material';
// import { useInView } from 'react-intersection-observer'; // Import useInView

// const projects = [
//   {
//     title: "Project 1",
//     subtitle: "AI Rate My Professor",
//     description: "This project features an AI-powered system providing seamless professor recommendations through a fully functional Retrieval-Augmented Generation (RAG) system. It leverages Next.js, Pinecone, and OpenAI APIs to enhance user decision-making. Additionally, it implements Firebase Authentication for secure and efficient user management, while Material UI ensures a polished, responsive user experience.",
//     image: "/path-to-your-image.jpg", 
//     githubLink: "https://github.com/your-repo-url" // Add your GitHub link here

//   },
//   {
//     title: "Project 2",
//     subtitle: "Coding is Love",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum...",
//     image: "/path-to-your-image.jpg", 
//   },
//   {
//     title: "Project 3",
//     subtitle: "Coding is Love",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum...",
//     image: "/path-to-your-image.jpg", 
//   },
// ];

// const Projects = () => {
//   // Hook to observe when the section comes into view
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <Container id="projects" ref={ref} sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 0 } }}>
//       <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 4, md: 6 }, fontSize: { xs: '2rem', md: '3rem' } }}>
//         RECENT <span style={{ color: '#e53935' }}>PROJECTS</span>
//       </Typography>

//       {projects.map((project, index) => (
//         <Grid 
//           container 
//           spacing={5} 
//           sx={{ mb: { xs: 6, md: 10 } }} 
//           key={index} 
//           alignItems="center"
//         >
//           {/* Text Content */}
//           <Slide direction={index % 2 === 0 ? 'right' : 'left'} in={inView} timeout={1000}>
//             <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
//               <Box 
//                 sx={{ 
//                   p: { xs: 2, md: 3 }, 
//                   backgroundColor: '#2c3e50', 
//                   color: '#fff',
//                   textAlign: { xs: 'center', md: 'left' }
//                 }}
//               >
//                 <Typography 
//                   variant="h4" 
//                   sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}
//                 >
//                   {project.title}
//                 </Typography>
//                 <Typography 
//                   variant="h6" 
//                   sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.2rem' } }}
//                 >
//                   {project.subtitle}
//                 </Typography>
//                 <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
//                   {project.description}
//                 </Typography>
//               </Box>
//             </Grid>
//           </Slide>

//           {/* Image Content */}
//           <Slide direction={index % 2 === 0 ? 'left' : 'right'} in={inView} timeout={1000}>
//             <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
//               <Box
//                 sx={{
//                   backgroundImage: `url(${project.image})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   height: { xs: '200px', md: '300px' },
//                   borderRadius: '8px'
//                 }}
//               />
//             </Grid>
//           </Slide>
//         </Grid>
//       ))}
//     </Container>
//   );
// };

// export default Projects;



import React from 'react';
import { Box, Grid, Typography, Container, Slide, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import useInView

const projects = [
  {
    title: "Project 1",
    subtitle: "AI Rate My Professor",
    description: "This project features an AI-powered system providing seamless professor recommendations through a fully functional Retrieval-Augmented Generation (RAG) system. It leverages Next.js, Pinecone, and OpenAI APIs to enhance user decision-making. Additionally, it implements Firebase Authentication for secure and efficient user management, while Material UI ensures a polished, responsive user experience.",
    image: "/path-to-your-image.jpg", 
    githubLink: "https://github.com/Azizur2001/ai-rate-my-professor", // Add your GitHub link here
  },
  {
    title: "Project 2",
    subtitle: "AI Flashcards Application",
    description: "This project provides seamless user authentication and payment integration by using Firebase for user authentication and Stripe for payment processing. Built with Next.js and Material UI, it offers a secure and intuitive user experience. The flashcard creation process is automated through OpenAI's LLMs and API, allowing users to generate study-friendly flashcards from complex text efficiently.",
    image: "/path-to-your-image.jpg", 
    githubLink: "https://github.com/Azizur2001/ai-flashcards",
  },
  {
    title: "Project 3",
    subtitle: "Full-stack Social Media Application",
    description: "Developed a fullstack social media application using React for the frontend and Firebase for the backend. The app features real-time data updates, secure user authentication, and a responsive design built with ChakraUI. Integrated React hooks and Context API for state management, with Firebase handling database management and notifications. The application was deployed on a cloud platform ensuring scalability and high availability.",
    image: "/path-to-your-image.jpg", 
    githubLink: "https://github.com/Azizur2001/social-media-app",
  },
];

const Projects = () => {
  // Hook to observe when the section comes into view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container id="projects" ref={ref} sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 0 } }}>
      <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 4, md: 6 }, fontSize: { xs: '2rem', md: '3rem' } }}>
        RECENT <span style={{ color: '#e53935' }}>PROJECTS</span>
      </Typography>

      {projects.map((project, index) => (
        <Grid 
          container 
          spacing={5} 
          sx={{ mb: { xs: 6, md: 10 } }} 
          key={index} 
          alignItems="center"
        >
          {/* Text Content */}
          <Slide direction={index % 2 === 0 ? 'right' : 'left'} in={inView} timeout={1000}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
              <Box 
                sx={{ 
                  p: { xs: 2, md: 3 }, 
                  backgroundColor: '#2c3e50', 
                  color: '#fff',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.2rem' } }}
                >
                  {project.subtitle}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {project.description}
                </Typography>

                {/* GitHub Button */}
                <Button
                  variant="outlined"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    mt: 3, 
                    borderColor: '#e53935', 
                    color: '#e53935', 
                    '&:hover': {
                      borderColor: '#ffffff',
                      color: '#ffffff',
                    }
                  }}
                >
                  View on GitHub
                </Button>
              </Box>
            </Grid>
          </Slide>

          {/* Image Content */}
          <Slide direction={index % 2 === 0 ? 'left' : 'right'} in={inView} timeout={1000}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
              <Box
                sx={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: { xs: '200px', md: '300px' },
                  borderRadius: '8px'
                }}
              />
            </Grid>
          </Slide>
        </Grid>
      ))}
    </Container>
  );
};

export default Projects;
