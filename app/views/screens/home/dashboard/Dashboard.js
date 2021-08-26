import React, { Component } from 'react';
import { StyleSheet, View,Image,Text, ScrollView,FlatList,} from 'react-native';
import BaseView from '../../../hod/BaseView';
import { connect } from 'react-redux'
import { SCREEN_WIDTH } from '../../../../values/dimens';
import { screenType } from '../../../../values/strings';
import { changePassword, setLogoutUser } from '../../../../redux/actions/loginActions';
import NetInfo from "@react-native-community/netinfo";
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
let imagepath = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"

class Dashboard extends Component {

    state = {
        isConnected: true,
        connected: "",
        RecentTransactions:[{},{},{}],
        sppinerData:[{},{},{},{}],
    }


    componentDidMount = () => {

        this.unsubscribe = NetInfo.addEventListener(state => {
            this.setState({ connected: state.type, isConnected: state.isConnected })
        });
        this._init()
    }


    _init = () => { }

    //Change password
    _onChangePassword = (stuff) => {
        setTimeout(() => {

            this.baseViewRef.showLoader()

            const { userPrefs } = this.props;
            const userDetail = userPrefs.data.detail;
            const data = {
                "method": "change_password",
                "username": userDetail.user_name,
                "old_password": stuff.oldPassword,
                "new_password": stuff.newPassword,
            }
            console.log('[Dashboard.js] Change Password : ', stuff, data)

            changePassword(data)
                .then(response => {
                    this.baseViewRef.hideLoader()
                    if (response['err-code'] == "0" || response['err-code'] === "300") {
                        alert(response.message)
                    } else {
                        alert('Something Went Wrong')
                    }
                })
                .catch(error => {
                    this.baseViewRef.hideLoader()
                    console.log('[Login.js] Error: ', error)
                    alert("Something Went Wrong")
                })


        }, 200);
    }


