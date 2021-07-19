import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function LinearSpinner({ value, color }) {
    const LinearSpinner = withStyles((theme) => ({
        root: {
            height: 20,
            //width: 450,
            borderRadius: 5
        },
        colorPrimary: {
            backgroundColor: 'white'
            //theme.palette.grey[theme.palette.type === "light" ? 100 : 700]
        },
        bar: {
            borderRadius: 5,
            backgroundColor: color
        }
    }))(LinearProgress);
    return (
        <React.Fragment>
            <LinearSpinner variant="determinate" value={value} />
        </React.Fragment>
    );
}
