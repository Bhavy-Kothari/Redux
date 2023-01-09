import React from 'react';
import {useNavigate} from 'react-router-dom';
import withUser from '../Redux/withUser'

const Home = ({loginReducer}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login")
    }
    return(
        <div>
            <h1> Hey {loginReducer.email} , How are you? </h1>
            <p> Welcome to our website </p>
            <div>
                <button type="button" onClick={handleLogout}> Log out </button>
            </div>
        </div>
    )
}

export default withUser(Home);
