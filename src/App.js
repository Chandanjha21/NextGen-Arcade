import React from 'react';
import Header from './COMPONENTS/Header'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import About from './COMPONENTS/About';
import Home from './COMPONENTS/Home';
import Services from './COMPONENTS/Services';
import Contact from './COMPONENTS/Contact';
import Upload from './COMPONENTS/Upload';
import Footer from './COMPONENTS/Footer'
import Videos from './COMPONENTS/Videos'
import Login from './COMPONENTS/Login'
import Signup from './COMPONENTS/Signup'


function App() {
  return (
    <Router>
   <Header/>
      <Routes>
        
        <Route path = "/" element={<Home/>} />
        <Route path = "/aboutus" element={<About/>} />
        <Route path = "/contact" element={<Contact/>} />
        <Route path = "/services" element={<Services/>} />
        <Route path = "/upload" element={<Upload/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
