import React from 'react';
import { motion } from "framer-motion";

import '../styles/Hero.css';

import corolla from '../assets/images/white-corolla.png';
import { FormBooking } from '../components/FormBooking';

export function Hero() {
    return (
        <section className="hero-container">
            <div className='hero-banner'>
                <div className='content-box'>
                    <p className='main-message'>If you travel to Atlanta for pleasure or business, FiveStar Car service helps you
                        move around the City comfortably and safely 24 hours a day.</p>
                    <h1 className='just-time'>Just in time with&nbsp;<span> FiveStars.</span></h1>
                </div>
                <motion.img
                    whileHover={{
                        x: 20,
                        y: 20,
                        scale: 1.1,
                        rotate: 0,
                        fixed: 0
                    }}
                    src={corolla} alt="Toyota Corolla" className="white-corolla" />
            </div>
            <FormBooking />
        </section>

    );
}
