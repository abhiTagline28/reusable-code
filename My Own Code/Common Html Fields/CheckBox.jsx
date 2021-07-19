import React from "react";

const Checkbox = ({ children, id, name, small, checked, onChange }) => (
  <label
    htmlFor={id}
    /* className={`inline-block mb-2 relative text-left ${
      small ? "pl-6" : "pl-12"
    }`} */
    className={}
  >
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      //className="opacity-0 absolute h-5 w-5"
      className=""
      onChange={onChange}
    />
    <div
      /* className={`bg-yellow absolute left-0 rounded-md flex flex-shrink-0 justify-center items-center shadow-1 ${
        small ? "w-4 h-4 top-0" : "w-8 h-8 top-1/2 transform -translate-y-1/2"
      }`} */
      className={}
    >
      <svg
        //className="fill-current hidden w-5 h-5 pointer-events-none"
        className=""
        // xmlns="http://www.w3.org/2000/svg"
        xmlns=""
        width="19.501"
        height="13.272"
        viewBox="0 0 19.501 13.272"
      >
        {/* <path
          id="check"
          d="M-10.27-17.353a1.618,1.618,0,0,1-1.149-.476l-6.23-6.23a1.624,1.624,0,0,1,0-2.3,1.624,1.624,0,0,1,2.3,0l5.081,5.081L-1.4-30.149a1.624,1.624,0,0,1,2.3,0,1.624,1.624,0,0,1,0,2.3L-9.121-17.829a1.618,1.618,0,0,1-1.149.476"
          transform="translate(18.125 30.625)"
          fill="#7c4f10"
        /> */}
      </svg>
    </div>
    <div>{children}</div>
  </label>
);

export default React.memo(Checkbox);
