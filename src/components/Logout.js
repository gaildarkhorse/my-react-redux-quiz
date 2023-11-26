import axios from "axios"; 
import React from "react"; 
import { useHistory } from "react-router-dom"; 

const Logout = () => { 
    const history = useHistory();

    const handleLopgout = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <div>
            <button onClick={handleLopgout}>Logout</button>
        </div>
    )
} 
export default Logout;
