import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {colors, Icon,Image} from 'react-native-elements';
import { SCREEN_WIDTH } from '../../../../../values/dimens';

const ItemView = props => {

    const {style,hasImage,imageSource,title,iconName,iconType,iconColor,
            iconSize, onPress} = props;

    return (
        <TouchableOpacity
            onPress={onPress}
        >
        <View style={[styles.parent,style]}>
            <View style={styles.imageView}>
                {
                    hasImage
                    ?
                    <Image 
                        source={imageSource}
                        style={styles.image}
                        PlaceholderContent={
                            <Icon 
                                name='graduation-cap'
                                type='entypo'
                                color={'#517ED6'}
                                size={48}
                            />
                        }
                        placeholderStyle={{backgroundColor:'#fff'}}
                    />
                    :
                    <Icon 
                        name={iconName}
                        type={iconType}
                        size={iconSize ? iconSize : (SCREEN_WIDTH>480 ? 72 : 48)}
                        color={iconColor ? iconColor : '#517ED6'}
                    />
                }
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default ItemView

const styles = StyleSheet.create({
    parent : {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    image : {
        height:SCREEN_WIDTH>480 ? 120 : 72,
        width:SCREEN_WIDTH>480 ? 120 : 72,
        borderRadius:SCREEN_WIDTH>480 ? 60 : 36
    },
    imageView : {
        height:SCREEN_WIDTH>480 ? 144 : 90,
        width:SCREEN_WIDTH>480 ? 144 : 90,
        backgroundColor:'#fff',
        borderRadius:SCREEN_WIDTH>480 ? 72 : 48,
        alignItems:'center',
        justifyContent:'center'
    },
    title : {
        fontSize:12,
        marginTop:4,
        color:'#fff',
        fontWeight:'700'
    }
})
