import axios from "axios";
import React from "react";
import { useState } from "react";


function Register() {
	const [userName, setName] = useState("");
	const [userPassword, setPassword] = useState("");
	const [userEmail, setEmail] = useState("");
	const registerUser = (e) => {
		e.preventDefault();
		if (!userName || !userPassword || !userEmail) {
			alert("All fields must be filled out.");
			return;
		}
		axios.post('http://localhost:3000/v1/auth/register', { name: userName, email: userEmail, password: userPassword })
			.then(res => {
				console.log(res);
				window.location.reload();
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
					<h2 className="text-center">Sign up</h2>
					<form className="bg-light p-4">
						<div className="mb-3">
							<label>Name</label>
							<input
								className="form-control"
								type="text"
								placeholder="Enter Username"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
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
							Register
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
export default Register;
