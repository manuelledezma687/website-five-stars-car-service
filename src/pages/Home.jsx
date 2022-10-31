import React from "react";
import CookieConsent from "react-cookie-consent";

import '../styles/global.css';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Carrousel } from "../components/Carrousel";
import RatingContainer from '../containers/RatingContainer';


export function Home(){

    return(
        <><Header />
        <CookieConsent debug={false} style={{fontFamily: 'Poppins', fontSize: "1rem"}}>
        In accordance with the law and in action with our <a href="/privacy">privacy section</a> , we proceed to request your authorization to use cookies on our site
        </CookieConsent>
        <Hero /><Carrousel /><Services /><RatingContainer /><Contact /><Footer /></>
    );

}


