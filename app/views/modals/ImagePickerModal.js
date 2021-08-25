import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { capturedImage, getGalleryImage } from '../../utils/ImageLoader';
import BaseBottomSheet from '../hod/BaseBottomSheet';

export default class ImagePickerModal extends Component {


    _cameraImage = () => {
        capturedImage()
         .then(response => {
            this._setImage(response)
         })
    }


    _galleryImage = () => {
        getGalleryImage()
            .then(response => {
                this._setImage(response)
            })
    }


    _setImage = image => {
        this.props.setImage(image);
        this.baseBottomSheet.hideModal();
    }


    render() {
        return (
            <BaseBottomSheet
                ref={ref=>this.baseBottomSheet=ref}
                title={'Select Approval Host'}
            >
            <View style={styles.parent}>
                
                <TouchableOpacity
                    onPress={() => this._cameraImage()}
                >
                <View style={styles.itemView}>  
                    <Text style={styles.itemText}>Camera</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this._galleryImage()}
                >
                <View style={styles.itemView}>  
                    <Text style={styles.itemText}>Photos</Text>
                </View>
                </TouchableOpacity>

                
            </View>
            </BaseBottomSheet>
        ) 
    }
}


const styles = StyleSheet.create({
    parent : {
        backgroundColor:'#fff',
        borderRadius:4,
        paddingHorizontal:24
    },
    itemView : {
        height:48,
        borderBottomWidth:1,
        borderBottomColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center'
    },
    itemText : {
        fontSize:16,
        color:'#1F1F1F',
        fontWeight:'700'
    }
});

