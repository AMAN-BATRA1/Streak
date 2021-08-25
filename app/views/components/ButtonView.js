import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { colors } from '../../values/colors';

const ButtonView = props => {

    const {title,containerStyle,buttonStyle,titleStyle,onPress,iconPosition,icon} = props;

    return (
        <Button
            title={title}
            containerStyle={[styles.containerStyle,containerStyle]}
            buttonStyle={[styles.buttonStyle,buttonStyle]}
            titleStyle={[styles.titleStyle,titleStyle]}
            onPress={onPress}
            iconPosition={iconPosition}
            icon={icon}
        />
    )
}

export default ButtonView

const styles = StyleSheet.create({
    containerStyle:{
        height:40
    },
    buttonStyle:{
        height:40,
        backgroundColor:colors.primary
    },
    titleStyle : {
        fontSize:14,
        color:'#fff'
    }
})
