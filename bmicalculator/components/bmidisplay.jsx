import React from "react";

const Bmidisplay = ({ bmi }) => {
  let healthStatus = "";
  if (+bmi < 18.5) {
    healthStatus = "Underweight";
  } else if (+bmi < 24.9) {
    healthStatus = "Healthy weight";
  } else if (+bmi < 29.9) {
    healthStatus = "Overweight";
  } else {
    healthStatus = "Obese";
  }

  if (bmi === "NaN" || +bmi < 1 || +bmi > 100) {
    return (
      <div>
        <div className="flex flex-col justify-center bg-blue-500 text-white gap-x-6 gap-y-6 mt-6 ms-6  mb-6 me-6 h-[150px] rounded-l-2xl rounded-r-full  ">
          <div className="text-2xl font-semibold ms-2">Welcome</div>
          <div className=" ms-2">
            Enter your height and weight and you`ll see your BMI bmi here
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-2 item-center gap-x-6 p-8 bg-blue-500 text-white mt-6 ms-6 w-[440px] h-[150px] rounded-l-2xl rounded-r-full mb-6 ">
          <div className="flex flex-col gap-y-6">
            <div className="text-m font-semibold">Your BMİ is...</div>
            <div className="text-5xl font-bold">{bmi}</div>
          </div>
          <div className="text-body-s">
            Your BMI suggests you're {healthStatus}
            <span></span>
          </div>
        </div>
      </div>
    );
  }
};

export default Bmidisplay;
