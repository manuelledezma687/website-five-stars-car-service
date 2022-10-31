import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from "axios";

import '../styles/Form.css';
import '../styles/Contact.css';


const API_KEY = import.meta.env.API_KEY_GOOGLE

export function FormBooking() {

    const postData = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/bookings", {
            pick_up_location,
            drop_off_location,
            full_name,
            email,
            hour,
            date,
            flight_id,
            payment_method,
            passengers,
            observations,
            referrals,
            type_of_service
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
    }

    const [pick_up_location, setPickUpLocation] = useState('')
    const [drop_off_location, setDropOff] = useState('')
    const [full_name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [hour, setHour] = useState('')
    const [date, setDate] = useState('')
    const [flight_id, setFlightId] = useState('')
    const [payment_method, setPaymentMethod] = useState('')
    const [passengers, setPassengers] = useState('')
    const [observations, setObservations] = useState('')
    const [referrals, setReferrals] = useState('')
    const [type_of_service, setTypeOfService] = useState('')



    return (
        <div className='main-form' id='booking'>
            <motion.h1
                whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    fixed: 0
                }}
                className='title'>Quote your trip and book with us, to live the <span> best experience.</span>&nbsp;Just in time with <span>FiveStars.</span></motion.h1>


            <form class="p-4 p-md-5 border rounded-3" id='form' method="post" >
                <div class="row" id='google'>
                    <label htmlFor="" id='label-google'>Pick Up</label>
                    <GooglePlacesAutocomplete 
    selectProps={{ defaultInputValue:pick_up_location, onChange: setPickUpLocation, isClearable: true, placeholder: "Select your address" }} query={{ key: API_KEY }}
                        fetchDetails={true}
                        onFail={error => console.log(error)}/>
                    <label htmlFor="" id='label-google'>Destiny</label>
                    <GooglePlacesAutocomplete selectProps={{ defaultInputValue:drop_off_location, onChange: setDropOff, isClearable: true, placeholder: "Select your address" }} query={{ key: API_KEY }} 
                        
                        fetchDetails={true}
                        onFail={error => console.log(error)} />
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <input
                            type="text"
                            class="form-control"
                            value={full_name} onChange={(e) => setFullName(e.target.value)}
                            id="full_name"
                            placeholder="Full Name"
                            name="full_name"
                            maxLength="50"
                        />
                    </div>
                    <div class="col input-btn-padding-x mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="youremail@example.com"
                            name="email"
                            maxLength="50" />
                    </div>
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <input
                            type="time"
                            class="form-control"
                            id="hour"
                            value={hour} onChange={(e) => setHour(e.target.value)}
                            placeholder="hour"
                            name="date_time"
                        />
                    </div>
                    <div class="col input-btn-padding-x mb-3">
                        <input
                            type="date"
                            class="form-control"
                            id="date"
                            value={date} onChange={(e) => setDate(e.target.value)}
                            placeholder="Date"
                            name="date"
                        />
                    </div>
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="flight_id"
                            value={flight_id} onChange={(e) => setFlightId(e.target.value)}
                            placeholder="Flight Number"
                            name="flight"
                            maxLength="20"
                        />
                    </div>
                    <div class="col input-btn-padding-x mb-3">
                        <select
                            class="form-select"
                            placeholder="payment method"
                            id='payment_method'
                            value={payment_method} onChange={(e) => setPaymentMethod(e.target.value)}
                            name="payment_method"
                            maxLength="12"
                        >
                            <option selected disabled value="">Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Zelle">Zelle</option>
                        </select>
                    </div>
                </div>
                <div class="row" id="double-input">
                    <div class="col input-btn-padding-x mb-3">
                        <div id="passengers-list">
                            <select
                                type="text"
                                class="form-select"
                                id="passengers"
                                value={passengers} onChange={(e) => setPassengers(e.target.value)} placeholder="passengers"
                                name="passengers" >
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
                        <input
                            type="text"
                            class="form-control"
                            id="observations"
                            value={observations} onChange={(e) => setObservations(e.target.value)}
                            placeholder="observations"
                            name="observations"
                            maxLength="100"
                        />
                        
                    </div>
                    <div class="row input-btn-padding-x mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="referrals"
                            value={referrals} onChange={(e) => setReferrals(e.target.value)}
                            placeholder="Referral Corde 10% OFF DISCOUNT"
                            name="referrals"
                            maxLength="20"
                        />
                        
                    </div>
                    <div class="row input-btn-padding-x mb-3">
                        <select
                            type="text"
                            class="form-select"
                            id="type_of_service"
                            placeholder="type of service"
                            value={type_of_service} onChange={(e) => setTypeOfService(e.target.value)}
                            name="type_of_service"
                        >
                            <option selected disabled value="">Type of Service</option>
                            <option value="Hourly">Hourly</option>
                            <option value="One Way">One way</option>
                        </select>
                    </div>
                </div>
                <button id="button" onClick={postData} class="w-100 btn btn-lg btn-primary" type="submit">Book your Trip</button>
                <hr class="my-4" />
                <small class="text-muted">By clicking Your Booking, you agree to the terms of use.</small>
            </form>
        </div>
    );
}
