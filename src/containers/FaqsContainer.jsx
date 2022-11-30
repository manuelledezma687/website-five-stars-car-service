import React from 'react';

import '../styles/Ratings.css';

import FaqsComponent from '../components/FaqsComponent';
import useGetFAQs from '../hooks/useGetFAQs';


const API = 'https://fivestarscarservice.com/faqs.php';

const FaqsContainer = () => {

	const faqs = useGetFAQs(API);

	return (
		<div id="ratings">
			<h1 className="testimonials-title">FAQs</h1>
			<div className='container-rating'>
				<ul id="ul-rating" >
					{faqs.map(faq => (
						<FaqsComponent faq={faq} key={faq.question_id} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default FaqsContainer;