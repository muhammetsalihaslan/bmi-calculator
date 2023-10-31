"use client";
import React, { useEffect, useState } from "react";
import Bmidisplay from "./bmidisplay";
import Input from "./input";

const Imperial = () => {
  const [ftHeight, setFtHeight] = useState("");
  const [inHeight, setInHeight] = useState("");
  const [stWeight, setStWeight] = useState("");
  const [ibsWeight, setIbsWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const IbsforSt = 14;
  const InforFt = 12;

  useEffect(() => {
    if (ftHeight !== 0 && inHeight !== 0 && stWeight !== 0 && ibsWeight !== 0) {
      const height = ftHeight * InforFt + inHeight;
      const weight = stWeight * IbsforSt + ibsWeight;
      const CalculatedBmi = ((weight / (height * height)) * 703).toFixed(1);
      setBmi(CalculatedBmi);
    }
  }, [ftHeight, inHeight, stWeight, ibsWeight]);

  return (
    <>
      <form className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 ms-6 mr-6">
          <label
            htmlFor="heightft"
            className="text-[#5E6E85] text-sm font-normal col-span-2 "
          >
            Height
          </label>
          <Input
            id="ftHeight"
            value={ftHeight}
            unit="ft"
            onChange={(e) => setFtHeight(e.target.value)}
          />
          <Input
            id="inHeight"
            value={inHeight}
            unit="in"
            onChange={(e) => setInHeight(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 ms-6 mr-6">
          <label
            htmlFor="weightft"
            className="text-[#5E6E85] text-sm font-normal col-span-2"
          >
            Weight
          </label>
          <Input
            id="stWeight"
            value={stWeight}
            onChange={(e) => setStWeight(e.target.value)}
            unit="st"
          />
          <Input
            id="ibsWeight"
            value={ibsWeight}
            onChange={(e) => setIbsWeight(e.target.value)}
            unit="lbs"
          />
        </div>
      </form>
      <Bmidisplay bmi={bmi} />
    </>
  );
};
export default Imperial;
