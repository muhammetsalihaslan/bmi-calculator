import Image from "next/image";
import React from "react";

const Card = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-y-4 ms-6 gap-x-6 mt-5 ">
      <Image src={icon} width={64} height={64} />
      <div>
        <h1 className="text-xl font-semibold text-[#253347]">{title}</h1>
        <p className="mt-5 text-[#5E6E8C]">{children}</p>
      </div>
    </div>
  );
};

export default Card;
