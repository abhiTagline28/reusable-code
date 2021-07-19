import React from "react";
import arrow from "../assets/images/select-down-arrow.png";

const CustomSelect = ({
  selectLabel,
  selectClassName,
  onChange,
  name,
  id,
  defaultValue,
  children,
  labelCapital,
  classes,
  disabled,
  value,
  ...props
}) => {
  return (
    <div
      {...props}
      //className="text-lg relative mb-0 shadow appearance-none floating-label"
      className=""
    >
      <select
        //className={`bg-black rounded-2xl w-full h-20 pt-6 pb-2 px-6 text-white placeholder-transparent text-xl leading-normal outline-none appearance-none ${classes}`}
        className={``}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
      >
        {children}
      </select>
      <label
        htmlFor={id}
        //className={`text-white text-opacity-20 absolute block left-0 h-full top-0 w-full px-6 pb-4 pt-5 pointer-events-none leading-10 outline-none ${labelCapital ? 'capitalize' : 'uppercase'}`}
        className={``}
      >
        {selectLabel}
      </label>
      {
        disabled ? null :
        {/* <div className="absolute right-4 top-1/2 transform -translate-y-2/4 pointer-events-none">
          <img src={arrow} alt="" />
        </div> */}
      }
    </div>
  );
};

export default React.memo(CustomSelect);
