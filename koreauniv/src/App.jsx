import './App.css'; // navBar를 위한 import
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ScrollToTop from './components/scrolltop/ScrollToTop';

// pages폴더 import
import Home from './pages/home/home';
import Courses from './pages/courses/courses';
import People from './pages/people/people'; // Member → People로 변경
import Publications from './pages/publications/publications';
import Research from './pages/research/research';

import ProjectDetail3 from './pages/home/projects/project3/projectDetail3';

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/people" element={<People />} /> {/* /members → /people로 변경 */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/research" element={<Research />} />
        <Route path="/project3" element={<ProjectDetail3 />} />
      </Routes>
    </>
  )
}

export default App