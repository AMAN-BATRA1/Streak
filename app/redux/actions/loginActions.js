import { Alert } from "react-native"
import { saveToken, saveUserPrefs } from "../../utils/UserPrefs"
import { TOKEN } from "../../values/strings"
import AxiosBase from "../networkRequests/AxiosBase"
import { LOGIN_DATA, LOGOUT, USER_PREFS, USER_TYPE } from "./actionTypes"


export const setUserPrefs = (data) => {
    return async dispatch => {
        dispatch({
            type : USER_PREFS,
            userPrefs : data
        })
    }
}


export const setLoginData = (data) => {
    return async dispatch => {
        dispatch({
            type : LOGIN_DATA,
            loginData : data
        })
    }
}


export const setUserType = (type) => {
    return async dispatch => {
        dispatch({
            type : USER_TYPE,
            userType : type
        })
    }
}



export const setLogoutUser = () => {
    return async dispatch => {
        dispatch({
            type : LOGOUT,
            data : null
        })
    }
}



export const loginUser = (connected,data) => new Promise((resolve,reject) => {

    // console.log("data",data)
    if(connected){
        const _data = {
            method : "login",
            username : data.username,
            password : data.password,           
            device_token:'',
            Notification_Token:data.Notification_Token
        }
        AxiosBase.post("",_data)
            .then(response => {
                const res = response.data;
                console.log("response",res)
                if(res.err_code === "0"){
                    saveToken(res.login_token)
                    saveUserPrefs(res)
                    resolve(res)
                }else if(res.err_code === "404"){
                    alert(res.message)
                    reject(res.message)
                }
                else {
                    alert('Something going wrong.')
                    reject('Something went wrong')
                }
            })
            .catch(error => {
                // console.log(JSON.stringify(error))
                if(error.response.status === 400){
                    alert(error.response.data.message)
                }else {
                    reject(error)
                }
            })
    }else {
        alert('Internet connection error.')
        reject('No Internet connection')
    }
    
})

export const forgotUser = (data) => new Promise((resolve, reject) => {
    // console.log(data)
    if(data.connected){
        let _data = { method:"forgot_password",username : data.username}
        AxiosBase.post("",_data)
            .then(response => {
                console.log('[LoginAction.js] Response: ',response)
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    }else {
        alert('Check your internet connection')
        reject('No Internet connection')
    }
})


export const changePassword = (data) => new Promise((resolve, reject) => {
    // console.log(data)
    // if(connected){
        AxiosBase.post("",data)
            .then(response => {
                console.log('[LoginAction.js] Response: ',response)
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    // }else {
    //     alert('Check your internet connection')
    //     reject('No Internet connection')
    // }
})