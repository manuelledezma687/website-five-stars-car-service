import React, { useState } from 'react';
import '../styles/Ratings.css';
import { motion} from "framer-motion"

const Ratings = ({ rating }) => {

	return (
		<motion.figure 
		whileHover={{
			x: 20,
			y: 20,
			scale: 1.1,
			rotate: 0,
			fixed:0
		}}
		id='testimonials' class="shadow card.body">
				<p className='comments'>"{rating.comments}</p>
				<h2 className='name-customer'>{rating.first_name} {rating.last_name}</h2>
				<h4 className='date'>Created at {rating.created_at}</h4>
		</motion.figure>
	);
}

export default Ratings;

