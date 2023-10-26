"use client";
import React, { useEffect, useState } from "react";
import Input from "./input";
import Bmidisplay from "./bmidisplay";

const Metric = () => {
  const [height, setHeight] = useState(" ");
  const [weight, setWeight] = useState(" ");
  const [bmi, setBmi] = useState("");

  useEffect(() => {
    if (weight !== 0 && height !== 0) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100;
      const calculatedBMI = weightInKg / heightInM ** 2;
      setBmi(calculatedBMI.toFixed(2));
    }
  }, [weight, height]);

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
          <Input
            id="height"
            unit="cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 mr-6">
          <label
            htmlFor="weight"
            className="text-[#5E6E85] text-sm font-normal "
          >
            Weight
          </label>
          <Input
            id="height"
            unit="kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </form>
      <Bmidisplay bmi={bmi} />
    </>
  );
};

export default Metric;
