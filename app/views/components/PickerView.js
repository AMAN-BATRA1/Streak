import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../values/colors';
import {Icon} from 'react-native-elements'




const PickerView = props => {


    const {style,hasLabel,label,value,isRequired,error,touched,onPress} = props;

    const [focusColor, setFocusColor] = useState(colors.inputViewDefaultColor)

    return (
        <View style={[styles.parent,style]}>
            {
                hasLabel
                &&
                <Text style={[styles.label,{color:focusColor}]}>
                    {label}
                    {isRequired && <Text style={{color:colors.accent}}>*</Text>}
                </Text>
            }
            <TouchableOpacity 
                style={{flex:1}}
                onPress={onPress}>
                <View style={styles.row}>
                    <Text style={styles.valueView}>{value}</Text>
                    <Icon 
                        name={'caret-down'}
                        type={'font-awesome-5'}
                        color={'#7A7A7A'}
                        size={20}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PickerView

const styles = StyleSheet.create({
    parent : {

    },
    label : {
        // fontFamily:fonts.poppinsRegular,
        fontSize:12,
        paddingBottom:4
    },
    valueView : {
        fontSize:12,
        color:'#000',
        flex:1
    },
    row : {
        flexDirection:'row',
        height:40,
        borderWidth:0.5,
        borderRadius:2,
        paddingHorizontal:8,
        backgroundColor:'#fff',
        alignItems:'center'
    }
})
