import React,{ useState, useEffect} from 'react'
import closeIcon from "../assets/images/close-white.png"
import checkIcon from "../assets/images/check.png"

const Toster = ({open,onclose,severity,message}) => {
    // const [close, setClose] = useState(false)
    const [openToaster, setOpenToaster] = useState(false);
    useEffect(() => {
      if(openToaster){
        setTimeout(() => {
            onclose()
            setOpenToaster(false)
        }, 5000);
      }
    }, [openToaster]);

    useEffect(() => {
        if(open){
            setOpenToaster(true)
        }
    }, [open]);

    return (
        <>
            <div className={`fixed bottom-2 toster left-0 right-0 mx-auto max-w-md z-50 ${openToaster ? "inline-block" : "hidden"}`} open={openToaster} autohideduration={2000} onClose={onclose}>
                <div className={`px-5 py-3 capitalize text-white rounded flex items-center ${severity === "success" ? "bg-green":"bg-red-600"}`} onClose={onclose} severity={severity}>
                    {
                        severity === "success" ? 
                        <img className="mr-3 w-5 h-5" src={checkIcon} alt=""/>
                        :
                        <img className="mr-2 w-4 h-4" src={closeIcon} alt=""/>
                    }
                    {message}
                </div>
            </div>
        </>
    )
}

export default React.memo(Toster)

/*
    import Toster from '../../presentation/Toster'

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("")

            setSeverity("success")
            setMessage(apiResponse.message)
            setOpen(true)

            setSeverity("error")
            setMessage(apiResponse.msg)
            setOpen(true)

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };



    <Toster open={open} onclose={handleClose} severity={severity} message={message} />


*/