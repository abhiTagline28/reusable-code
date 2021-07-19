import { emailValidation, PasswordValidation, numberValue, stringValue, stringNumValue, isEmpty } from './regex'

export default (name, value, compareValue, comparePass) => {
    const isValidString = stringValue(value);
    const isEmptyString = isEmpty(value);
    const isNumberString = numberValue(value)
    const isStringNum = stringNumValue(value)

    switch (name) {
        case 'name':
            if (!isValidString) {
                return "Name is Required.";
            } else {
                return false;
            }
        case 'ruless':
            if (value === true) {
                return "Plese Enter Rules"
            } else {
                return false
            }
        case 'clanName':
            if (!isStringNum) {
                return "ClanName is Required.";
            } else {
                return false;
            }
        case 'groupAdate':
            if (!isStringNum) {
                return "Group A date is Required.";
            } else {
                return false;
            }
        case 'groupATime':
            if (!isStringNum) {
                return "Group A Time is Required.";
            } else {
                return false;
            }
        case 'groupBdate':
            if (!isStringNum) {
                return "Group B date is Required.";
            } else {
                return false;
            }
        case 'groupBTime':
            if (!isStringNum) {
                return "Group B Time is Required.";
            } else {
                return false;
            }
        case 'groupCdate':
            if (!isStringNum) {
                return "Group C date is Required.";
            } else {
                return false;
            }
        case 'groupCTime':
            if (!isStringNum) {
                return "Group C Time is Required.";
            } else {
                return false;
            }

        case 'groupDdate':
            if (!isStringNum) {
                return "Group D date is Required.";
            } else {
                return false;
            }
        case 'groupDTime':
            if (!isStringNum) {
                return "Group D Time is Required.";
            } else {
                return false;
            }
        case 'regiStartDate':
            if (!isStringNum) {
                return "regiStartDate is Required.";
            } else {
                return false;
            }
        case 'regiStartTime':
            if (!isStringNum) {
                return "regiStartTime is Required.";
            } else {
                return false;
            }

        case 'regiEndDate':
            if (!isStringNum) {
                return "regiEndDate is Required.";
            } else {
                return false;
            }
        case 'regiEndTime':
            if (!isStringNum) {
                return "regiEndTime is Required.";
            } else {
                return false;
            }
        case 'title':
            if (!isStringNum) {
                return "Title is Required.";
            } else {
                return false;
            }
        case 'pubgId':
            if (!isNumberString) {
                return "PubG Id Must be in Number.";
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
        case 'confirmEmail':
            if (value !== compareValue) {
                return "email must be same.";
            } else {
                return false;
            }

        case 'oldPass':
            const isValids = PasswordValidation(value);
            if (!isEmptyString) {
                return "Password is Required"
            } else if (!isValids) {
                return "Password must be at least 8 characters";
            } else {
                return false;
            }

        case 'password':
            const isValid = PasswordValidation(value);
            if (!isEmptyString) {
                return "Password is Required"
            } else if (!isValid) {
                return "Password must be at least 8 characters";
            } else {
                return false;
            }

        case 'confirmPass':
            if (value !== comparePass) {
                return "password must be same.";
            } else {
                return false;
            }
        case 'country':
            if (!isValidString) {
                return "Country is required.";
            } else {
                return false;
            }
        case 'nationality':
            if (!isValidString) {
                return "Nationality is required.";
            } else {
                return false;
            }
        case 'emailOrPubgId':
            const yes = emailValidation(value);
            if (!isEmptyString) {
                return "Email is Required";
            } else if (!yes) {
                return "Enter a valid email address";
            } else {
                return false;
            }
        case 'hostname':
            if (!isValidString) {
                return "hostName is required.";
            } else {
                return false;
            }
        case 'type':
            if (!isValidString) {
                return "Touranement type is required.";
            } else {
                return false;
            }
        case 'prize':
            if (!isNumberString) {
                return "Prize must be in number";
            } else {
                return false;
            }
        case 'noOfPlayer':
            if (!isNumberString) {
                return "Please Filled any player box";
            } else {
                return false;
            }
        case 'rules':
            if (!isEmptyString) {
                return "Rules must be required";
            } else {
                return false;
            }
        case 'looting':
            if (!isEmptyString) {
                return "looting must be required"
            } else {
                return false
            }
        case 'maps':
            if (!isEmptyString) {
                return "Maps must be required";
            } else {
                return false;
            }
        case 'pubGIdemail': {
            if (!isEmptyString) {
                return "Please Enter email or pubGId"
            } else {
                return false
            }
        }
        case 'mapId':
            if (!isNumberString) {
                return "Map id must be required"
            } else {
                return false
            }
        case 'noOfGroups':
            if (!isNumberString) {
                return "Number of Group must be required"
            } else {
                return false
            }
        case 'mode':
            if (!isValidString) {
                return "Mode must be required"
            } else {
                return false
            }
        case 'noOfclan':
            if (!isNumberString) {
                return "Number of clan Group must be required"
            } else {
                return false
            }
        case 'waitingTime':
            if (!isNumberString) {
                return "Waiting time Must be in Number.";
            } else {
                return false;
            }
        case 'PUBGRoomID':
            if (!isNumberString) {
                return "PubG room Id Must be in Number.";
            } else {
                return false;
            }
        case 'liveLink':
            return true
        case 'Password':
            return true
        case 'roomCreationTime':
            return true
        case 'supervisors':
            return true
        default:
            return false
    }
}
