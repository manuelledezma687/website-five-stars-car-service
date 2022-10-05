import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logos/logo.png';
import Home from '../assets/icons/home.svg'
import People from '../assets/icons/people.svg'
import Phone from '../assets/icons/phone.svg'
import BookMark from '../assets/icons/bookmark.svg'
import menu from '../assets/icons/menu.svg'

const Header = () => {

    return (
        <nav class="navbar navbar-dark bg-white" id="nav">
            <div class="container-fluid">
            <img src={logo} alt="logo" className="fivestars" />
            <img src={menu} alt="Menu Bar" id='menu' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false"/>
                <div class="collapse navbar-collapse" id="navbarsExample01">
                    <ul class="navbar-nav me-auto mb-2 bg-dark" >
                        <li className="nav-item">
                        <img src={Home} alt="Home" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item" id="item-list">
                        <img src={People} alt="Booking" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link" href="#">Booking</a>
                        </li>
                        <li class="nav-item">
                        <img src={BookMark} alt="Our Services" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link" href="#">Our Services</a>
                        </li>
                        <li class="nav-item">
                        <img src={Home} alt="Comments" className='icon-list-menu'/>    
                            <a id="list-item" class="nav-link" href="#">Comments</a>
                        </li>
                        <li class="nav-item">
                        <img src={Phone} alt="Contact Us" className='icon-list-menu'/>
                            <a id="list-item" class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;
