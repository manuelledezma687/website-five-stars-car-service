import React, { useState } from 'react';


const Ratings = ({ rating }) => {

	return (
		<div ><h1>{rating.stars}</h1>
        <p>{rating.comments}</p>
		</div>
	);
}

export default Ratings;