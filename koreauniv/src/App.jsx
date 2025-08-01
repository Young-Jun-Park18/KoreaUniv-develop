import './App.css'; // navBar를 위한 import
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ScrollToTop from './components/scrolltop/ScrollToTop';

// pages폴더 import
import Home from './pages/home/home';
import Courses from './pages/courses/courses';
import Member from './pages/member/member';
import Publications from './pages/publications/publications';
import Research from './pages/research/research';

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/members" element={<Member />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </>
  )
}

export default App