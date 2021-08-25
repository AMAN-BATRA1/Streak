import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { colors } from '../../values/colors';
// import { fonts } from '../../values/fonts';

const HeaderView = props => {

    const {parentStyle,hasBack,onBackPress,title,hasCalendarIcon,onCalenderPress} = props;

    return (
        <View style={[styles.parent,parentStyle]}>
            {
                hasBack
                &&
                <TouchableOpacity 
                    style={styles.headerView}
                    onPress={onBackPress}>
                <Icon 
                    name={'arrow-back-sharp'}
                    type={'ionicon'}
                    color={'#fff'}
                />
                </TouchableOpacity>
            }
            <Text style={styles.titleStyle}>{title}</Text>
            {
                hasCalendarIcon
                &&
                <TouchableOpacity 
                    style={styles.notificationView}
                    onPress={onCalenderPress}>
                    <View>
                        <Icon 
                            name={'ios-calendar'}
                            type={'ionicon'}
                            color={'#fff'}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

export default HeaderView

const styles = StyleSheet.create({
    parent : {
        height : 56,
        backgroundColor: colors.primary,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:12,
        
    },
    headerView : {
        position: 'absolute',
        padding:16,
        left:0,
        zIndex: 100
    },
    menuIcon : {
        height:40,
        width:40,
        // padding:8
        // tintColor:colors.accent
    },
    titleStyle : {
        flex:1,
        color:'#fff',
        textAlign:'center',
        fontSize:18,
        fontWeight:'500'
        // fontFamily:fonts.poppinsMedium
    },
    badge : {
        position:'absolute',
        right:0,top:0,
        backgroundColor: '#FA0F2A',
        height:8,
        width:8,
        borderRadius:4,
        zIndex: 100,
    },
    notificationView : { 
        position: 'absolute',
        padding:16,
        right:0,
        zIndex: 100
    }
})
