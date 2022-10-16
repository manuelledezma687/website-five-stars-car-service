import React from 'react';

import '../styles/Ratings.css';

const Ratings = ({ rating }) => {

    return (
        <div id="ratings">
            <h1 className="testimonials-title">Our testimonials</h1>
            <div className='container-rating'>
                <ul id="ul-rating" >
                    <li id='testimonials'>
                        <p className="comments">"Hi this is a test"</p>
                        <h2 className="name-customer">Robert Allen </h2>
                        <div>
                            <div>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="starring">
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4 class="date">Created at Oct. 14, 2022, 1:51 p.m.</h4>
                        </div>
                    </li>
                    <li id='testimonials'>
                        <p className="comments">"Hi this is a test"</p>
                        <h2 className="name-customer">Robert Allen </h2>
                        <div>
                            <div>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="starring">
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4 class="date">Created at Oct. 14, 2022, 1:51 p.m.</h4>
                        </div>
                    </li>
                    <li id='testimonials'>
                        <p className="comments">"Hi this is a test"</p>
                        <h2 className="name-customer">Robert Allen </h2>
                        <div>
                            <div>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="starring">
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4 class="date">Created at Oct. 14, 2022, 1:51 p.m.</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Ratings;
