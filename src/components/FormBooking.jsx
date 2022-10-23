import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from "axios";

import '../styles/Form.css';
import '../styles/Contact.css';

const API_KEY = "AIzaSyCW8RbW836MOX6bO0aCh56ptNLqurt4vYg"

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
    const [type_of_service, setTypeOfService] = useState('')
    const [formSent, changeFormSent] = useState(false)

    return (
        <div className='main-form' id='booking'>
            <motion.h1
                whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    fixed: 0
                }}
                className='title'>Quote your trip and book with us, to live the <span> best experience.</span>&nbsp;Just in time with <span>FiveStars.</span></motion.h1>

            <Formik
                initialValues={{
                    // pick_up_location: '',
                    // drop_off_location: '',
                    full_name: '',
                    email: '',
                    hour: '',
                    date: '',
                    flight_id: '',
                    payment_method: '',
                    passengers: '',
                    observations: '',
                    type_of_service: ''
                }}
                validate={(values) => {
                    let errors = {};
                    if (!values.full_name) {
                        errors.full_name = 'Please type your name'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.full_name)) {
                        errors.full_name = 'The name must be contain only letters or characters'
                    }
                    if (!values.email) {
                        errors.email = 'Please type your e-mail'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        errors.email = 'This email is invalid'
                    }
                    if (!values.hour) {
                        errors.hour = 'Please type an hour'
                    }
                    if (!values.date) {
                        errors.date = 'Please type a date'
                    }
                    if (!values.flight_id) {
                        errors.flight_id = 'Please type your flight ID'
                    }
                    if (!values.payment_method) {
                        errors.payment_method = 'Please type your payment'
                    }
                    if (!values.passengers) {
                        errors.passengers = 'Please select a number'
                    }
                    if (!values.observations) {
                        errors.observations = 'If you don{t have a observation please type NONE'
                    }
                    if (!values.type_of_service) {
                        errors.type_of_service = 'Please select a type of service'
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    resetForm();
                    console.log('Form sent');
                    changeFormSent(true);
                    setTimeout(() => changeFormSent(false), 2000);
                }}
            >
                {({ errors }) => (
                    <Form class="p-4 p-md-5 border rounded-3" id='form' method="post" >
                        <div class="row" id='google'>
                            <label htmlFor="" id='label-google'>Pick Up</label>
                            <GooglePlacesAutocomplete apikey={API_KEY} selectProps={{ pick_up_location, onChange: setPickUpLocation, isClearable: true, placeholder: "Select your address" }} />
                            <label htmlFor="" id='label-google'>Destiny</label>
                            <GooglePlacesAutocomplete apikey={API_KEY} selectProps={{ drop_off_location, onChange: setDropOff, isClearable: true, placeholder: "Select your address" }} />
                        </div>
                        <div class="row" id="double-input">
                            <div class="col input-btn-padding-x mb-3">
                                <Field
                                    type="text"
                                    class="form-control"
                                    value={full_name} onChange={(e) => setFullName(e.target.value)}
                                    id="full_name"
                                    placeholder="Full Name"
                                    name="full_name"
                                    maxLength="50"
                                />
                                <ErrorMessage name="full_name" component={() => (<div className="booking-error">{errors.full_name}</div>)} />
                            </div>
                            <div class="col input-btn-padding-x mb-3">
                                <Field
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    placeholder="youremail@example.com"
                                    name="email"
                                    maxLength="50" />
                                <ErrorMessage name="email" component={() => (<div className="booking-error">{errors.email}</div>)} />
                            </div>
                        </div>
                        <div class="row" id="double-input">
                            <div class="col input-btn-padding-x mb-3">
                                <Field
                                    type="time"
                                    class="form-control"
                                    id="hour"
                                    value={hour} onChange={(e) => setHour(e.target.value)}
                                    placeholder="hour"
                                    name="date_time"
                                />
                                <ErrorMessage name="hour" component={() => (<div className="booking-error">{errors.hour}</div>)} />
                            </div>
                            <div class="col input-btn-padding-x mb-3">
                                <Field
                                    type="date"
                                    class="form-control"
                                    id="date"
                                    value={date} onChange={(e) => setDate(e.target.value)}
                                    placeholder="Date"
                                    name="date"
                                />
                                <ErrorMessage name="date" component={() => (<div className="booking-error">{errors.date}</div>)} />
                            </div>
                        </div>
                        <div class="row" id="double-input">
                            <div class="col input-btn-padding-x mb-3">
                                <Field
                                    type="text"
                                    class="form-control"
                                    id="flight_id"
                                    value={flight_id} onChange={(e) => setFlightId(e.target.value)}
                                    placeholder="Flight Number"
                                    name="flight"
                                    maxLength="20"
                                />
                                <ErrorMessage name="flight_id" component={() => (<div className="booking-error">{errors.flight_id}</div>)} />
                            </div>
                            <div class="col input-btn-padding-x mb-3">
                                <Field
                                    as="select"
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
                                </Field>
                                <ErrorMessage name="payment_method" component={() => (<div className="booking-error">{errors.payment_method}</div>)} />
                            </div>
                        </div>
                        <div class="row" id="double-input">
                            <div class="col input-btn-padding-x mb-3">
                                <div id="passengers-list">
                                    <Field
                                        as="select"
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
                                    </Field>
                                    <ErrorMessage name="passengers" component={() => (<div className="booking-error">{errors.passengers}</div>)} />
                                </div>
                            </div>
                            <div class="row input-btn-padding-x mb-3">
                                <Field
                                    type="text"
                                    class="form-control"
                                    id="observations"
                                    value={observations} onChange={(e) => setObservations(e.target.value)}
                                    placeholder="observations"
                                    name="observations"
                                    maxLength="100"
                                />
                                <ErrorMessage name="observations" component={() => (<div className="booking-error">{errors.observations}</div>)} />
                            </div>
                            <div class="row input-btn-padding-x mb-3">
                                <Field
                                    as="select"
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
                                </Field>
                                <ErrorMessage name="type_of_service" component={() => (<div className="booking-error">{errors.type_of_service}</div>)} />
                            </div>
                        </div>
                        <button id="button" class="w-100 btn btn-lg btn-primary" type="submit">Book your Trip</button>
                        {formSent && <p className="exito">Form sent succesfull!</p>}
                        <hr class="my-4" />
                        <small class="text-muted">By clicking Your Booking, you agree to the terms of use.</small>
                    </Form>
                )}

            </Formik>
        </div>
    );
}
