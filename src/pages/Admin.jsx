import React, { useRef } from 'react';
import Logo from '../assets/logos/logo.png';
import { Footer } from '../components/Footer';

import "../styles/Admin.css";

export function Admin() {

    const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('user'),
			password: formData.get('password')
		}
		console.log(data);
	}

    return (

        <><div className="container-fluid" id="logo">
            <img src={Logo} alt="logo" className="fivestars" />
        </div><div className="Login">
                <div className="Login-container">
                    <form action="/" className="form" ref={form}>
                        <label htmlFor="user" className="label">User</label>
                        <input type="text" name="user" placeholder="admin" className="input input-user" />
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input input-password" />
                        <button
                            onClick={handleSubmit}
                            className="primary-button login-button" type="submit">
                            Log in
                        </button>
                    </form>
                </div>
            </div><Footer /></>
    );
}