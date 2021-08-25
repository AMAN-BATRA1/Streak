import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheet } from 'react-native-elements'
import { colors } from '../../values/colors'
import ButtonView from '../components/ButtonView'
import HeaderBottomView from '../components/HeaderBottomView'


class BaseBottomSheet extends Component {

    state = {
        isVisible : false
    }

    showModal = () => {
        this.setState({ isVisible : true})
    }

    hideModal = () => {
        this.setState({ isVisible : false})
    }

    render(){
        const {children,title,hasHeader} = this.props;
        const {isVisible} = this.state;
        return (
            <BottomSheet 
                isVisible={isVisible}
                containerStyle={styles.containerStyle}
            >      
                {
                    hasHeader
                    &&
                    <HeaderBottomView 
                        title={title}
                    /> 
                }
                {children}
                <ButtonView 
                    title='Cancel'
                    onPress={() => this.hideModal()}
                    containerStyle={{marginTop:16}}
                    buttonStyle={{backgroundColor:colors.cancelButtonColor}}
                />
            </BottomSheet>
        )
    }
}

export default BaseBottomSheet

const styles = StyleSheet.create({
    parent : {
        
    },
    containerStyle : {
        backgroundColor:'#00000080',
        padding:16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})
