"use client";
import React, { useState } from "react";
import Input from "./input";
import Bmidisplay from "./bmidisplay";

const Metric = () => {
  const [height, setHeight] = useState(" ");
  const [weight, setWeight] = useState(" ");

  const handleChange = (e) => {
    if (e.target.id === "height") {
      setHeight(e.target.value);
    } else {
      setWeight(e.target.value);
    }
  };

  return (
    <>
      <form className="grid grid-cols-2 gap-x-6 mt-5">
        <div className="col-span-1 flex flex-col gap-y-2 ml-6">
          <label
            htmlFor="height"
            className="text-[#5E6E85] text-sm font-normal "
          >
            Height
          </label>
          <Input id="height" unit="cm" value={height} onChange={handleChange} />
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 mr-6">
          <label
            htmlFor="weight"
            className="text-[#5E6E85] text-sm font-normal "
          >
            Weight
          </label>
          <Input id="height" unit="kg" value={weight} onChange={handleChange} />
        </div>
      </form>
      <Bmidisplay />
    </>
  );
};

export default Metric;
