import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';





const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <Routes>
          <Route path="/"  element={<HomePage   /> } />
          <Route path="/services" element={<ServicesPage  /> }/>
          <Route path="/explore"  element={<AboutPage /> } />
          <Route path="/get in touch" element={<ContactPage  />  } />
        </Routes>
        <Footer/>


    </div>
  )
}

export default App