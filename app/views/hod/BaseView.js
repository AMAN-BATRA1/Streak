import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { Overlay } from 'react-native-elements';
import { colors } from '../../values/colors';
// import { fonts } from '../../values/fonts';
import HeaderView from '../components/HeaderView';
import MyStatusBar from '../components/MyStatusBar';

export default class BaseView extends Component {

    state = {
        loader : false,
    }


    showLoader = () => {
        this.setState({ loader : true})
    }

    hideLoader = () => {
        this.setState({ loader : false})
    }

    onMenuPress = () => {
        // console.log('[BaseView.js] Menu press : ',this.props)
        this.props.navigation.toggleDrawer()
    }

    onSettingPress = () => {
        this.props.navigation.navigate('Settings')
    }


    render() {
        
        const {children,statusBarColor,headerTitle,navigation,hasHeader,hasBackButton,
                hasHeaderCalendarIcon, onCalenderPress, parentStyle } = this.props;
        const {loader} = this.state;

        return (
            <View style={[styles.parent,parentStyle]}>
                <MyStatusBar statusBarColor={statusBarColor ? statusBarColor : colors.primary}/>
                {
                    hasHeader
                    && 
                    <HeaderView 
                        title={headerTitle}
                        // onNotificationPress={() => navigation.navigate('Splash')}
                        hasBack={hasBackButton}
                        onBackPress={() => this.props.navigation.goBack()}
                        hasCalendarIcon={hasHeaderCalendarIcon}
                        onCalenderPress={onCalenderPress}
                    />
                }
                <KeyboardAvoidingView 
                    style={{flex: 1}}
                    
                >
                <View style={{flex: 1}}>
                {children}
                </View>
                </KeyboardAvoidingView>
                <Overlay
                    isVisible={loader}
                    overlayStyle={{padding:24}}
                >
                    <ActivityIndicator 
                        size='large'
                        color={colors.primary}
                    />
                    <Text style={styles.waitText}>Please wait...</Text>
                </Overlay>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent : {
        flex:1,
        // marginBottom:Platform.OS === 'android' ? 0 : 16
    },
    waitText : {
        // fontFamily:fonts.poppinsMedium,
        fontSize:12,
        color:colors.primary
    }
    
})