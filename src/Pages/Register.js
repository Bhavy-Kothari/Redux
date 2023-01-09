import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
// import {useDispatch , useSelector} from "react-redux";
import {Register} from "../Redux/Actions/action";
import {connect} from "react-redux";

const Registered = () => {
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

    // const dispatch = useDispatch()
    // const register = useSelector((state) => state.register)


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
                    <button onClick={handleSubmit}> Register </button>
                </div>

                <p> Have already an account ? <a href="/login"> Login Here </a></p>
            </form>
        </div>
    );
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         Register:()=>dispatch(Register())}}
//
// const mapStateToProps = (state) => {
//     return{
//
//     }
// }
export default Registered