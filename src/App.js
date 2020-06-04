import React from 'react';
import Banner from './Component/Banner';
import About from './Component/About';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Testimonial from './Component/Testimonial';
import Portfolio from './Component/Portfolio';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/Css/Responsive.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner/>
            <About/>
            <Portfolio/>
            <Testimonial/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
