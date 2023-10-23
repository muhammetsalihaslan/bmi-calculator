import React from "react";

const Imperial = () => {
  return (
    <>
      <form className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 ms-6">
          <label
            htmlFor="heightft"
            className="text-[#5E6E85] text-sm font-normal col-span-2 "
          >
            Height
          </label>
          <input
            type=""
            id="heightft"
            unit="cm"
            className="border border-gray-400 h-[4rem] w-48 rounded-xl"
          />
          <input
            type=""
            id="heightft"
            unit="cm"
            className="border border-gray-400 h-[4rem] w-48 rounded-xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 ms-6">
          <label
            htmlFor="weightft"
            className="text-[#5E6E85] text-sm font-normal col-span-2"
          >
            Weight
          </label>
          <input
            type=""
            id="weightft"
            unit="cm"
            className="border border-gray-400 h-[4rem] w-48 rounded-xl"
          />
          <input
            type=""
            id="weightft"
            unit="cm"
            className="border border-gray-400 h-[4rem] w-48 rounded-xl"
          />
        </div>
      </form>
    </>
  );
};
export default Imperial;
