import React from 'react';
import { motion } from "framer-motion"

import '../styles/Ratings.css';


const Faqs = ({ faq }) => {

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
			<h2 className='name-customer'>{faq.question}</h2>
            <p className='comments'>{faq.answer}</p>
		</motion.li>
	);
}

export default Faqs;

