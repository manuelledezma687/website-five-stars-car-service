import React from 'react';
import Ratings from '../components/Ratings';
import useGetRatings from '../hooks/useGetRatings';
import '../styles/Ratings.css';


const API = 'http://127.0.0.1:8000/ratings?limit=3';

const RatingContainer = () => {
	
    const ratings = useGetRatings(API);

	return (
		<section id='rating'>
			<h1 className='testimonials-title'>Our testimonials</h1>
			<div className='container-rating'>
				{ratings.map(rating => (
					<Ratings rating={rating} key={rating.rating_id} />
				))}
			</div>
		</section>
	);
}

export default RatingContainer;