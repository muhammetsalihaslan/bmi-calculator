"use client";
import React from "react";
import Bmidisplay from "./bmidisplay";
import Input from "./input";

const Imperial = () => {
  const [ftHeight, setFtHeight] = useState(" ");
  const [inWeight, setInWeight] = useState(" ");
  const [stWeight, setStWeight] = useState(" ");
  const [ibsWeight, setIbsWeight] = useState(" ");
  const [bmi, setBmi] = useState("");

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
            value={inWeight}
            unit="in"
            onChange={(e) => setInWeight(e.target.value)}
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
      <Bmidisplay />
    </>
  );
};
export default Imperial;
