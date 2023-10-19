import Image from "next/image";
import React from "react";
import Calculator from "./calculator";

const Main = () => {
  return (
    <main
      className="flex flex-col min-h-screen items-center
  bg-gray-100 gap-y-10 "
    >
      <section className="flex flex-col w-full lg:flex-row ">
        <div className="flex flex-col items-center text-center rounded-b-[3rem] bg-gradient-to-r from-[#D6E6FE] to-[#D5FAFD] min-h-[40rem] p-6 gap-y-6 lg:w-[64rem] lg:h-[46rem] lg:py-[7rem] lg:pl-24 lg:pr-[26rem] lg:items-start lg:text-start md:px-22 ">
          <Image
            src="/images/logo.svg"
            width={40}
            height={40}
            className="lg:w-[64px] lg:h-[64px] "
          />
          <div className="flex flex-col lg:gap-y-6 lg:mt-12 gap-y-9">
            <h1 className="text-[#253347] font-semibold lg:text-6xl md:text-5xl text-4xl lg:w-[25rem] ">
              Body Mass Index Calculator
            </h1>
            <div className="text-[#5E6E85] lg:w-[30rem]  ">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </div>
          </div>
        </div>
        <Calculator />
      </section>
    </main>
  );
};

export default Main;
