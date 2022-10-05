import React from 'react';
import { motion } from "framer-motion";
import car from '../assets/icons/car.png';
import airplane from '../assets/icons/airplane.png';
import city from '../assets/icons/city.png';
import '../styles/Services.css';

const Services = () => {
    return (
        <section className='service-main'>
            <h1 className="services">Services</h1>
            <div className="service-list" >
                <div className="container-service">
                    <motion.img
                        whileHover={{
                            scale: 1.1,
                        }} src={city} id="image-service" alt="car" />
                    <h2 className='service-title'>Stroll through the city</h2>
                    <p className='p-service'>If you come for a walk with your family, or simply want to make a delivery or process, our service by hour or distance is the solution.</p>
                </div>
                <div className="container-service">
                    <motion.img
                        whileHover={{
                            scale: 1.1,
                        }} src={car} id="image-service" alt="car" />
                    <h2 className='service-title'>Top cars and drivers</h2>
                    <p className='p-service'>We are known for providing you with a quality service, all our cars go to the service every 15 days, to check their operation. Each driver goes through company filters and we value the qualifications on each trip to offer quality service.</p>
                </div>
                <div className="container-service">
                    <motion.img
                        whileHover={{
                            scale: 1.1,
                        }} src={airplane} id="image-service" alt="car" />
                    <h2 className='service-title'>Transfer on time and safely</h2>
                    <p className='p-service'>At FiveStar we offer you punctuality, security and trust, for your transfers from the airport to your meeting point.</p>
                </div>
                <div className="container-service">
                    <motion.img
                        whileHover={{
                            scale: 1.1,
                        }} src={car} id="image-service" alt="car" />
                    <h2 className='service-title'>Stroll through the city</h2>
                    <p className='p-service'>Con nuestro codigo de bienvenida obten un 20% de descuento en tu viaje.</p>
                </div>
            </div>
        </section>
    );
}
export default Services;