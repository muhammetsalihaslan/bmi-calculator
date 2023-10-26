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
        <div className="flex flex-col justify-center bg-blue-500 text-white gap-y-6 mt-6 ms-6 w-[440px] h-[150px] rounded-l-2xl rounded-r-full mb-6 ">
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
        <div className="flex flex-col justify-center bg-blue-500 text-white gap-y-6 mt-6 ms-6 w-[440px] h-[150px] rounded-l-2xl rounded-r-full mb-6 ">
          <div className="text-2xl font-semibold ms-2">Your BMI İS</div>
          <h4>{bmi}</h4>
          <div className=" ms-2">
            Your BMI suggests you're a {healthStatus}. Your ideal weight is
            between
          </div>
        </div>
      </div>
    );
  }
};

export default Bmidisplay;
