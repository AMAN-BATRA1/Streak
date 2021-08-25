import AsyncStorage from "@react-native-community/async-storage"

const USER_PREFS = 'USER_PREFS';
const TOKEN = 'TOKEN';
export const LOGIN_DETAILS = 'LOGIN_DETAILS'


export const saveLoginDetails = async(data) => {
    
    try{
        const _data = data !== null ? {
            username : data.username,
            password : data.password,
        }   : null;
        console.log('[UserPrefs.js] LoginDetails : ',JSON.stringify(_data))
        await AsyncStorage.setItem(LOGIN_DETAILS, JSON.stringify(_data))
    }
    catch (e){
        console.log('[UserPrefs.js] LOGIN_DETAILS Data not saved.')
    }
}


export const getLoginDetails = () => {
    try{
        return AsyncStorage.getItem(LOGIN_DETAILS)
    }
    catch (error) {
        console.log('[UserPrefs.js] LOGIN_DETAILS Data.')
    }
}


export const saveUserPrefs = async(data) => {
    try{
        await AsyncStorage.setItem(USER_PREFS, JSON.stringify(data))
    }
    catch (e){
        console.log('[UserPrefs.js] USER_PREFS Data not saved.')
    }
}


export const getUserPrefs = () => {
    try{
        return AsyncStorage.getItem(USER_PREFS)
    }
    catch (error) {
        console.log('[UserPrefs.js] GetUserPrefs. Data.')
    }
}


export const saveToken = (data) => {
    try{
        AsyncStorage.setItem(TOKEN, JSON.stringify(data))
    }
    catch (e){
        console.log('[UserPrefs.js] TOKEN Data not saved.')
    }
}


export const getToken = () => {
    try{
        AsyncStorage.getItem(TOKEN)
    }
    catch (error) {
        console.log('[UserPrefs.js] TOKEN Data.')
    }
}


export const clearUserPreference = () => {
    try {
        AsyncStorage.clear();
    }catch (error) {
        console.log('[UserPrefs.js] Clear Error.')
    }
}
