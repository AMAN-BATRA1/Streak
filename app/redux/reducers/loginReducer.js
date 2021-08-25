import { screenType } from "../../values/strings";
import { USER_PREFS, LOGOUT, LOGIN_DATA, USER_TYPE } from "../actions/actionTypes";

let initialState = {
    userPrefs : null,
    loginData : null,
    userType : screenType.PARENT
}


export default loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_PREFS:
            return{
                ...state,
                userPrefs : action.userPrefs
            }
        case LOGIN_DATA:
            return {
                ...state,
                loginData : action.loginData
            }
        case USER_TYPE:
            return {
                ...state,
                userType : action.userType
            }
        case LOGOUT:
            return{
                ...state
            }
    }
    return state;
    
}