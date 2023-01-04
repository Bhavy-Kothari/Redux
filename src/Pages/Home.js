import React from 'react';
import {useNavigate} from 'react-router-dom';
// import Register from "./Register";

const Home = () => {
    const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('loggedin')
        navigate("/login")
    }
    return(
        <div>
            <h1> Hello {userName.firstname}</h1>
            <p> Welcome to our website </p>
            <div>
                <button type="button" onClick={handleLogout}> Log out </button>
            </div>
        </div>
    )
}

export default Home;