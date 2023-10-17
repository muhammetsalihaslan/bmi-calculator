import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <main
      className="flex flex-col min-h-screen items-center
  bg-pure-white gap-y-10 "
    >
      <section className="flex flex-col w-full lg:flex-row ">
        <div className="flex flex-col items-center text-center rounded-b-[3rem] bg-gradient-to-r from-[#D6E6FE] to-[#D5FAFD] min-h-[40rem]  lg:w-[64rem] lg:h-[46rem]">
          <Image
            src="/images/logo.svg"
            width={40}
            height={40}
            className="lg:w-[64px] lg:h-[64px]"
          />
          <div className="flex flex-col lg:gap-y-9 lg:mt-12">
            <h1 className="text-[#253347] font-semibold text-6xl">
              Body Mass Index Calculator
            </h1>
            <div className="text-[#5E6E85]">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
