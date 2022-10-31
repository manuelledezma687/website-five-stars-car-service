import React from "react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import "../styles/NotFound.css";

export function NotFound() {

    return (
        <><Header />
        <section id="not-found">
        <h1 >404.</h1>
        <p>Sorry, page not Found....</p>
        </section><Footer /></>
    );
}