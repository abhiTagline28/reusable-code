import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    loader: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(255,255,255,0.5)",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        zIndex: 11111
    },
}));

export default function Loader({ isLoad }) {
    const classes = useStyles();
    const loader = useSelector((state) => state.loader.status) || isLoad
    return (
        <React.Fragment>
            {loader && (
                <div className={classes.loader}>
                    <CircularProgress />
                </div>
            )}
        </React.Fragment>
    );
}
