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
                borderColor: '#D4D6D8',
                borderWidth: 2,
            }
        },
        "& .MuiFilledInput-underline:before, .MuiFilledInput-underline:after": {
            content: "normal"
        },
        '& .MuiInputBase-input': {
            color: '#000',
            fontSize: 16,
            padding: '10px 15px',
            borderRadius: 5,
            height: 22,
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
                height: 20,
            },
            '&:-webkit-autofill': {
                animation: 'none !important'
            },
            '&::placeholder': {
                color: "#797979",
                opacity: 1
            },

        },
        '& .MuiInputBase-root': {
            '& .MuiInputAdornment-positionEnd': {
                paddingRight: theme.spacing(1) + 2,
                color: '#666666cc'
            }
        },
        '& .MuiOutlinedInput-root.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D4D6D8'
            }
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D4D6D8',
                borderWidth: 2
            }
        },

    }
}))(TextField)

export default function CustomTextField({ ...props }) {
    return (
        <StyledTextField {...props} />
    )
}
