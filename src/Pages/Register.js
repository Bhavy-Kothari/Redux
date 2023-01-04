import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
const Register = () => {
    const navigate = useNavigate()
    const [input , setInput] = useState({
        firstname : "",
        lastname : "",
        email : "",
        password : ""
    });

    //to store value in local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user" , JSON.stringify(input));
        navigate("/login")
    };

    return (
        <div className="App">
            <h1> Register page </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname" > Your first name : </label>
                    <input
                        name="firstname"
                        value={input.name}
                        onChange={(e) =>
                            setInput({
                            ...input , [e.target.name] : e.target.value,
                        })}
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <br/>

                <div>
                    <label htmlFor="lastname" > Your last name : </label>
                    <input
                        name="lastname"
                        value={input.name}
                        onChange={(e) =>
                            setInput({
                                ...input , [e.target.name] : e.target.value,
                            })}
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <br/>



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
                <br/>

                <div>
                    <button type="submit"> Register </button>
                </div>

                <p> Have already an account ? <a href="/login"> Login Here </a></p>
            </form>
        </div>
    );
};
export default Register;