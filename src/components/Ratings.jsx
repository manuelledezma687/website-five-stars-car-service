import React, { useState } from 'react';
import '../styles/Ratings.css';


const Ratings = ({ rating }) => {

	return (
		<div className='testimonials'>
				<p className='comments'>"{rating.comments}</p>
				<h2 className='name-customer'>{rating.first_name} {rating.last_name}</h2>
				<h4 className='date'>Created at {rating.created_at}</h4>
		</div>
	);
}

export default Ratings;

