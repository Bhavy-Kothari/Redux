import React , { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import withUser from '../Redux/withUser'

const Login =({setLoginReducer}) => {
    const navigate = useNavigate();
    const [input , setInput] = useState({
      email: '',
      password: ''
    });

    const handleLogin = () => {
        setLoginReducer(input)
        navigate('/dashboard')
    };

    const handleChange = e => {
        setInput({
            ...input , [e.target.name] : e.target.value,
        })
    };

    return(

    <form>
        <div>
            <label htmlFor="email" > Email Id : </label>
            <input
                className="inputfield"
                type="email"
                placeholder="Email.."
                autoComplete="username"
                name="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
            />
        </div>
        <br/>

        <div>
            <label htmlFor="password" > Password : </label>
          <input
              className="inputfield"
              type="password"
              placeholder="Password.."
              autoComplete="current-password"
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
          />
        </div>
        <br/><br/>

        <div>
            <button type="button" onClick={() => handleLogin()}> Log in</button>
            <p> Registered here <a href="/register"> Register </a></p>
        </div>
    </form>
    )}

export default withUser(Login)
