import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RatingContainer from './containers/RatingContainer.jsx';
import {Footer} from './components/Footer';
import './styles/global.css'
import Contact from './components/Contact';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header/>
    <Hero/>
    <Services/>
    <RatingContainer/>
    <Contact/>
    <Footer/>
    </React.StrictMode>

);