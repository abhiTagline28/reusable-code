import React from 'react'
import { withStyles, Select } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';


export default function CustomSelect({ children, ...props }) {
    const BootstrapInput = withStyles((theme) => ({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
            "& .MuiSelect-icon": {
                color: "#000"
            }
        },
        input: {
            borderRadius: 5,
            position: 'relative',
            border: '2px solid #ced4da',
            fontSize: 16,
            textTransform: "capitalize",
            padding: '10px 26px 10px 15px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            "&:focus": {
                backgroundColor: "transparent",
                borderRadius: 5,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
                padding: '9px 26px 9px 15px',
            },
            // Use the system font instead of the default Roboto font.
        },
    }))(InputBase);

    return (
        <Select input={<BootstrapInput />} {...props}>{children}</Select>
    )
}
