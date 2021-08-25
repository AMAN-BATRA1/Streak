import { Formik } from 'formik'
import React, { Component, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'
import { changePasswordValidation } from '../../utils/FormikValidations'
import { colors } from '../../values/colors'
import { SCREEN_WIDTH } from '../../values/dimens'
// import { fonts } from '../../values/fonts'
import ButtonView from '../components/ButtonView'
import InputView from '../components/InputView'
import BaseModal from '../hod/BaseModal'

class ChangePassword extends Component {


    state = {
        oldPassword: 'Test1234',
        newPassword: 'Test1234',
        confirmPassword: 'Test1234'
    }

    onChangePassword = () => {
        const {oldPassword,newPassword,confirmPassword} = this.state;

        const data = {
            oldPassword: oldPassword, 
            newPassword: newPassword
        }
        this.props.setPasswordStuff(data)
        this.baseModal.hideModal()
    }


    render() {

        const {oldPassword,newPassword,confirmPassword} = this.state;

        return (
            <BaseModal
                ref={ref=>this.baseModal = ref}
                headerTitle={'Password Stuff'}
            >
            <Formik
                initialValues={{
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                    confirmPassword: confirmPassword,
                }}
                validationSchema={changePasswordValidation}
                onSubmit={() => this.onChangePassword()}
                enableReinitialize
            >
                {
                    ({handleSubmit,errors,touched}) => (
                        <View style={styles.parent}>
                            <InputView 
                                hasLabel
                                label='Old Password'
                                placeholder={'Enter old password'}
                                value={oldPassword}
                                onChangeText={text => this.setState({oldPassword:text})}
                                textInputStyle={styles.textInput}
                                style={[styles.textInputParent,{marginTop:0}]}
                                error={errors.oldPassword}
                                touched={touched.oldPassword}
                                secureTextEntry
                            />
                            <InputView 
                                hasLabel
                                label='New Password'
                                placeholder={'Enter new password'}
                                value={newPassword}
                                onChangeText={text => this.setState({newPassword:text})}
                                textInputStyle={styles.textInput}
                                style={styles.textInputParent}
                                error={errors.newPassword}
                                touched={touched.newPassword}
                                secureTextEntry

                            />
                            <InputView 
                                hasLabel
                                label='Confirm Password'
                                placeholder={'Confirm new password'}
                                value={confirmPassword}
                                onChangeText={text => this.setState({confirmPassword:text})}
                                textInputStyle={styles.textInput}
                                style={styles.textInputParent}
                                error={errors.confirmPassword}
                                touched={touched.confirmPassword}
                                secureTextEntry
                            />
                            <ButtonView 
                                title={'Change Password'}
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

export default ChangePassword

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
    textInputParent : {
        marginTop:16,
    },
    textInput : {
        borderWidth:0.5,
        borderRadius:2,
        borderColor:'#888',
        fontWeight:'600'
        // fontSize:12
    }
})
