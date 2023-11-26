import axios from "axios"; 
import React from "react"; 
import {useState } from "react"; 

function Register() { 

	const [userFirstName, setFirstName] = useState(""); 
	const [userLastName, setLastName] = useState(""); 
	const [userPassword, setPassword] = useState(""); 
	const [userEmail, setEmail] = useState(""); 

	// Function to add task to the database 
	const registerUser = (e) => { 
		e.preventDefault(); 
		if (!userFirstName || ! userLastName || ! userPassword || ! userEmail) { 
			alert("All fields must be filled out."); 
			return; 
		} 

		axios.post('http://localhost:3000/v1/auth/register', { firstName: userFirstName, lastName: userLastName, email: userEmail, password: userPassword}) 
			.then(res => { 
				console.log(res); 
				window.location.reload(); 
			}) 
			.catch(err => console.log(err)); 
	} 

	// Function to save edited data to the database 
	// const saveEditedTask = (id) => { 
	// 	const editedData = { 
	// 		task: editedTask, 
	// 		status: editedStatus, 
	// 		deadline: editedDeadline, 
	// 	}; 

	// 	// If the fields are empty 
	// 	if (!editedTask || !editedStatus || !editedDeadline) { 
	// 		alert("All fields must be filled out."); 
	// 		return; 
	// 	} 

	// 	// Updating edited data to the database through updateById API 
	// 	axios.post('http://127.0.0.1:3001/updateTodoList/' + id, editedData) 
	// 		.then(result => { 
	// 			console.log(result); 
	// 			// setEditableId(null); 
	// 			setEditedTask(""); 
	// 			setEditedStatus(""); 
	// 			setEditedDeadline(""); // Clear the edited deadline 
	// 			window.location.reload(); 
	// 		}) 
	// 		.catch(err => console.log(err)); 
	// } 


	// Delete task from database 
	// const deleteTask = (id) => { 
	// 	axios.delete('http://127.0.0.1:3001/deleteTodoList/' + id) 
	// 		.then(result => { 
	// 			console.log(result); 
	// 			window.location.reload(); 
	// 		}) 
	// 		.catch(err => 
	// 			console.log(err) 
	// 		) 
	// } 

	return ( 
		<div className="container mt-5"> 
			<div className="row"> 
				
				<div className="col-md-5"> 
					<h2 className="text-center">Sign up</h2> 
					<form className="bg-light p-4"> 
						<div className="mb-3"> 
							<label>Firstname</label> 
							<input 
								className="form-control"
								type="text"
								placeholder="Enter Username"
								onChange={(e) => setFirstName(e.target.value)} 
							/> 
						</div>
                        <div className="mb-3"> 
							<label>Lastname</label> 
							<input 
								className="form-control"
								type="text"
								placeholder="Enter Username"
								onChange={(e) => setLastName(e.target.value)} 
							/> 
						</div> 
						<div className="mb-3"> 
							<label>Email</label> 
							<input 
								className="form-control"
								type="text"
								placeholder="Enter Your Email"
                                onChange={(e) => setPassword(e.target.value)} 
							/> 
						</div> 
						<div className="mb-3"> 
							<label>Password</label> 
							<input 
								className="form-control"
								type="text"
								placeholder="More than 8 characters"
								onChange={(e) => setEmail(e.target.value)} 
							/> 
						</div> 
						<button onClick={registerUser} className="btn btn-success btn-sm"> 
							Register 
						</button> 
                        <button onClick={registerUser} className="btn btn-success btn-sm"> 
							Cancel 
						</button> 
					</form> 
				</div> 

			</div> 
		</div> 
	) 
} 
export default Register;
