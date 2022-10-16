import React from 'react';

import '../styles/Header.css';

import Logo from '../assets/logos/logo.png';
import Home from '../assets/icons/home.svg'
import People from '../assets/icons/people.svg'
import Phone from '../assets/icons/phone.svg'
import BookMark from '../assets/icons/bookmark.svg'
import Menu from '../assets/icons/menu.svg'

export function Header() {

    return (
        <nav class="navbar navbar-dark bg-white" id="nav">
            <div class="container-fluid">
            <img src={Logo} alt="logo" className="fivestars" />
            <img src={Menu} alt="Menu Bar" id='menu' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false"/>
                <div class="collapse navbar-collapse" id="navbarsExample01">
                    <ul class="navbar-nav me-auto mb-2 bg-dark" >
                        <li className="nav-item">
                        <img src={Home} alt="Home" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item" id="item-list">
                        <img src={People} alt="Booking" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link" href="#booking">Booking</a>
                        </li>
                        <li class="nav-item">
                        <img src={BookMark} alt="Our Services" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link" href="#service">Our Services</a>
                        </li>
                        <li class="nav-item">
                        <img src={Home} alt="Comments" className='icon-list-menu'/>    
                            <a id="list-item" class="nav-link" href="#ratings">Comments</a>
                        </li>
                        <li class="nav-item">
                        <img src={Phone} alt="Contact Us" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

