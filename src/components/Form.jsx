import React from 'react';
import '../styles/Form.css';
import pointer from '../assets/icons/point.svg';
import calendar from '../assets/icons/calendar.svg';
import time from '../assets/icons/clock.svg';
import { motion } from "framer-motion"


const Form = () => {
    return (
        <div className='main-form' id='booking'>
            <motion.h1
                whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    fixed: 0
                }}
                className='title'>Quote your trip and book with us, to live the <span> best experience.</span>Just in time with <span>FiveStars.</span></motion.h1>
            <form class="p-4 p-md-5 border rounded-3" id='form'>
                <div id='double-input'>
                <div class="input-btn-padding-x mb-3" id='input-form'>
                     <img src={pointer} className="icon" alt="Pick Up" />
                    <input type="text" class="form-control" id="floatingInput" placeholder="Address Airport" />
                </div>
                <div class="input-btn-padding-x mb-3"id='input-form'>
                <img src={pointer} className="icon" alt="Drop Off" />
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Location" />
                </div>
                </div>
                <div class="input-btn-padding-x mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Full Name" />
                </div>
                <div class="input-btn-padding-x mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="youremail@example.com" />
                </div>
                <div class="input-btn-padding-x mb-3">
                    <input type="date" class="form-control" id="floatingInput" placeholder="Date" />
                </div>
                <div class="input-btn-padding-x mb-3">
                    <input type="time" class="form-control" id="floatingInput" placeholder="hour" />
                </div>
                <div class="input-btn-padding-x mb-3">                    
                    <select class="form-select" placeholder="payment method">
                    <option value="cash">Cash</option>
                    <option value="paypal">Paypal</option>
                    <label for="floatingInput">Payment Method</label>
                    </select>
                </div>
                <button id="button" class="w-100 btn btn-lg btn-primary" type="submit">Book your Trip</button>
                <hr class="my-4" />
                <small class="text-muted">By clicking Your Booking, you agree to the terms of use.</small>
            </form>
        </div>
    );
}
export default Form;

