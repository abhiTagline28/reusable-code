import React from "react";

const CustomButton = ({ children, btnClassName = "", onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      // className={`bg-yellow border-b-4 border-solid border-yellow-100 text-dark-yellow rounded-xl focus:outline-none outline-none ${btnClassName}`}
      className={``}
    >
      {children}
    </button>
  );
};

export default React.memo(CustomButton);
