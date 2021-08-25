import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IS_SCREEN_WIDTH_480_ABOVE } from '../../values/dimens'

const NoDataView = props => {
    return (
        <View style={styles.parent}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.msg}>{props.msg}</Text>
            
        </View>
    )
}

export default NoDataView

const styles = StyleSheet.create({
    parent : {
        alignItems:'center',
        justifyContent:'center',
        marginTop:120
    },
    title : {
        // fontFamily:fonts.ralewaySemiBold,
        fontSize:IS_SCREEN_WIDTH_480_ABOVE ? 24 : 16
    },
    msg : {
        // fontFamily:fonts.ralewayRegular,
        fontSize:IS_SCREEN_WIDTH_480_ABOVE ? 14 : 12
    }
})
