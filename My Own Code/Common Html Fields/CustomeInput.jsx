import React from "react";

const CustomInput = ({
  inputLabel,
  inputClassName,
  onChange,
  name,
  id,
  defaultValue,
  placeholder,
  type,
  value,
  small,
  padding,
  labelPadding,
  disabled,
  labelCapital,
  ...props
}) => {
  return (
    <div
      {...props}
      //className="text-lg relative mb-0 shadow appearance-none floating-label"
      className=""
    >
      <input
        //className={`bg-black rounded-2xl w-full text-white text-xl leading-normal outline-none pb-2 pr-6 ${inputLabel ? "pt-6 placeholder-transparent" : "pt-2"} ${small ? "h-16" : "h-20"} ${padding ? padding : "pl-6"}`}
        className={``}
        onChange={onChange}
        name={name}
        id={id}
        padding={padding}
        type={type}
        placeholder={inputLabel}
        defaultValue={defaultValue}
        value={value}
        small={small}
        disabled={disabled}
        autoComplete="false"
      />
      <label
        htmlFor={id}
        //className={`text-white text-opacity-20 absolute block h-full top-0 w-full pointer-events-none leading-10 outline-none tracking-wider pt-5 pb-4 pr-6 pl-6 ${labelPadding ? labelPadding : " left-0"} ${labelCapital ? 'capitalize' : 'uppercase'}`}
        className={``}
      >
        {inputLabel}
      </label>
    </div>
  );
};

export default React.memo(CustomInput);
