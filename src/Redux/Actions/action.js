// import {Types} from "./actionTypes";
// export const ActionCreators = () => {
//     addProfile: (user) => (
//         {
//           type: Types.ADD_USER,
//           payload: { user }
//         }
//     ),
//     login: (user) => (
//         {
//             type: Types.LOGIN,
//             payload: { user }
//         }
//     )
// }


// import {LOGIN , REGISTER} from "./actionTypes";
// // export const Login = () => {
// //     return {
// //         type: LOGIN
// //     }}
//
// export const Register = () => {
//     return {
//         type: REGISTER
//     }}


import {LOGIN} from "./actionTypes";

export const login = (state) => {
    return{
        type:LOGIN,
        payload:state
    }
}
