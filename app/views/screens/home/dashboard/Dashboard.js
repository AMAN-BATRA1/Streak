import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import BaseView from '../../../hod/BaseView';
import { connect } from 'react-redux'
import { SCREEN_WIDTH } from '../../../../values/dimens';
import { screenType } from '../../../../values/strings';
import { changePassword, setLogoutUser } from '../../../../redux/actions/loginActions';
import NetInfo from "@react-native-community/netinfo";


class Dashboard extends Component {

    state = {
        isConnected:true,
    connected:"",
    }


    componentDidMount = () => {
   
         this.unsubscribe = NetInfo.addEventListener(state => {
             this.setState({connected : state.type,isConnected : state.isConnected})
          });
          this._init()
    }


    _init = () => {}

    //Change password
    _onChangePassword = (stuff) => {
        setTimeout(() => {
            
            this.baseViewRef.showLoader()

            const {userPrefs} = this.props;
            const userDetail = userPrefs.data.detail;
            const data = {
                "method":"change_password",
                "username":userDetail.user_name,
                "old_password":stuff.oldPassword,
                "new_password":stuff.newPassword,
            }
            console.log('[Dashboard.js] Change Password : ',stuff,data)

            changePassword(data) 
                .then(response => {
                    this.baseViewRef.hideLoader()
                    if (response['err-code'] == "0" || response['err-code'] === "300"){
                        alert(response.message)
                    }else {
                        alert('Something Went Wrong')
                    }
                })
                .catch(error => {
                    this.baseViewRef.hideLoader()
                    console.log('[Login.js] Error: ',error)
                    alert("Something Went Wrong")
                })


        }, 200);
    }


  render() {

    const {userType} = this.props;

    return (
        <BaseView
            ref={ref=>this.baseViewRef=ref}
            statusBarColor='#517ED6'
        >
        {/* {
            userType === screenType.STUDENT
            &&
            <StudentDashboard 
                {...this.props}
                changePassword={this._onChangePassword}
            />
        }
        
        {
            userType === screenType.PARENT
            &&
            <ParentDashboard 
                {...this.props}
            />
        } */}
        <View style={{flex:1,backgroundColor:"red",alignItems:"center"}}>
<View style={{backgroundColor:"blue",height:"10%",width:"95%",flexDirection:"row"}}>
   <View style={{width:"70%",backgroundColor:"yellow",height:"100%"}}></View> 
   <View style={{width:"30%",backgroundColor:"grey",height:"100%"}}></View>
</View>
        </View>
        </BaseView>
    );
  }
}

const styles = StyleSheet.create({
    parent : {
        flex:1,
        backgroundColor:'#517ED6',
    },
    logoImage : {
        height:'8%',
        width:SCREEN_WIDTH/2,
        alignSelf:'center',
        marginTop:15,
        tintColor:'#fff'
    },
    row : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        flex:1
    }
});


const mapStateToProps = (state) => ({
    userType : state.login.userType,
    userPrefs : state.login.userPrefs
})

const mapDispatchToProps = dispatch => ({
    setLogoutUser : () => dispatch(setLogoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


