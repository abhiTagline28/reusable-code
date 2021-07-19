import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
const ShowTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: "white",
        color: "black",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        //border: "1px solid #36454f",
        placement: "left",
    }
}))(Tooltip);

export default ShowTooltip;