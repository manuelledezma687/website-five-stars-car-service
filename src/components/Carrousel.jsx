import React from 'react';

import '../styles/Carrousel.css';

import camry from '../assets/img-slider/camry.jpg';
import corolla from '../assets/img-slider/corolla.jpg';
import chevrolet from '../assets/img-slider/chevrolet.jpg';

export function Carrousel() {

    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={camry} class="d-block w-100" alt="Tooyota Camry" />
                </div>
                <div class="carousel-item">
                    <img src={corolla} class="d-block w-100" alt="Toyota Corolla" />
                </div>
                <div class="carousel-item">
                    <img src={chevrolet} class="d-block w-100" alt="Chevrolet" />
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}