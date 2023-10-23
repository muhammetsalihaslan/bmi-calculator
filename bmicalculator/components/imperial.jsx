import React from "react";
import Bmidisplay from "./bmidisplay";
import Input from "./input";

const Imperial = () => {
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
          <Input id="heightft" unit="ft" />
          <Input id="heightft" unit="in" />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 ms-6 mr-6">
          <label
            htmlFor="weightft"
            className="text-[#5E6E85] text-sm font-normal col-span-2"
          >
            Weight
          </label>
          <Input id="weightft" unit="st" />
          <Input id="weightft" unit="lbs" />
        </div>
      </form>
      <Bmidisplay />
    </>
  );
};
export default Imperial;
