import React from "react";
import Input from "./input";
import Bmidisplay from "./bmidisplay";
import { useForm, useWatch } from "react-hook-form";

const Metric = () => {
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
          <Input id="height" unit="cm" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 mr-6">
          <label
            htmlFor="weight"
            className="text-[#5E6E85] text-sm font-normal "
          >
            Weight
          </label>
          <Input id="height" unit="kg" />
        </div>
      </form>
      <Bmidisplay />
    </>
  );
};

export default Metric;
