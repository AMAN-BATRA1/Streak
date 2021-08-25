import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'
import { SCREEN_WIDTH } from '../../values/dimens'
import HeaderModal from '../components/HeaderModal'
// import * as Animatable from 'react-native-animatable';



class BaseModal extends Component {

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
        const {children,headerTitle} = this.props;
        const {isVisible} = this.state;
        return (
            <Overlay 
                isVisible={isVisible}
                onBackdropPress={() => this.hideModal()}
                // style='overflow'
                style={styles.parent}
                overlayStyle={styles.overlayStyle}
            >       
                {/* <Animatable.View
                    animation='bounceIn'
                >
                 {headerTitle  ? <HeaderModal 
                        title={headerTitle}
                        onCrossPress={() => this.hideModal()}
                    /> : null}
                    {children}
                </Animatable.View> */}
            </Overlay>
        )
    }
}

export default BaseModal

const styles = StyleSheet.create({
    parent : {
        backgroundColor:'transparent',
    },
    overlayStyle : {
        padding:0,
        width:SCREEN_WIDTH > 480 ? SCREEN_WIDTH/2+48 : SCREEN_WIDTH-48,
       
        backgroundColor:'transparent'
    }
})
