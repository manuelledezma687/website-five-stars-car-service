import React from "react";
import { HeaderSecondary } from '../components/HeaderSecondary';
import { Footer } from '../components/Footer';
import Ok from '../assets/icons/okay.png'

import "../styles/NotFound.css";

export function Success() {

    return (
        <><HeaderSecondary />
        <section id="not-found">
        <img src={Ok} alt="Ok" className="logo-ok"/>
        <p className="success">Your booking was registered successfully</p>
        </section><Footer /></>
    );
}