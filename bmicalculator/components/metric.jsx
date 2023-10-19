import React from "react";

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
          <input
            type=""
            id="height"
            unit="cm"
            className="border border-gray-400 h-[4rem] w-48 rounded-xl"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <label
            htmlFor="weight"
            className="text-[#5E6E85] text-sm font-normal "
          >
            Weight
          </label>
          <input
            type=""
            id="weight"
            unit="cm"
            className="border border-gray-400 h-[4rem] w-48 rounded-xl"
          />
        </div>
      </form>
    </>
  );
};

export default Metric;
