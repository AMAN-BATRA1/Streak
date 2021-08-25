import React, { Component, useRef, useState } from 'react'
import { StyleSheet, View,TouchableOpacity, ImageBackground, Image, Text,Alert} from 'react-native'
import { connect } from 'react-redux'
import { images } from '../../../assets/images'
import { colors } from '../../../values/colors'
import { SCREEN_WIDTH } from '../../../values/dimens'
import InputView from '../../components/InputView'
import BaseView from '../../hod/BaseView'
import {CheckBox} from 'react-native-elements'
import {BaseUrl} from "../../../values/Config";
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import BaseModal from "../../hod/BaseModal"
import { Icon } from 'react-native-elements'
import { loginUser, setLoginData ,forgotUser, setUserType, setUserPrefs} from '../../../redux/actions/loginActions'
import { screenType } from '../../../values/strings'
import { getLoginDetails, saveLoginDetails, saveUserPrefs } from '../../../utils/UserPrefs'
import { TextInput } from 'react-native-gesture-handler'



class Login extends Component {


    state = {
        username : 'E196_9_test',            //Student login
        password : 'lTjTNHn',               //Student Password

        // username : 'E196_10_p',
        // password : 'Vh!qjk9f',

        // username : '',
        // password : '',

        isSelected:true,
        isConnected:"",
        connected:"",
        Notification_Token:""
    }


  

    componentDidMount = () => {
        this._init()
         this.unsubscribe = NetInfo.addEventListener(state => {
             this.setState({connected : state.type,isConnected : state.isConnected})
          });
    }

 

    componentWillUnmount(){
        this.unsubscribe()
    }

    _init = async() => {
        // alert(SCREEN_WIDTH)
       
        const data = JSON.parse(await getLoginDetails());
        // console.log('[Login.js] Init : ',data)
        if(data !== undefined && data !== null){
            this.setState({
                username : data.username,
                password : data.password,
            })
        } else {
            null
        }
      
    
    }
    
    _onLoginUser = async()=> {
        const {username,password,connected,Notification_Token} = this.state;
        const data = {username,password,Notification_Token}
        this.baseView.showLoader()
        loginUser(connected,data)
            .then(response => {
                console.log("[Login.js] Login user Response",response)
                this.baseView.hideLoader()
                this._saveRememberMe()

                const flag = response.flag
                if(flag.user_type === "Student"){
                    this.props.setUserType(screenType.STUDENT)
                }else if(flag.user_type === "Parent"){
                    this.props.setUserType(screenType.PARENT)
                }
                saveUserPrefs(response)
                this.props.setUserPrefs(response)
                this.props.navigation.replace('Dashboard')

                
            })
            .catch(error => {
                this.baseView.hideLoader()
                console.log('[Login.js] Login user Error: ',error)
            })
    }


    _saveRememberMe = () => {
        const {isSelected,username,password} = this.state;
        if(isSelected) {
            saveLoginDetails({username,password});
        }else {
            saveLoginDetails(null);
        }
    }


    _onForgotPassword =  (username) => {
        setTimeout(() => {

            this.baseView.showLoader()
            const {connected} = this.state;
            const data = {connected,username}
            forgotUser(data)
                .then(response => {
                    this.baseView.hideLoader()
                    if (response['err-code'] == "0" || response['err-code'] === "400"){
                        alert(response.message)
                    }else {
                        alert('Something Went Wrong')
                    }
                })
                .catch(error => {
                    console.log('[Login.js] Error: ',error)
                    alert("Something Went Wrong")
                })
            
        }, 200);
    }

    handleRememberMe=()=>{
        this.setState({ isSelected: !this.state.isSelected })
    }




    // _update = () => {
    //     console.log('[Login.js] Existing : ',existingList)
    //     console.log('[Login.js] New List :',newList)
    //     const list = existingList;
    //     newList.forEach(newItem => {
    //         list.forEach((existingItem,index) => {
    //             if(newItem.id === existingItem.id){
    //                 existingItem.stock_in_hand = existingItem.stock_in_hand + newItem.stock_in_hand;
    //             }else {
    //                 // list.push(newItem)
    //                 // return;
    //             }
    //         });
    //     });

    //     console.log('[Login.js] On Update : ',list)
    // }




