import React from 'react'
import { withStyles, Button } from '@material-ui/core'

export default function CustomButton({ borderColor, fontColor, radius, boxShadow, children, bgColor, bgHoverColor, fontSize, btnPadding, resBtnWidth, ...props }) {
    const StyledButton = withStyles(theme => ({
        root: {
            border: `${borderColor ? `2px solid  ${borderColor}` : "transparent"}`,
            padding: btnPadding ? `${btnPadding}` : 20,
            width: resBtnWidth ? `${resBtnWidth}` : 'auto',
            borderRadius: `${radius}px`,
            fontWeight: "700",
            boxShadow: boxShadow ? `${boxShadow}` : 'none',
            [theme.breakpoints.down('sm')]: {
                minWidth: 'auto',
            },
            background: bgColor || 'linear-gradient(180deg, #0AB799 0%, #1FEE8B 98.1%)',
            '&:hover': {
                background: bgHoverColor || 'linear-gradient(180deg, #1FEE8B 0%, #0AB799 98.1%)',
                boxShadow: "none",
                '& .MuiButton-label': {
                    color: fontColor
                }
            },
            '&:disabled': {
                background: '#F5F5F5 !important',
                border: "2px solid #D4D6D8",
                "& .MuiButton-label": {
                    color: "#797979"
                }
            }
        },
        label: {
            textTransform: "uppercase",
            fontSize: fontSize ? `${fontSize}px` : 16,
            [theme.breakpoints.down('xs')]: {
                fontSize: 14,
            },
            lineHeight: '1',
            color: fontColor ? fontColor : '#fff',
        },

    }))(Button);

    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}
