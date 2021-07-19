import React from 'react'
import { withStyles, TextField } from '@material-ui/core'

const StyledTextField = withStyles(theme => ({
    root: {
        '& .MuiInputLabel-root': {
            color: '#000',
            fontSize: 14,
            textTransform: 'capitalize',
            paddingLeft: '17px',
        },
        '& .MuiInputBase-formControl': {
            borderRadius: 5,
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FEE8B'
            }
        },
        "& .MuiFilledInput-underline:before, .MuiFilledInput-underline:after": {
            content: "normal"
        },
        '& .MuiInputBase-input': {
            color: '#ffffff',
            fontSize: 16,
            padding: '10px 15px',
            borderRadius: 5,
            height: 30,
            '&:-webkit-autofill': {
                animation: 'none !important'
            },
            '&::placeholder': {
                color: "#ffffff",
                opacity: 1
            },
            "&:-webkit-autofill": {
                WebkitTextFillColor: '#fff',
                WebkitBoxShadow: '0 0 0px 1000px rgba(0,0,0,0) inset',
                transition: 'background-color 5000s ease-in-out 0s',
            },
            "&:-webkit-autofill:hover": {
                WebkitTextFillColor: '#fff',
                WebkitBoxShadow: '0 0 0px 1000px rgba(0,0,0,0) inset',
                transition: 'background-color 5000s ease-in-out 0s',
            },
            "&-webkit-autofill:focus": {
                WebkitTextFillColor: '#fff',
                WebkitBoxShadow: '0 0 0px 1000px rgba(0,0,0,0) inset',
                transition: 'background-color 5000s ease-in-out 0s',
            }

        },
        '& .MuiInputBase-root': {
            '& .MuiInputAdornment-positionEnd': {
                paddingRight: theme.spacing(1) + 2,
                color: '#666666cc'
            }
        },
        '& .MuiOutlinedInput-root.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FEE8B'
            }
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FEE8B',
                borderWidth: 1
            }
        },

    }
}))(TextField)

export default function CustomTextField({ ...props }) {
    return (
        <StyledTextField {...props} />
    )
}
