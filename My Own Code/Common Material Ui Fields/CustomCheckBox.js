import React from 'react'
import { withStyles, Checkbox } from '@material-ui/core'

export default function CustomCheckBox({ ...props }) {
    const StyledCheckBox = withStyles(theme => ({
        root: {
            padding: props.padding ? props.padding : 9,
            color: props.cbColor ? props.cbColor : '#07B563',
            '&$checked': {
                color: props.cbColor ? props.cbColor : '#07B563',
            },
        },
        checked: {},

    }))(Checkbox);

    return (
        <StyledCheckBox {...props}>
        </StyledCheckBox>
    )
}
