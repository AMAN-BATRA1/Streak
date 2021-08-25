import React, { Component, useRef } from 'react'
import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'
import { colors } from '../../values/colors'
import { SCREEN_WIDTH } from '../../values/dimens'
// import { fonts } from '../../values/fonts'
import ButtonView from '../components/ButtonView'
import InputView from '../components/InputView'
import BaseModal from '../hod/BaseModal'

class ImageShowModel extends Component {

constructor(props){
    super(props);{
    this.state = {
        username: '',
        Loader:false
    }
}
}
   
LoadingStartFunction=(e)=>{
            this.setState({Loader : true})
}

LoaderEnd=()=>{
    this.setState({Loader : false})   
}


    render() {
        const {ImageUrl} = this.props;
        return (
            <BaseModal
                ref={ref=>this.baseModal = ref}
                // headerTitle={''}
            >
            <View style={styles.parent}>
            {this.state.Loader == true ? 
                    <View style={styles.LoaderStyle}>
                     <ActivityIndicator size="large" color={colors.primary}></ActivityIndicator>
                     </View>
                     : null}
                <Image  
                onLoadStart={()=>this.LoadingStartFunction()} 
                onLoadEnd={()=>this.LoaderEnd()}
                source={{uri: ImageUrl}}  style={styles.Imagestyles}></Image>
            </View>

            <ButtonView 
                    title='Cancel'
                    onPress={() => this.baseModal.hideModal()}
                    containerStyle={styles.ButtonViewStyles}
                    buttonStyle={{backgroundColor:colors.cancelButtonColor}}
                />
            </BaseModal>
        )
    }
}

export default ImageShowModel

const styles = StyleSheet.create({
    parent : {
        width:"85%",
        height:"75%",
        alignItems:"flex-start",
        alignSelf:"center",
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:4,
        marginTop:100,
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"white"
    },
    text : {
        fontSize:12,
        fontWeight:"500",
        color:'white',
        textAlign:"justify",padding:2
    },
    textInput : {
        borderWidth:0.5,
        borderRadius:2,
        marginTop:16,
        borderColor:'#888',
    },
    LoaderStyle:{
        height:"100%",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        },
    Imagestyles:{
        resizeMode:"cover",
        height:"100%",
        width:"100%"
    },
    ButtonViewStyles:{
        marginTop:16,
        width:"85%",
        alignSelf:"center"
    },
})