    render(){

        const {username,password,isSelected} = this.state;
        
        return (
            <BaseView
                ref={ref=>this.baseView=ref}
                statusBarColor={colors.bgColor}
                parentStyle={{backgroundColor:colors.bgColor}}
            >
          
            <View style={{flex: 1,alignItems:"center"}}>
             
<View style={{height:"3%",width:"100%"}}></View>
<View style={{flexDirection:"row",width:"90%",height:"10%",alignItems:'center'}}>
    <View style={{width:"85%"}}>
    <Text style={{fontSize:22,fontWeight:"600",color:"#581845"}}>Profile</Text>
    </View>
    <View style={{width:40,backgroundColor:"white",borderRadius:47,height:40,alignItems:"center",justifyContent:"center",elevation:5,shadowColor:"grey",shadowOffset:{height:2,width:0},shadowOpacity:.5,}}>
    <Icon 
                    name='close'
                    type='ant-design'
                    color='red'
                />
</View>
    </View>
    <View style={{width:"90%",height:"10%",justifyContent:"flex-start",alignItems:"flex-start",borderBottomWidth:.5,borderColor:"silver"}}>
        <Text style={{fontSize:16,fontWeight:"600",color:"grey"}}>Enter your details so we can {"\n"}get ti know you better.</Text>
    </View>
    
                <View style={styles.view1}>
                  
                <View style={{height:"5%",width:"100%",marginTop:28}}>
                    <Text style={{fontSize:14,fontWeight:"600",}}>First Name</Text>
                </View>
                    <TextInput
                    placeholder={"Jhon"}
                    style={{height:50,width:"100%",borderColor:"grey",borderWidth:.5,borderRadius:10,padding:10}}
                    ></TextInput>

                <View style={{height:"5%",width:"100%",marginTop:28}}>
                    <Text style={{fontSize:14,fontWeight:"600",}}>Second Name</Text>
                </View>
                    <TextInput
                    placeholder={"Jhon"}
                    style={{height:50,width:"100%",borderColor:"grey",borderWidth:.5,borderRadius:10,padding:10}}
                    ></TextInput>

                <View style={{height:"5%",width:"100%",marginTop:28}}>
                    <Text style={{fontSize:14,fontWeight:"600",}}>Email</Text>
                </View>
                    <TextInput
                    placeholder={"Jhon"}
                    style={{height:50,width:"100%",borderColor:"grey",borderWidth:.5,borderRadius:10,padding:10}}
                    ></TextInput>
                    

                <View style={{height:"5%",width:"100%",marginTop:28}}>
                    <Text style={{fontSize:14,fontWeight:"600",}}>Mobile Number</Text>
                </View>
                    <TextInput
                    placeholder={"Jhon"}
                    style={{height:50,width:"100%",borderColor:"grey",borderWidth:.5,borderRadius:10,padding:10}}
                    ></TextInput>

                <View style={{marginTop:18}}>
                    <Text style={{color:"grey",}}>OTP verfication in next step</Text>
                </View>

                <View style={{height:"10%"}}></View>
                <View style={{height:56,width:"100%",backgroundColor:"#581845",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"white",fontWeight:"600",fontSize:20}}>Create Profile</Text>
                </View>
                </View>

            </View>
          
    

            </BaseView>
        )
    }
}


const styles = StyleSheet.create({
    parent : {
        flex:1,
        paddingHorizontal:16,
        backgroundColor:'#d5d5d5'
    },
    logoImage : {
        height:'12%',
        width:SCREEN_WIDTH/2,
        alignSelf:'center',
        marginTop:24
    },
    view1 : {
        // flex:1,
        width:"90%",
        height:"80%",
        alignItems:'center',
        justifyContent:"flex-start",
        // marginBottom:'10%'
    },
    textInputStyle : {
        marginTop:20,
        height:40,
        width:340,
        borderWidth:.5,
        borderColor:"grey",
        paddingVertical:0
    },
    checkBoxContainer : {
        padding:0,
        backgroundColor:'transparent',
        borderWidth:0,
        alignSelf:'flex-start',
        marginLeft:SCREEN_WIDTH/4,
        marginTop:8
    },
    loginImage : {
        height:40,
        marginRight:SCREEN_WIDTH > 480 ? '45%' : 96
    },
    forgotPasswordText : {
        fontSize:12,
        color:'#fff',
        fontWeight:'700',
        marginBottom:4
    }
})



const mapStateToProps = (state) => ({
  loginData : state.login.loginData
})

const mapDispatchToProps = dispatch => ({
    setUserPrefs : data => dispatch(setUserPrefs(data)),
    setUserType : type => dispatch(setUserType(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
