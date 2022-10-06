import React from 'react';
import '../styles/Form.css';
import pointer from '../assets/icons/point.svg';
import calendar from '../assets/icons/calendar.svg';
import time from '../assets/icons/clock.svg';
import { motion} from "framer-motion"


const Form = () => {
    return (
                    <div className='main-form' id='booking'>
                        <motion.h1 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            fixed:0
                        }}
                        className='title'>Quote your trip and book with us, to live the <span> best experience.</span>Just in time with <span>FiveStars.</span></motion.h1>
                        <form action="" className='form'>
                            <select name="select-type-travel" className="select-type">
                                <option className="select-travel">One Way</option>
                                <option className="select-travel">By the hour</option>
                            </select>
                            <div className="inputs-form">
                                <label className="form-label" for="">From</label>
                                <div className="icon-input">
                                    <img src={pointer} className="icon" alt="" />
                                    <input id='text' name="from" type="text" placeholder="Address Airport" />
                                </div>
                            </div>
                            <div className="inputs-form">
                                <label className="form-label" for="">To</label>
                                <div className="icon-input">
                                    <img src={pointer} className="icon" alt="" />
                                    <input id="text" type="text" name="to" placeholder="Address Airport" />
                                </div>
                            </div>
                            <div className="inputs-form">
                                <label className="form-label" for="">Date</label>
                                <div className="icon-input">
                                    <img src={calendar} className="icon" alt="" />
                                    <input id="date" type="date" name="date" placeholder="Address Airport" />
                                </div>
                            </div>
                            <div className="inputs-form">
                                <label className="form-label" for="">Time</label>
                                <div className="icon-input">
                                    <img src={time} className="icon" alt="" />
                                    <input type="time" id="time" name="time" placeholder="Address Airport" />
                                </div>
                            </div>
                            <button className="send-form">Enviar formulario</button>
                        </form>
                    </div>
    );
}
export default Form;