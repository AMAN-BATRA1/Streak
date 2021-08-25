import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '../../values/colors'
// import { fonts } from '../../values/fonts'

const HeaderBottomView = props => {
    return (
        <View style={styles.parent}>
            <Text style={styles.header}>{props.title}</Text>
        </View>
    )
}

export default HeaderBottomView

const styles = StyleSheet.create({
    parent : {
        height : 48,
        backgroundColor:colors.primary,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:12,
        borderTopRightRadius:4,
        borderTopLeftRadius:4
    },
    header : {
        // fontFamily:fonts.poppinsMedium,
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    },

})
