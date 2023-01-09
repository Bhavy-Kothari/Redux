import {LOGIN} from "../Actions/actionTypes";

const loginReducer = (state= {},action) => {
        switch (action.type) {
                case LOGIN:
                        return action.state;
                default:
                        return state;
        }
}
export default loginReducer

