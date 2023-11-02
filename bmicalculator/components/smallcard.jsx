import Image from "next/image";
import React from "react";

const Smallcard = ({ icon, title, children, className }) => {
  return (
    <div
      className={`bg-white p-6 mt-4 gap-x-5 mx-3 rounded-2xl shadow-xl lg:flex-col ${className}`}
    >
      <div className="flex">
        <Image src={icon} width={30} height={30} />
        <h1 className="text-2xl mt-1 mx-2 font-semibold text-[#253347] ">
          {title}
        </h1>
      </div>
      <div className="text-[#5E6E8C] mt-2">{children}</div>
    </div>
  );
};

export default Smallcard;
