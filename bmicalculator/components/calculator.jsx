"use client";
import React from "react";
import Metric from "./metric";
import Imperial from "./imperial";
import { useForm, useWatch } from "react-hook-form";

const Calculator = () => {
  const { register, control } = useForm({
    system: "metric",
    defaultValues: {
      system: "metric",
    },
  });

  const system = useWatch({
    control,
    name: "system",
  });
  return (
    <div className="flex flex-col border lg:h-fit w-[500px] rounded-xl mx-5 bg-white lg:mt-[10.4rem] lg:-ml-[15%] shadow-xl">
      <div className="text-[#273548] font-semibold text-2xl py-9 px-6 ">
        Enter your details below
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-start items-center ml-6">
          <input
            {...register("system")}
            type="radio"
            id="metric-system"
            value="metric"
            className="w-8 h-8 mr-5 appearance-none border rounded-full hover:border-blue-300 hover:cursor-pointer  checked:bg-blue-700 checked:border-8 "
          />
          <label htmlFor="metric-system" className="font-semibold">
            Metric
          </label>
        </div>
        <div className="flex flex-start items-center">
          <input
            {...register("system")}
            type="radio"
            id="imperial-system"
            value="imperial"
            className="w-8 h-8 mr-5 appearance-none border rounded-full hover:border-blue-300 hover:cursor-pointer  checked:bg-blue-700 checked:border-8 "
          />
          <label htmlFor="imperial-system" className="font-semibold">
            Imperial
          </label>
        </div>
      </div>
      {system === "metric" && <Metric />}
      {system === "imperial" && <Imperial />}
    </div>
  );
};

export default Calculator;
