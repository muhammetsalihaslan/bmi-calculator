import React from "react";

const Bmidisplay = () => {
  return (
    <div>
      <div className="flex flex-col justify-center bg-blue-500 text-white gap-y-6 mt-6 ms-6 w-[440px] h-[150px] rounded-l-2xl rounded-r-full ">
        <div className="text-2xl font-semibold ms-2">Welcome</div>
        <div className=" ms-2">
          Enter your height and weight and you’ll see your BMI result here
        </div>
      </div>
    </div>
  );
};

export default Bmidisplay;
