import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const imageOptions = {
    mediaType: 'photo',
    maxWidth: 600,
    maxHeight: 600
}

export const capturedImage = (hasBase64 = false) => new Promise((resolve) => {
    launchCamera(imageOptions,response => {

        console.log('[ImageLoader.js] Camera Image : ',response)
        if(response.didCancel){
            return;
        }else if(response.errorCode === 'camera_unavailable'){
            alert('Camera is unavailable.')
            return;
        }

        const asset = response.assets[0]

        const image = {
            uri : asset.uri,
            name : asset.fileName,
            type : asset.type,
        }

        // if(hasBase64){
        //     image.base64 = `data:image/jpeg;base64,${asset.base64}`
        // }

        // console.log('[ImageLoader.js] Camera Image : ',response)
        resolve(image)
    })
})


export const getGalleryImage = (hasBase64 = false) => new Promise((resolve) => {
    launchImageLibrary(imageOptions,response => {

        if(response.didCancel){
            return;
        }
        
        const asset = response.assets[0]

        const image = {
            uri : asset.uri,
            name : asset.fileName,
            type : asset.type,
        }

        // if(hasBase64){
        //     image.base64 = `data:image/jpeg;base64,${asset.base64}`
        // }

        // console.log('[ImageLoader.js] Gallery Image : ',response)
        resolve(image)

    })
})