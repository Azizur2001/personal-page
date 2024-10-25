import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import JavaScriptIcon from "../images/react.png";
import JavaIcon from "../images/java.png";
import PythonIcon from "../images/python.png";
import ReactIcon from "../images/react.png";
import MaterialUIIcon from "../images/MaterialUI.png";
import HTMLIcon from "../images/html5.png";
import CSSIcon from "../images/css.png";
import MongoDBIcon from "../images/MongoDB.png";
import NodeIcon from "../images/node.png";
import SQLIcon from "../images/sql.png";
import FirebaseIcon from "../images/firebase.png";
import GitIcon from "../images/Git.png";
import PineconeIcon from "../images/pinecone.png";
import NextJSIcon from "../images/next.png";

// Array of skills with icons and labels
const skills = [
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Python", icon: PythonIcon },
  { name: "React", icon: ReactIcon },
  { name: "Material UI", icon: MaterialUIIcon },
  { name: "Pinecone", icon: PineconeIcon },
  { name: "NextJS", icon: NextJSIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Node", icon: NodeIcon },
  { name: "SQL", icon: SQLIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Git", icon: GitIcon },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 6 }}>
        <span style={{ color: "#e53935" }}>Skills</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} md={3} key={index} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={skill.icon}
              alt={skill.name}
              sx={{ width: "80px", height: "80px", mb: 2 }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#e53935" }}
            >
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
