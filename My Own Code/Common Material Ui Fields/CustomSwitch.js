import React from 'react'
import { withStyles, Switch } from '@material-ui/core'

export default function CustomSwich({ children, bgColor, thumbColor, activeThumbColor, activeBgColor, ...props }) {
    const StyledSwitch = withStyles(theme => ({
        root: {
            width: 48,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
            [theme.breakpoints.down('xs')]: {
                "& .MuiSvgIcon-root": {
                    width: 16,
                    height: 16,
                }
            }
        },
        switchBase: {
            padding: 3,
            color: thumbColor,
            '&$checked': {
                transform: 'translateX(22px)',
                color: "#fff",
                '& + $track': {
                    background: "linear-gradient(180deg, #0AB799 0%, #1FEE8B 98.1%)",
                    opacity: 1,
                    border: '0',
                },
            },
            '&$focusVisible $thumb': {
                color: thumbColor,
            },
        },
        thumb: {
            width: 20,
            height: 20,

        },
        track: {
            borderRadius: 26 / 2,
            backgroundColor: "#000",
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {
            transform: 'translateX(28px)',
            color: activeThumbColor,
            '& + $track': {
                backgroundColor: "#fff",
                opacity: 1,
                border: '0',
            }
        }

    }))(Switch);

    return (
        <StyledSwitch {...props}>
            {children}
        </StyledSwitch>
    )
}
