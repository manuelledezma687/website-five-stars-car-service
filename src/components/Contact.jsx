import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../styles/Contact.css';

import { sendContactForm } from '../hooks/sendContactForm';


export function Contact() {

const [formSent, changeFormSent] = useState(false);

return (
	<>
		<Formik
			initialValues={{
				name: '',
				email: '',
				message: ""
			}}
			validate={(values) => {
				let errors = {};
				if (!values.name) {
					errors.name = 'Please type your name'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
					errors.name = 'The name must be contain only letters or characters'
				}
				if (!values.email) {
					errors.email = 'Please type your e-mail'
				} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
					errors.email = 'This email is invalid'
				}
				return errors;
			}}
			onSubmit={(values, { resetForm }) => {
				resetForm();
				console.log('Form sent');
				changeFormSent(true);
				sendContactForm();
				setTimeout(() => changeFormSent(false), 5000);
			}}
		>
			{({ errors }) => (
				<Form className="contact-form" id='contact' method='post'>
					<h1 className='contact-input-f'>Contact Us</h1>
					<div className='contact-input'>
						<label htmlFor="name">Name</label>
						<Field
							type="text"
							id="name"
							name="name"
							placeholder="John Doe"
						/>
						<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
					</div>
					<div className='contact-input'>
						<label htmlFor="email">Email</label>
						<Field
							type="text"
							id="email"
							name="email"
							placeholder="youremail@mail.com"
						/>
						<ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
					</div>
					<div className='contact-input'>
						<label htmlFor="email">Message</label>
						<Field
							id="message"
							name="message"
							as="textarea"
							placeholder="Your Message"
						/>
					</div>
					<button id="send" htmlFor={{sendContactForm}} type="submit">Send</button>
					{formSent && <p className="exito">Form sent succesfull!</p>}
				</Form>
			)}
		</Formik>
	</>
);
			}