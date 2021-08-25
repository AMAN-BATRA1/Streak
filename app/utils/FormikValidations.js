import * as yup from 'yup'

const passwordCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const passwordError = 'Min 8 Characters, one number and one special'


// export const loginValidationSchema = yup.object().shape({
//     employeeId : yup.string().required('Please Enter your Employee ID.'),
//     lastName : yup.string().required('Please Enter your Last Name.')
// })


export const forgotPasswordValidationSchema = yup.object().shape({
    userName : yup.string().required('Please Enter your User Name.'),
})


export const applyForLeaveValidations = yup.object().shape({
    startDate : yup.string().required('Select Start Date.'),
    startTime : yup.string().required('Select Start Time.'),
    endDate : yup.string().required('Select End Date.'),
    endTime : yup.string().required('Select End Time.'),
    approvedHost : yup.object().required('Select Approval Host.').nullable(true),
    departureMode : yup.object().required('Select Departure Mode.').nullable(true),
    returnMode : yup.object().required('Select Return Mode.').nullable(true),
})


export const changePasswordValidation = yup.object().shape({
    oldPassword : yup.string().required('Please Enter new Password.'),
    newPassword : yup.string().required('Please Enter new Password.'),
    confirmPassword : yup.string().required('Please Enter confirm Password.')
            .oneOf([yup.ref('newPassword'), null], 'Both Passwords must match')
})


// export const clockOnValidations = yup.object().shape({
//     site : yup.object().required('Please select your Site.').nullable(true),
//     userImage : yup.object().required('Please click your Image.').nullable(true),
//     estimatedTime : yup.string().required('Please select estimated time.').nullable(true)
// })

// export const clockOffValidations = yup.object().shape({
//     site : yup.object().required('Please select your Site.').nullable(true),
//     clockOnTime : yup.string().required('No Time Available').nullable(true),
//     // estimatedFinishTime : yup.string().required('Please select estimated time.').nullable(true)
// })



// export const chooseClientValidationInInduction = yup.object().shape({
//     site : yup.object().required('Please select Site.').nullable(true),
//     client : yup.object().required('Please select Client.').nullable(true),
//     group : yup.object().required('Please select group.').nullable(true),
// })
