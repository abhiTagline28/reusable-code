import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardBox: {
        backgroundColor: "#fff",
        padding: 20,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: 5,
        height: "100%",
        "&:not(:last-child)": {
            marginBottom: 16
        }
    },
    card: {
        position: "relative"
    }
}));

const CardBox = ({ children, blurBackground, cardClassName, ...props }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.cardBox} ${blurBackground ? classes.card : ""} ${cardClassName}`} {...props}>
            {children}
        </div>
    )
}

export default CardBox
