import React from 'react';
import Ratings from '../components/Ratings';
import useGetRatings from '../hooks/useGetRatings';


const API = 'http://127.0.0.1:8000/ratings';

const RatingContainer = () => {
	
    const ratings = useGetRatings(API);

	return (
		<section>
			<div>
				{ratings.map(rating => (
					<Ratings rating={rating} key={rating.rating_id} />
				))}
			</div>
		</section>
	);
}

export default RatingContainer;