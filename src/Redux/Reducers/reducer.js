// // import {Types} from "../Actions/actionTypes";
// import {login} from "../Actions/action";
//
// const initialState = {
//     user: {
//         email: '',
//         password:''
//     },
//     formSubmitted: false
// }
//
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case login:
//             console.log('login')
//             return {
//                 ...state,
//                 formSubmitted: false
//             }
//         // case Types.ADD_USER:
//         //     return {
//         //         ...state,
//         //         formSubmitted: false
//         //     }
//         default:
//             return state;
//     }
// }
//
// export default reducer;



// import { REGISTER } from "../Actions/actionTypes";
//
// const initialState = {
//     user: {
//         email: '',
//         password: ''
//     },
//     formSubmitted: false
// }

// export const loginReducer = (state=initialState , action) => {
//     console.log(action,'action')
//     switch (action.type){
//         case LOGIN:
//             console.log('Login')
//             return{
//                 ...state,
//                 formSubmitted: false
//         }
//         default:
//             return state;
//     }
// }

// export const registerReducer = (state = initialState,action) => {
//     switch (action.type) {
//         case REGISTER :
//             console.log('Register')
//             return{
//                 ...state,
//                 formSubmitted: false
//             }
//         default : return state
//     }
// }


import {LOGIN} from "../Actions/actionTypes";

//initialState
const initialState = {
    isLoggedIn : false ,
    user:{
        email:'',
        password:''
    }
}

//Login Reducer
const loginReducer = (state=initialState,action) => {
 switch (action.type){
     case LOGIN:
         return {
             ...state,
             isLoggedIn: true,
             user:action.payload
         }
     default:
         return state
 }
}
export default loginReducer

