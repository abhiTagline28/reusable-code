import React from "react";

const CustomTextarea = ({
  inputLabel,
  inputClassName,
  onChange,
  name,
  id,
  defaultValue,
  type,
  rows,
  value,
  labelCapital,
  ...props
}) => {
  return (
    <div
      {...props}
      //className="text-lg relative mb-0 shadow appearance-none floating-label overflow-hidden rounded-2xl"
      className=""
    >
      <textarea
        //className="bg-black rounded-2xl w-full pt-10 pb-2 px-6 text-white placeholder-transparent text-xl leading-normal outline-none"
        className=""
        onChange={onChange}
        name={name}
        id={id}
        rows={rows}
        type={type}
        placeholder={inputLabel}
        defaultValue={defaultValue}
        value={value}
      />
      <label
        htmlFor={id}
        //className={`text-white bg-black rounded-t-2xl text-opacity-20 absolute block left-0 top-0 w-full px-6 pt-5 pointer-events-none leading-10 outline-none tracking-wider	${labelCapital ? 'capitalize' : 'uppercase'}`}
        className={``}
      >
        {/* <span className="w-full block">{inputLabel}</span> */}
        <span className="">{inputLabel}</span>
      </label>
    </div>
  );
};

export default React.memo(CustomTextarea);
