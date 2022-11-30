import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import React from 'react';
import { motion } from "framer-motion";

import axios from "axios";

import '../styles/Form.css';
import '../styles/Contact.css';


class FormBooking extends React.Component {

    state = {
        pick_up_location:'',
        drop_off_location:'',
        full_name:'',
        email:'',
        hour:'',
        date_booking:'',
        flight_id:'',
        payment_method:'',
        passengers:'',
        observations:'',
        referrals:'',
        type_of_service:''
    }
   

    handleFormSubmit( event ) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('pick_up_location', this.state.pick_up_location)
        formData.append('drop_off_location', this.state.drop_off_location)
        formData.append('full_name', this.state.full_name)
        formData.append('email', this.state.email)
        formData.append('hour', this.state.hour)
        formData.append('date_booking', this.state.date_booking)
        formData.append('flight_id', this.state.flight_id)
        formData.append('payment_method', this.state.payment_method)
        formData.append('passengers', this.state.passengers)
        formData.append('observations', this.state.observations)
        formData.append('referrals', this.state.referrals)
        formData.append('type_of_service', this.state.type_of_service)

        axios({
            method: 'post',
            url: 'https://fivestarscarservice.com/bookings.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            console.log(response)
            alert('Congratulations, your booking was registered.');  
        })
        .catch(function (response) {
            console.log(response)
        });
    }
   
    render() {
      return (
        <div className='main-form' id='booking'>
            <motion.h1
                whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    fixed: 0
                }}
                className='title'>Quote your trip and book with us, to live the <span> best experience.</span>&nbsp;Just in time with <span>FiveStars.</span></motion.h1>


            <form className="p-4 p-md-5 border rounded-3" id='form' method="post">
                <div className="row" id='google'>
                <div className="row input-btn-padding-x mb-3">
                    <label htmlFor="" id='label-google'>Pick Up</label>
                    {/* <input
                            type="text"
                            className="form-control"
                            value={this.state.pick_up_location} onChange={e => this.setState({ pick_up_location: e.target.value })}
                            id="pick_up_location"
                            placeholder="Type Your Adress"
                            name="pick_up_location"
                            maxLength="50"
                        /> */}

                        <GooglePlacesAutocomplete
                            selectProps={{
                                onChange: (o) => {
                                    this.setState({ pick_up_location: o.label })
                                },
                                styles: {
                                    input: (provided, state) => ({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        color: '#212529',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        color: '#212529',
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                    }),
                                    singleValue: (provided, state) => ({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        color: '#212529',
                                    }),
                                    control: (provided, state) =>({
                                        ...provided,
                                        borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
                                        borderRadius:'0.375rem',
                                        boxShadow: state.isFocused ? '0 0 0 0.25rem rgb(172, 186, 189)' : '',
                                    }),
                                    container: (provided, state) =>({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        padding: '0',
                                        color: '#212529',
                                        borderColor: state.isSelected ? '#86b7fe' : '',
                                        boxShadow: state.isSelected ? '0 0 0 0.25rem rgb(172, 186, 189)' : '',
                                    }),
                                    placeholder: (provided, state) =>({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        color: '#212529',
                                    }),
                                },
                            }}
                            autocompletionRequest={{
                                componentRestrictions: {
                                    country: ['us']
                                }
                            }}
                        />
                    </div>
                    <div className="row input-btn-padding-x mb-3">
                    <label htmlFor="" id='label-google'>Destiny</label>
                    {/* <input
                            type="text"
                            className="form-control"
                            value={this.state.drop_off_location} onChange={e => this.setState({ drop_off_location: e.target.value })}
                            id="drop_off_location"
                            placeholder="Type Your Adress"
                            name="drop_off_location"
                            maxLength="50"
                        /> */}

                        <GooglePlacesAutocomplete
                            className="form-select"
                            selectProps={{
                                onChange: (o) => {
                                    this.setState({ drop_off_location: o.label })
                                },
                                styles: {
                                    input: (provided, state) => ({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        color: '#212529',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        color: '#212529',
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                    }),
                                    singleValue: (provided, state) => ({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        color: '#212529',
                                    }),
                                    control: (provided, state) =>({
                                        ...provided,
                                        borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
                                        borderRadius:'0.375rem',
                                        boxShadow: state.isFocused ? '0 0 0 0.25rem rgb(172, 186, 189)' : '',
                                    }),
                                    container: (provided, state) =>({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        padding: '0',
                                        color: '#212529',
                                        borderColor: state.isSelected ? '#86b7fe' : '',
                                        boxShadow: state.isSelected ? '0 0 0 0.25rem rgb(172, 186, 189)' : '',
                                    }),
                                    placeholder: (provided, state) =>({
                                        ...provided,
                                        fontSize: '1rem',
                                        fontWeight: '400',
                                        color: '#212529',
                                    })
                                },
                            }}
                            autocompletionRequest={{
                                componentRestrictions: {
                                    country: ['us']
                                }
                            }}
                        />
                        </div>
                </div>
                <div className="row" id="double-input">
                    <div className="col input-btn-padding-x mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.full_name} onChange={e => this.setState({ full_name: e.target.value })}
                            id="full_name"
                            placeholder="Full Name"
                            name="full_name"
                            maxLength="50"
                        />
                    </div>
                    <div className="col input-btn-padding-x mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                            placeholder="youremail@example.com"
                            name="email"
                            maxLength="50" />
                    </div>
                </div>
                <div className="row" id="double-input">
                    <div className="col input-btn-padding-x mb-3">
                        <input
                            type="time"
                            className="form-control"
                            id="hour"
                            value={this.state.time} onChange={e => this.setState({ time: e.target.value })}
                            placeholder="hour"
                            name="date_time"
                        />
                    </div>
                    <div className="col input-btn-padding-x mb-3">
                        <input
                            type="date"
                            className="form-control"
                            id="date_booking"
                            value={this.state.date_booking} onChange={e => this.setState({ date_booking: e.target.value })}
                            placeholder="Date"
                            name="date_booking"
                        />
                    </div>
                </div>
                <div className="row" id="double-input">
                    <div className="col input-btn-padding-x mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="flight_id"
                            value={this.state.flight_id} onChange={e => this.setState({ flight_id: e.target.value })}
                            placeholder="Flight Number"
                            name="flight"
                            maxLength="20"
                        />
                    </div>
                    <div className="col input-btn-padding-x mb-3">
                        <select
                            className="form-select"
                            placeholder="payment method"
                            id='payment_method'
                            value={this.state.payment_method} onChange={e => this.setState({ payment_method: e.target.value })}
                            name="payment_method"
                            maxLength="12"
                        >
                            <option selected disabled value="">Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Zelle">Zelle</option>
                        </select>
                    </div>
                </div>
                <div className="row" id="double-input">
                    <div className="col input-btn-padding-x mb-3">
                        <div id="passengers-list">
                            <select
                                type="text"
                                className="form-select"
                                id="passengers"
                                value={this.state.passengers} onChange={e => this.setState({ passengers: e.target.value })} placeholder="passengers"
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
                    <div className="row input-btn-padding-x mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="observations"
                            value={this.state.observations} onChange={e => this.setState({ observations: e.target.value })}
                            placeholder="observations"
                            name="observations"
                            maxLength="100"
                        />
                        
                    </div>
                    <div className="row input-btn-padding-x mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="referrals"
                            value={this.state.referrals} onChange={e => this.setState({ referrals: e.target.value })}
                            placeholder="Referral Corde 10% OFF DISCOUNT"
                            name="referrals"
                            maxLength="20"
                        />
                        
                    </div>
                    <div className="row input-btn-padding-x mb-3">
                        <select
                            type="text"
                            className="form-select"
                            id="type_of_service"
                            placeholder="type of service"
                            value={this.state.type_of_service} onChange={e => this.setState({ type_of_service: e.target.value })}
                            name="type_of_service"
                        >
                            <option selected disabled value="">Type of Service</option>
                            <option value="Hourly">Hourly</option>
                            <option value="One Way">One way</option>
                        </select>
                    </div>
                </div>
                <button id="button" onClick={e => this.handleFormSubmit(e)} className="w-100 btn btn-lg btn-primary" type="submit">Book your Trip</button>
                <hr className="my-4" />
                <small className="text-muted">By clicking Your Booking, you agree to the terms of use.</small>
            </form>
        </div>
    );
}
}
export default FormBooking ;