import React from 'react'
import CustomButton from "../reusable/CustomButton"


const FileUpload = ({children, id,onChange, images }) => {
    return (
        <>
            <input
                accept="image/*"
                id={id}
                multiple
                type="file"
                //className="hidden"
                onChange={onChange}
            />
            <label className="cursor-pointer" htmlFor={id}>
                {/* <span className="py-3 px-5 text-sm uppercase font-bold bg-yellow border-b-4 border-solid border-yellow-100 text-dark-yellow rounded-xl focus:outline-none outline-none inline-flex items-center">{children}</span>  */}
                <span className="">{children}</span> 
            </label>
        </>
    )
}

export default FileUpload
