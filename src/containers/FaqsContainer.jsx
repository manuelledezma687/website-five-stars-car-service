import React from 'react';
import '../styles/Faqs.css';
import { Faqs } from './Faqs'
import '../styles/NotFound.css';

const FaqsContainer = () => {

	return (
		<div id="faqs">
			<h1 className="faqs-title">FAQs</h1>
			{Faqs.map((item, index) => {
				return (
					<article id='ul-faq' >
						<li
							id='question-container'>
							<h2 className='privacy-title ' key={index}>{item.question}</h2>
							<p className='answer'>{item.answer}</p>
						</li>
					</article>
				)
			})}</div>
	);
}

export default FaqsContainer;