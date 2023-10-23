import React from "react";

const Input = ({ id, unit }) => {
  return (
    <div className="flex items-center">
      <input
        type={id}
        className="font-normal w-full px-6 py-5 rounded-xl border focus:outline-none "
      />
      <span className="text-xl text-blue-400 font-semibold -ml-12">{unit}</span>
    </div>
  );
};

export default Input;
