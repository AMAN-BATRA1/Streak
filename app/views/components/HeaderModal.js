import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '../../values/colors'
// import { fonts } from '../../values/fonts'

const HeaderModal = props => {
    return (
        <View style={styles.parent}>
            <Text style={styles.header}>{props.title}</Text>
            <TouchableOpacity
                onPress={props.onCrossPress}
                style={{padding:12}}
            >
                <Icon 
                    name='close'
                    type='ant-design'
                    color='#fff'
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderModal

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
        fontSize:16
    },

})
