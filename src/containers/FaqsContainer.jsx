import React from 'react';
import '../styles/Faqs.css';
import { Faqs } from './Faqs'

const FaqsContainer = () => {

	return (
		<div id="faqs">
			<h1 className="faqs-title">FAQs</h1>
			{Faqs.map((item, index) => {
				return (
			<div className='privacy'>
						<ul className='ul-faq'>
							<li 
							className='card-text'
							id='question-container'>
								<h2 className='privacy-title 'key={index}>{item.question}</h2>
								<p className='answer'>{item.answer}</p>
							</li>
						</ul>
					</div>	
				)
			})}</div>
	);
}

export default FaqsContainer;