import React from "react";

const Calculator = () => {
  return (
    <div className="flex flex-col border h-[468px] w-[480px] rounded-xl mx-5 bg-white lg:mt-[10.4rem] lg:-ml-[15%] shadow-xl">
      <div className="text-[#273548] font-semibold text-2xl py-9 px-6 ">
        Enter your details below
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Calculator;
