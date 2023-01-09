import React , { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import loginReducer from "../Redux/Reducers/reducer";

const Login =(props) => {
    const navigate = useNavigate();
    const [input , setInput] = useState({
        email : props.login.user.email,
        password : props.login.user.password
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse( localStorage.getItem('user'))
        if(
            input.email === loggeduser.email &&
            input.password === loggeduser.password
        ) {
            navigate("/")
        }
         else{
             alert(" Wrong Email or Password ")
        }
    };


    return(
        <>
            <h1> Login page </h1>
            <section>
                <form onSubmit={ handleLogin }>
                    <div>
                        <label htmlFor="email" > Email Id : </label>
                        <input
                            name="email"
                            value={input.email}
                            onChange={(e) =>
                                setInput({
                                    ...input , [e.target.name] : e.target.value,
                                })}
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="password" > Password : </label>
                        <input
                            name="password"
                            value={input.password}
                            onChange={(e) =>
                                setInput({
                                    ...input , [e.target.name] : e.target.value,
                                })}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <br/><br/>

                    <div>
                        <button type="submit"> Log in k</button>
                        <p> Registered here <a href="/register"> Register </a></p>
                    </div>
                </form>
            </section>
        </> )}

const mapStateToProps = (state) => ({
    login:state.login
})

const mapDispatchToProps = (dispatch) => ({
    Login
})

export default connect (mapStateToProps , mapDispatchToProps)(Login)