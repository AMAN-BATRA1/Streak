import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react';
import { getUserPrefs } from '../../../utils/UserPrefs';
import { useDispatch } from 'react-redux';
import { setUserPrefs, setUserType } from '../../../redux/actions/loginActions';
import { screenType } from '../../../values/strings';
import { images } from '../../../assets/images';


const Splash = props => {


    const dispatch = useDispatch();


    useEffect(async() => {

        const userPrefs = JSON.parse(await getUserPrefs());
        console.log('[Splash.js] Get User Prefs : ',userPrefs);

        if(userPrefs !== null) {
            // alert('Here..')
            const flag = userPrefs.flag
            if(flag.user_type === "Student"){
                dispatch(setUserType(screenType.STUDENT))
            }else if(flag.user_type === "Parent"){
                dispatch(setUserType(screenType.PARENT))
            }
            dispatch(setUserPrefs(userPrefs))
            setTimeout(() =>{
                props.navigation.replace('Dashboard')
            },2000)
            
        }else {
            setTimeout(() =>{
                props.navigation.replace('Login')
            },2000)
        }

    })


    return (
        <View style={styles.parent}>
        <Animatable.View
            animation={'bounceIn'}
            duration={2000}
            style={{alignItems:'center',justifyContent:'center'}}
        >
            <Image 
                source={images.logo}
                style={styles.imageStyle}
                resizeMode='contain'
            />
            {/* <Text style={styles.text}>BSS Liberty</Text> */}
        </Animatable.View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    parent : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    imageStyle : {
        height:120,
        width:240,
    },
    text : {
        fontSize:18,
        // fontFamily:fonts.poppinsRegular,
        color:'#888'
    }
})

