import { Formik } from 'formik'
import React, { Component, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'
import { forgotPasswordValidationSchema } from '../../utils/FormikValidations'
import { colors } from '../../values/colors'
import { SCREEN_WIDTH } from '../../values/dimens'
// import { fonts } from '../../values/fonts'
import ButtonView from '../components/ButtonView'
import InputView from '../components/InputView'
import BaseModal from '../hod/BaseModal'

class ForgotPassword extends Component {


    state = {
        username: 'E196_9_test'
    }

    onForgotPasswordPress = () => {
        this.props.onForgotPassword(this.state.username);
        this.baseModal.hideModal()
    }




    render() {

        const {username} = this.state;

        return (
            <BaseModal
                ref={ref=>this.baseModal = ref}
                headerTitle={'Forgot Password'}
            >
            <Formik
                initialValues={{
                    userName: username,
                }}
                validationSchema={forgotPasswordValidationSchema}
                onSubmit={() => this.onForgotPasswordPress()}
                enableReinitialize
            >
                {
                    ({handleSubmit,errors,touched}) => (
                        <View style={styles.parent}>
                            <Text style={styles.text}>If the information entered is associated with an account we have sent you a reset password link.</Text>
                            <InputView 
                                placeholder={'Enter your Username'}
                                value={username}
                                onChangeText={text => this.setState({username:text})}
                                style={styles.textInput}
                                error={errors.userName}
                                touched={touched.userName}
                            />
                            <ButtonView 
                                title={'Forgot Password'}
                                containerStyle={{marginTop:24}}
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    )
                }
            </Formik>
            </BaseModal>
        )
    }
}

export default ForgotPassword

const styles = StyleSheet.create({
    parent : {
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:'#fff',
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
    },
    text : {
        fontSize:12,
        color:'#888',
        // fontFamily:fonts.poppinsRegular
    },
    textInput : {
        // borderWidth:0.5,
        // borderRadius:2,
        marginTop:16,
        borderColor:'#888',
        // fontSize:12
    }
})
