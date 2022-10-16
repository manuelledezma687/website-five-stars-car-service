import React from 'react';

import '../styles/Services.css';

import car from '../assets/icons/car.png';
import airplane from '../assets/icons/aero.png';
import city from '../assets/icons/city.png';

export function Services() {
  return (
    <section id="service" className="service-main">
      <h1 className="services-title">Services</h1>
      <div className="service-list" >
        <div className="service-box" >
          <img src={city} id="image-service" alt="car" />
          <h2 class="card-title" id="service-title">Stroll through the city</h2>
          <p class="card-text" id="p-service">If you come for a walk with your family, or simply want to make a delivery or process, our service by hour or distance is the solution.</p>
        </div>
        <div clasNames="service-box" >
          <img src={airplane} id="image-service" alt="airplane" />
          <h2 class="card-title" id="service-title">Transfer on time and safely</h2>
          <p class="card-text" id="p-service">At FiveStar we offer you punctuality, security and trust, for your transfers from the airport to your meeting point.</p>
        </div>
        <div className="service-box" >
          <img src={car} id="image-service" alt="car" />
          <h2 class="card-title" id="service-title">Top cars and drivers</h2>
          <p class="card-text" id="p-service">We are known for providing you with a quality service, all our cars go to the service every 15 days, to check their operation. Each driver goes through company filters and we value the qualifications on each trip to offer quality service.</p>
        </div>
      </div>
    </section>
  );
}