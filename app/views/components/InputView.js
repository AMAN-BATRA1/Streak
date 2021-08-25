import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../values/colors';
// import { fonts } from '../../values/fonts'

const InputView = props => {


    const {style,hasLabel,label,placeholder,value,onChangeText,secureTextEntry,
        keyboardType,maxLength,isRequired,error,touched,textInputStyle,editable
    } = props;

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
            <TextInput 
                style={[styles.textInput,{borderColor:focusColor},textInputStyle]}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholderColor}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
                onFocus={() => setFocusColor(colors.inputViewFocusColor)}
                onBlur={() => setFocusColor(colors.inputViewDefaultColor)}
                editable={editable}
                // accessible={false}
            />
            {
                touched && error &&
                <Text style={styles.error}>{error}</Text>
            }
        </View>
    )
}

export default InputView

const styles = StyleSheet.create({
    parent : {

    },
    label : {
        // fontFamily:fonts.poppinsRegular,
        fontSize:12,
        paddingBottom:4
    },
    textInput : {
        height:40,
        // fontFamily:fonts.poppinsRegular,
        fontSize:12,
        borderWidth:0.5,
        borderRadius:2,
        paddingHorizontal:8,
        backgroundColor:'#fff',
        color:'#000'
    },
    error : {
        fontSize:10,
        color:'red',
        // fontFamily:fonts.ralewayRegular,
        marginTop:4,
        marginLeft:8
    }
})
