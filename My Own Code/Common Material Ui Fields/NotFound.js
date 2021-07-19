import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    notFound: {
        minHeight: "calc(100vh - 80px)",
        overflowY: "auto",
        display: "flex",
        alignItems: "center",
        backgroundSize: "cover",
        padding: [[50, 15]],
        justifyContent: "center"
    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Grid>
                    <Grid item xs={12}>
                        <div className={classes.notFound}>
                            Not Found
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default React.memo(NotFound)
