import axios from '../config/axios'
import React from "react"; 
import {useState } from "react"; 
import { API_URL } from '../config/constants';

function Login() { 
	const [userPassword, setPassword] = useState("");
	const [userEmail, setEmail] = useState("");
	const registerUser = (e) => {
		e.preventDefault();
		if (!userPassword || !userEmail) {
			alert("All fields must be filled out.");
			return;
		}
		axios.post('v1/auth/login', { email: userEmail, password: userPassword })
			.then(res => {
				const token = res.data.tokens.access.token
				window.localStorage.setItem('token', token)
				axios.defaults.headers.common.Authorization = `Bearer ${token}`;
				alert(axios.defaults.headers.common.Authorization)
				window.location.assign('/start')
				alert("go home")
			}).catch(err => {
				console.log(err);
			});
	}

	const userCancel = () => {
		
	}

	return (
		<div className="container mt-5">
			<div className="row">

				<div className="col-md-5">
					<h2 className="text-center">Log in</h2>
					<form className="bg-light p-4">
						<div className="mb-3">
							<label>Email</label>
							<input
								className="form-control"
								type="text"
								placeholder="Enter Your Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label>Password</label>
							<input
								className="form-control"
								type="text"
								placeholder="More than 8 characters"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button onClick={registerUser} className="btn btn-success btn-sm">
							Login
						</button>
						<button onClick={userCancel} className="btn btn-success btn-sm">
							Cancel
						</button>
					</form>
				</div>

			</div>
		</div>
	)
} 
export default Login;
