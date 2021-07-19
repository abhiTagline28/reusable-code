import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    DialogHeading: {
        padding: '20px 24px 16px',
        '& .MuiTypography-root': {
            fontSize: '14px !important',
            color: '#1D273F',
            fontWeight: '900'
        }
    },
    DialogContent: {
        padding: theme.spacing(0, 3)
    },
    DialogContentText: {
        fontSize: '14px !important',
        color: '#1D273F',
    },
    btnActionPadding: {
        padding: theme.spacing(2)
    },
}))

export default function ConfirmationDialog({ open, handleClose, title, content, btnSubmitActions }) {
    const classes = useStyles()
    return (
        <Dialog
            classes={{ paper: classes.paper }}
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className={classes.DialogHeading} id="alert-dialog-slide-title">{title}</DialogTitle>
            <DialogContent className={classes.DialogContent}>
                <DialogContentText className={classes.DialogContentText} id="alert-dialog-slide-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.btnActionPadding}>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={handleClose} >
                    NO
                </Button>
                <Button disableElevation variant='contained' color='primary' onClick={btnSubmitActions}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
