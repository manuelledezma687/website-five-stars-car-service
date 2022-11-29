import React from 'react';

import '../styles/Carrousel.css';

import camry from '../assets/img-slider/camry.jpg';
import corolla from '../assets/img-slider/corolla.jpg';
import chevrolet from '../assets/img-slider/chevrolet.jpg';

export function Carrousel() {

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={camry} className="d-block w-100" alt="Tooyota Camry" />
                </div>
                <div className="carousel-item">
                    <img src={corolla} className="d-block w-100" alt="Toyota Corolla" />
                </div>
                <div className="carousel-item">
                    <img src={chevrolet} className="d-block w-100" alt="Chevrolet" />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}