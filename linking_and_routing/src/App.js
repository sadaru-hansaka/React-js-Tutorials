import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <div>
      <div className='navBar'>
        <Link to="/">HomePage</Link>
        <Link to="/about-me">AboutMe</Link>
        <Link to="/contact-me">Contact Me</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/contact-me' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
