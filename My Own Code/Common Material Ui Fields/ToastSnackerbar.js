import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ClearToast } from "../../redux/toast/action";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ToastSnackbar = () => {
    const dispatch = useDispatch();
    const { status, message, type } = useSelector((state) => state.toastReducer);

    return (
        <Fragment>
            {status && (
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={status}
                    autoHideDuration={2000}
                    onClose={() => dispatch(ClearToast())}
                >
                    <Alert onClose={() => dispatch(ClearToast())} severity={type}>{message}</Alert>
                </Snackbar>
            )}
        </Fragment>
    );
};
export default React.memo(ToastSnackbar);
