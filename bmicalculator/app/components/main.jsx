import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <main
      className="flex flex-col min-h-screen items-center
  bg-pure-white gap-y-10 "
    >
      <section className="flex flex-col w-full lg:flex-row ">
        <div className="flex flex-col items-center text-center rounded-b-3xl bg-gradient-to-r from-[#D6E6FE] to-[#D5FAFD] min-h-[40rem]  lg:max-w-[64rem]">
          <Image src />
        </div>
        <div>ghghg</div>
      </section>
    </main>
  );
};

export default Main;
