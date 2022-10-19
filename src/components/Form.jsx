import React from 'react';
import { motion } from "framer-motion"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import sendBookingForm from '../hooks/sendBookingForm';

import '../styles/Form.css';

const Form = () => {

	const form = sendBookingForm();

    return (
        <div className='main-form' id='booking'>
            <motion.h1
                whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    fixed: 0
                }}
                className='title'>Quote your trip and book with us, to live the <span> best experience.</span>&nbsp;Just in time with <span>FiveStars.</span></motion.h1>
            <form class="p-4 p-md-5 border rounded-3 needs-validation" id='form' method="post" action="">

                <div class="row" id='google'>
                    <label htmlFor="" id='label-google'>Pick Up</label>
                    <GooglePlacesAutocomplete apikey="AIzaSyCW8RbW836MOX6bO0aCh56ptNLqurt4vYg" type="text" placeholder="pick_up_location" required
                        name="pick_up" maxLength="100" />
                    <label htmlFor="" id='label-google'>Destiny</label>
                    <GooglePlacesAutocomplete apikey="AIzaSyCW8RbW836MOX6bO0aCh56ptNLqurt4vYg" type="text" class="form-control" id="drop_off_location" placeholder="Drop Off" required
                        name="destiny" maxLength="50" />
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <input type="text" class="form-control" id="full_name" placeholder="Full Name" required
                            name="full_name" maxLength="50" />
                    </div>
                    <div class="col input-btn-padding-x mb-3">
                        <input type="email" class="form-control" id="email" placeholder="youremail@example.com"
                            required name="email" maxLength="50" />
                    </div>
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <input type="time" class="form-control" id="hour" placeholder="hour" required
                            name="date_time" />
                    </div>
                    <div class="col input-btn-padding-x mb-3">
                        <input type="date" class="form-control" id="date" placeholder="Date" required
                            name="date" />
                    </div>
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <input type="text" class="form-control" id="flight_id" placeholder="Fight Number" required
                            name="flight" maxLength="20" />
                    </div>
                    <div class="col input-btn-padding-x mb-3">
                        <select class="form-select" placeholder="payment method" id='payment_method'required name="payment_method"
                            maxLength="12">
                            <option selected disabled value="">Payment Method</option>
                            <option value="cash">Cash</option>
                            <option value="paypal">Zelle</option>
                        </select>
                    </div>
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <div id="passengers-list">
                            <select type="text" class="form-select" id="passengers" placeholder="passengers" required
                                name="passengers">
                                <option selected disabled value="">Passengers</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                    </div>
                    <div class="row input-btn-padding-x mb-3">
                        <input type="text" class="form-control" id="observations" placeholder="observations" required
                            name="observations" maxLength="100" />
                    </div>
                    <div class="row input-btn-padding-x mb-3">
                        <select class="form-select" id="type_of_travel"placeholder="type of travel" required name="type_of_travel"
                            maxLength="12">
                            <option selected disabled >Type of Service</option>
                            <option value="hourly">Hourly</option>
                            <option value="way">One way</option>
                        </select>
                    </div>
                </div>
                <button id="button" class="w-100 btn btn-lg btn-primary" type="submit">Book your Trip</button>
                <hr class="my-4" />
                <small class="text-muted">By clicking Your Booking, you agree to the terms of use.</small>
            </form>
        </div>
    );
}
export default Form;

