"use client";
import React, { useState } from "react";
import Metric from "./metric";
import Imperial from "./imperial";

const Calculator = () => {
  const [unit, setUnit] = useState("metric");

  const handleChange = (e) => {
    setUnit(e.target.value);
  };

  const showMetricOrImperial = unit === "metric" ? <Metric /> : <Imperial />;

  return (
    <div className="flex flex-col border lg:h-fit w-[500px] rounded-xl mx-5 bg-white lg:mt-[10.4rem] lg:-ml-[15%] shadow-xl">
      <div className="text-[#273548] font-semibold text-2xl py-9 px-6 ">
        Enter your details below
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-start items-center ml-6">
          <input
            type="radio"
            id="metric-system"
            value="metric"
            className="w-8 h-8 mr-5 appearance-none border rounded-full hover:border-blue-300 hover:cursor-pointer  checked:bg-blue-700 checked:border-8 "
            checked={unit === "metric"}
            onChange={handleChange}
          />
          <label htmlFor="metric-system" className="font-semibold">
            Metric
          </label>
        </div>
        <div className="flex flex-start items-center">
          <input
            type="radio"
            id="imperial-system"
            value="imperial"
            className="w-8 h-8 mr-5 appearance-none border rounded-full hover:border-blue-300 hover:cursor-pointer  checked:bg-blue-700 checked:border-8 "
            checked={unit === "imperial"}
            onChange={handleChange}
          />
          <label htmlFor="imperial-system" className="font-semibold">
            Imperial
          </label>
        </div>
      </div>
      {showMetricOrImperial}
    </div>
  );
};

export default Calculator;
