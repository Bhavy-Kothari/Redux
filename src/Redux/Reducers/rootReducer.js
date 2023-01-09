// import {registerReducer} from "./reducer";
// import {combineReducers} from "redux";
// export const rootReducer = combineReducers({
//     registerReducer,
//     // loginReducer
// })

import loginReducer from "./reducer";
import {combineReducers} from "redux";

//rootReducer
export const rootReducer = combineReducers({
    login:loginReducer
})