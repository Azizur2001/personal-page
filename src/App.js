// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Services from './components/Services';
// import Projects from './components/Projects';
// import About from './components/About';
// import Contact from './components/Contact';

// const App = () => {
//   return (
//     <Router>
//       <div style={{ overflowX: 'hidden' }}>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';



const App = () => {
  return (
    <Router>
      <div style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }}>
        <Navbar />
        {/* Single Page Rendering for all sections */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <Skills />
                <Projects />
                <Contact />

              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
