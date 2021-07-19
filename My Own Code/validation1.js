import {
    emailValidation,
    passwordValidation,
    stringValue,
    isEmpty,
    confirmPasswordValidation,
    //projectNameValidation
} from './regex'

let passwordValue = ""
export default (name, value) => {

    const isValidString = stringValue(value);
    const isEmptyString = isEmpty(value);
    if (name === "password") {
        passwordValue = value

    }
    switch (name) {
        case 'first_name':
            if (!isValidString) {
                return "First name is Required.";
            } else {
                return false;
            }
        case 'last_name':
            if (!isValidString) {
                return "Last name is Required.";
            } else {
                return false;
            }
        case 'email':
            const isValidEmail = emailValidation(value);
            if (!isEmptyString) {
                return "Email is Required";
            } else if (!isValidEmail) {
                return "Enter a valid email address";
            } else {
                return false;
            }
        case 'currentPassword':
            const isValidcurrent = passwordValidation(value);
            if (!isEmptyString) {
                return "Password is Required"
            } else if (!isValidcurrent) {
                return "Password must be at least 8 characters";
            } else {
                return false;
            }
        case 'password':
            const isValid = passwordValidation(value);
            if (!isEmptyString) {
                return "Password is Required"
            } else if (!isValid) {
                return "Password must be at least 8 characters";
            } else {
                return false;
            }
        case 'confirmPassword':
            const isValidConfirmPassword = confirmPasswordValidation(passwordValue, value);
            if (!isEmptyString) {
                return "Confirm Password is Required"
            } else if (!isValidConfirmPassword) {
                return "Confirm Password Mismatched";
            } else {
                return false;
            }
        case 'projectName':
            const projectName = projectNameValidation(value);
            if (!isEmptyString) {
                return "Project name is Required"
            } else if (!projectName) {
                return "Project name must be at least 3 characters";
            } else {
                return false;
            }
        default:
            return false
    }
}