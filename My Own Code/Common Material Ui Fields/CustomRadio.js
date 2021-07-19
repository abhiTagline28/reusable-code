import React from 'react'
import { withStyles, Radio } from '@material-ui/core'

export default function CustomCheckBox({ ...props }) {
    const StyledRadio = withStyles(theme => ({
        root: {
            color: "#07B563",
            '&$checked': {
                color: "#07B563",
            },
        },
        checked: {},

    }))(Radio);

    return (
        <StyledRadio {...props}>
        </StyledRadio>
    )
}
