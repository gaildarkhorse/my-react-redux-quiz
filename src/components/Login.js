// import axios from "axios"; 
// import React from "react"; 
// import { useEffect, useState } from "react"; 

function Login() { 
// 	const [todoList, setTodoList] = useState([]); 
	// // const [editableId, setEditableId] = useState(null); 
	// // const [firstName, setFirstName] = useState(""); 
	// // const [lastName, setfLastName] = useState(""); 
	// // const [password, setPassword] = useState(""); 
	// // const [email, setEmail] = useState(""); 

	// // // Fetch tasks from database 
	// // // useEffect(() => { 
	// // // 	axios.get('http://127.0.0.1:3000/getTodoList') 
	// // // 		.then(result => { 
	// // // 			setTodoList(result.data) 
	// // // 		}) 
	// // // 		.catch(err => console.log(err)) 
	// // // }, []) 

	// // // // Function to toggle the editable state for a specific row 
	// // // const toggleEditable = (id) => { 
	// // // 	const rowData = todoList.find((data) => data._id === id); 
	// // // 	if (rowData) { 
	// // // 		setEditableId(id); 
	// // // 		setEditedTask(rowData.task); 
	// // // 		setEditedStatus(rowData.status); 
	// // // 		setEditedDeadline(rowData.deadline || ""); 
	// // // 	} else { 
	// // // 		setEditableId(null); 
	// // // 		setEditedTask(""); 
	// // // 		setEditedStatus(""); 
	// // // 		setEditedDeadline(""); 
	// // // 	} 
	// // // }; 


	// // // Function to add task to the database 
	// // const registerUser = (e) => { 
	// // 	e.preventDefault(); 
	// // 	if (!firstName || !setfLastNametName || !password || !email) { 
	// // 		alert("All fields must be filled out."); 
	// // 		return; 
	// // 	} 

	// // 	axios.post('http://127.0.0.1:3000/addTodoList', { task: firstName, status: password, deadline: email }) 
	// // 		.then(res => { 
	// // 			console.log(res); 
	// // 			window.location.reload(); 
	// // 		}) 
	// // 		.catch(err => console.log(err)); 
	// // } 

	// // // Function to save edited data to the database 
	// // const saveEditedTask = (id) => { 
	// // 	const editedData = { 
	// // 		task: editedTask, 
	// // 		status: editedStatus, 
	// // 		deadline: editedDeadline, 
	// // 	}; 

	// // 	// If the fields are empty 
	// // 	if (!editedTask || !editedStatus || !editedDeadline) { 
	// // 		alert("All fields must be filled out."); 
	// // 		return; 
	// // 	} 

	// // 	// Updating edited data to the database through updateById API 
	// // 	axios.post('http://127.0.0.1:3001/updateTodoList/' + id, editedData) 
	// // 		.then(result => { 
	// // 			console.log(result); 
	// // 			// setEditableId(null); 
	// // 			setEditedTask(""); 
	// // 			setEditedStatus(""); 
	// // 			setEditedDeadline(""); // Clear the edited deadline 
	// // 			window.location.reload(); 
	// // 		}) 
	// // 		.catch(err => console.log(err)); 
	// // } 


	// // // Delete task from database 
	// // // const deleteTask = (id) => { 
	// // // 	axios.delete('http://127.0.0.1:3001/deleteTodoList/' + id) 
	// // // 		.then(result => { 
	// // // 			console.log(result); 
	// // // 			window.location.reload(); 
	// // // 		}) 
	// // // 		.catch(err => 
	// // // 			console.log(err) 
	// // // 		) 
	// // // } 

	// // return ( 
	// // 	<div className="container mt-5"> 
	// // 		<div className="row"> 
				
	// // 			<div className="col-md-5"> 
	// // 				<h2 className="text-center">Log in</h2> 
	// // 				<form className="bg-light p-4"> 
	// // 					<div className="mb-3"> 
	// // 						<label>Email</label> 
	// // 						<input 
	// // 							className="form-control"
	// // 							type="text"
	// // 							placeholder="Enter Your Email"
    // //                             onChange={(e) => setPassword(e.target.value)} 
	// // 						/> 
	// // 					</div> 
	// // 					<div className="mb-3"> 
	// // 						<label>Password</label> 
	// // 						<input 
	// // 							className="form-control"
	// // 							type="text"
	// // 							placeholder="More than 8 characters"
	// // 							onChange={(e) => setEmail(e.target.value)} 
	// // 						/> 
	// // 					</div> 
	// // 					<button onClick={registerUser} className="btn btn-success btn-sm"> 
	// // 						Register 
	// // 					</button> 
    // //                     <button onClick={registerUser} className="btn btn-success btn-sm"> 
	// // 						Cancel 
	// // 					</button> 
	// // 				</form> 
	// // 			</div> 

	// // 		</div> 
	// // 	</div> 
	// ) 
} 
export default Login;
