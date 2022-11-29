import React, { useState } from 'react';
import { motion } from "framer-motion"

import '../styles/Ratings.css';


const Ratings = ({ rating }) => {

	return (
		<motion.li
			whileHover={{
				x: 20,
				y: 20,
				scale: 1.1,
				rotate: 0,
				fixed: 0
			}}
			id='testimonials'>
			<p className='comments'>"{rating.comments}..."</p>
			<h2 className='name-customer'>{rating.first_name} {rating.last_name}</h2>
			<div className="starring">
				<div className="stars">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</div>
				<h4 className="date">Created at {rating.created_at}</h4>
			</div>
		</motion.li>
	);
}

export default Ratings;

