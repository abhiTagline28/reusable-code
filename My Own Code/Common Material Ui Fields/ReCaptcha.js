import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
const ReCaptcha = ({ onChange, className, widthSize }) => {
    return (
        <>
            <ReCAPTCHA
                className={className}
                name="reCapcha"
                sitekey="6Le1wc8aAAAAAEUdtEX_fv7yk9xG46s2dckN8LnZ"
                onChange={onChange}
                //size="normal"
                size='normal'
                badge="inline"
            />
        </>
    )
}

export default React.memo(ReCaptcha)
