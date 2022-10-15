import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RatingMock from './components/RatingMock';
import {Footer} from './components/Footer';
import './styles/global.css'
import Contact from './components/Contact';
import Carrousel from "./components/Carrousel";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header/>
    <Hero/>
    <Carrousel/>
    <Services/>
    <RatingMock/>
    <Contact/>
    <Footer/>
    </React.StrictMode>

);