    render() {

        const { userType } = this.props;

        return (
            <BaseView
                ref={ref => this.baseViewRef = ref}
                statusBarColor='#517ED6'
            >
                {/* {
            userType === screenType.STUDEN
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
        
                <View horizontal={false} contentContainerStyle={{ backgroundColor: "white", alignItems: "center" }}>
                <LinearGradient colors={['#581845', '#b867a0', '#e2b1d4']}style={{height:400,width:"100%",backgroundColor:"yellow",alignItems:"center"}}>
                    <View style={{ backgroundColor: "transparent", height: "20%", width: "95%", flexDirection: "row" }}>
                        <View style={{ width: "70%", backgroundColor: "transparent", height: "100%" }}></View>
                        <View style={{ width: "30%", backgroundColor: "transparent", height: "100%",justifyContent:"flex-end",alignItems:"center" }}>
                            <View style={{ height: "45%", width: "80%", shadowColor: "grey", elevation: 10,justifyContent:"flex-start",alignItems:"center",
                             shadowOffset: { heigth: 2, width: 0 }, shadowOpacity: .5,backgroundColor:"#581845",borderRadius:20,flexDirection:"row" }}>
                                 <Image source={{imagepath}} style={{width:26,height:26,borderRadius:24,backgroundColor:"white",marginStart:5}} ></Image>
                                 <Text style={{color:"white"}}> Andy</Text>
                                 <Icon name="CaretDownOutlined" type="ant-design" color="white"></Icon>
                             </View>
                        </View>
                    </View>
                    
                    <View style={{width:"90%",height:"50%",backgroundColor:"white",borderRadius:10,marginTop:18}}>
                        <View style={{width:"100%",backgroundColor:"white",borderTopEndRadius:10,borderTopStartRadius:10,flexDirection:"row"}}>
                            <View style={{width:"50%",backgroundColor:"transparent",paddingStart:20}}>
                                <Text style={{color:"silver",marginTop:16,fontSize:18,fontWeight:"600"}}>Balance</Text>
                                <Text style={{color:"black",marginTop:8,fontSize:30,fontWeight:"600"}}>$12,000</Text>
                            </View>
                            <View style={{width:"50%",backgroundColor:"transparent",alignItems:"flex-end"}}>
<View style={{height:47,width:47,backgroundColor:"#f1f1f1",borderRadius:47,marginEnd:20,marginTop:14,elevation:10}}>
{/* <Icon></Icon> */}
</View>
                            </View>
                        </View>
                        <View style={{width:"100%",backgroundColor:"white",borderTopEndRadius:10,borderTopStartRadius:10,}}>
                            <View style={{width:"100%",backgroundColor:"transparent",paddingStart:20}}>
                                <Text style={{color:'#e2b1d4',marginTop:12,fontSize:16,fontWeight:"600"}}>Savings</Text>
                              
                            </View>
                            <View style={{width:"100%",backgroundColor:"transparent",flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                            <Text style={{color:"#581845",marginTop:8,fontSize:30,fontWeight:"600",paddingStart:20}}>$36,800</Text>
                            </View>
                            <View style={{width:"50%",justifyContent:"center",alignItems:"flex-end"}}>
<View style={{height:40,width:98,backgroundColor:"white",borderRadius:47,marginEnd:20,elevation:10,alignItems:'center',justifyContent:"center"}}>
    <Text style={{color:"#581845",fontWeight:"600"}}>Save more</Text>
</View>
</View>
                            </View>
                        </View>
                    </View>

                    <View style={{height:"25%",width:"90%",backgroundColor:"transparent",alignItems:"center",justifyContent:"space-between",flexDirection:"row",}}>
                        <View style={{height:"70%",width:"50%",backgroundColor:"#581845",borderRadius:15,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <Text style={{color:"white",fontWeight:"600",fontSize:18}}>Scan code</Text>
                            <View style={{height:34,width:34,borderRadius:34,backgroundColor:"#e2b1d4",marginStart:10}}></View>
                        </View>
                        <View style={{height:"70%",width:"20%",backgroundColor:"#581845",borderRadius:15,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>

                        </View>
                        <View style={{height:"70%",width:"20%",backgroundColor:"#581845",borderRadius:15,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>

                        </View>
                    </View>
                    </LinearGradient>
                    

                    <View style={{width:"100%",backgroundColor:"white",alignItems:"center",}}>
                        {/* <View style={{marginTop:30,width:"90%",backgroundColor:"#f0f5f6",borderRadius:10,elevation:15,shadowColor:"grey",shadowOffset:{height:2,width:0},shadowOpacity:.10}}>
                            <Text style={{color:"#581845",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:30,paddingStart:20}}>Recent transactions</Text>
                            <FlatList data={this.state.RecentTransactions} renderItem={(item)=>
                            <View style={{width:"100%",backgroundColor:"transparent",justifyContent:"space-around",alignItems:"center",flexDirection:"row",borderBottomWidth:.5,borderColor:"grey"}}>
                                <View style={{paddingStart:14,width:"20%"}}>
<Image style={{height:60,width:60,borderRadius:47,backgroundColor:"#e2b1d4",borderWidth:.5,borderColor:"grey",marginBottom:18,marginTop:18}}></Image>
</View>
<View style={{width:"55%",paddingStart:16}}>
    <Text style={{fontSize:18,fontWeight:"600"}}>Food & Drinks</Text>
    <Text style={{fontSize:14,fontWeight:"600",color:"grey"}}>02:30 pm</Text>
</View>
<View style={{width:"25%",alignItems:"flex-end",justifyContent:"center"}}>
    <Text style={{fontSize:18,fontWeight:"600",color:"black",paddingEnd:20}}>-$50</Text>
</View>
                            </View>
}></FlatList>
<View style={{width:"100%",backgroundColor:"f9f9f9"}}>
<Text style={{color:"#e208db",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:30,paddingStart:20}}>All transactions ></Text>
</View>

                        </View> */}
                        
                 
                    {/* <View style={{marginTop:30,width:"90%",backgroundColor:"#f0f5f6",borderRadius:10,elevation:15,shadowColor:"grey",shadowOffset:{height:2,width:0},shadowOpacity:.5}}>
                    <Text style={{color:"#00008B",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:10,paddingStart:20}}>Andy Savings</Text>  
                    <Text style={{color:"#0000FF",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:30,paddingStart:20}}>
                        Saved a total of <Text style={{color:"black"}}>$6480 </Text><Text>this month {"\n"}and is close to achiving one goal</Text></Text>
                        <View style={{width:"90%",backgroundColor:"white",alignItems:"center",alignSelf:"center",justifyContent:"center",borderBottomWidth:.2,borderColor:"grey",
                        elevation:15,shadowColor:"grey",shadowOffset:{height:2,width:0},shadowOpacity:.5,borderRadius:10,flexDirection:"row"}}>
                            <View style={{width:"1%",height:50,backgroundColor:"silver",marginBottom:10,marginTop:10}}></View>
                            <View style={{width:"90%",backgroundColor:"white",justifyContent:"center",padding:10}}>
                                <Text style={{fontSize:16,color:"#00008B"}}>Playstation 5</Text>
                                <Text style={{color:"black",fontSize:16,fontWeight:"600"}}>$36,480 saved <Text style={{color:"#0000FF"}}>of $40,000 goal</Text></Text>
                            </View>
                        </View>
                        <View style={{width:"100%",backgroundColor:"f9f9f9",borderTopWidth:.5,borderColor:"grey",marginTop:30}}>
<Text style={{color:"#0000FF",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:20,paddingStart:20}}>Add and view goals ></Text>
</View>


                    </View> */}
                    <View style={{marginTop:30,width:"90%",backgroundColor:"#e2c2ac",borderRadius:10,elevation:15,shadowColor:"grey",shadowOffset:{height:2,width:0},shadowOpacity:.5}}>
                    <Text style={{color:"#482c19",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:10,paddingStart:20}}>Game Of the day</Text> 
<View style={{width:"90%",backgroundColor:"transparent",alignSelf:"center",borderWidth:1,borderColor:"#d7ac8e",borderRadius:10,justifyContent:"space-around"}}>
    <FlatList horizontal contentContainerStyle={{justifyContent:"space-between",alignItems:"center"}} data={this.state.sppinerData} renderItem={(item)=>
    <View style={{backgroundColor:"#bf7a4a",borderRadius:10,marginStart:10,margin:8}}>
<Text style={{fontSize:50,padding:16,color:"#702e00"}}>8</Text>
    </View>
}></FlatList>
</View>

<Text style={{alignSelf:"center",padding:10,fontWeight:"600",fontSize:16,color:"#482c19"}}>Win prizes worth $4000 or more</Text>

<View style={{height:"10%",width:"30%",backgroundColor:"#bf7a4a"}}></View>
<View style={{width:"100%",backgroundColor:"f9f9f9",borderTopWidth:.5,borderColor:"grey",marginTop:30}}>
<Text style={{color:"#0000FF",fontWeight:"700",lineHeight:22,fontSize:18,marginTop:20,marginBottom:20,paddingStart:20}}>Add and view goals ></Text>
</View>
                        </View>     

                    </View>
                {/* </View> */}
                </View>
            </BaseView>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#517ED6',
    },
    logoImage: {
        height: '8%',
        width: SCREEN_WIDTH / 2,
        alignSelf: 'center',
        marginTop: 15,
        tintColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1
    }
});


const mapStateToProps = (state) => ({
    userType: state.login.userType,
    userPrefs: state.login.userPrefs
})

const mapDispatchToProps = dispatch => ({
    setLogoutUser: () => dispatch(setLogoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


