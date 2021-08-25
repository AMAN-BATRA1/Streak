import React, { Component, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'
import { colors } from '../../values/colors'
import { SCREEN_WIDTH } from '../../values/dimens'
// import { fonts } from '../../values/fonts'
import ButtonView from '../components/ButtonView'
import InputView from '../components/InputView'
import BaseModal from '../hod/BaseModal'

class CalenderHover extends Component {


    state = {
        username: ''
    }



    render() {
        return (
            <BaseModal
                ref={ref=>this.baseModal = ref}
                // headerTitle={''}
            >
            <View style={styles.parent}>
                <Text style={styles.text}>Week Ends</Text>
                <Text style={styles.text}>Start : Fri 07:00 AM</Text>
                <Text style={styles.text}>Ends : sat 10:00 PM</Text>
            </View>
            </BaseModal>
        )
    }
}

export default CalenderHover

const styles = StyleSheet.create({
    parent : {
        width:"50%",
        alignItems:"flex-start",
        alignSelf:"center",
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:4,
        marginBottom:200,
        backgroundColor:"black",
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
    }
})
