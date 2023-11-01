import Image from "next/image";
import React from "react";
import Calculator from "./calculator";

const Main = () => {
  return (
    <main
      className="flex flex-col min-h-screen items-center
 bg-gradient-to-r from-[#ffffff] to-[#f7f8f8] gap-y-10 "
    >
      <section className="flex flex-col w-full lg:flex-row ">
        <div className="flex flex-col items-center text-center rounded-b-[3rem] bg-gradient-to-r from-[#D6E6FE] to-[#D5FAFD] min-h-[40rem] p-6 gap-y-6 w-full lg:w-[64rem] lg:h-[46rem] lg:py-[7rem] lg:pl-24 lg:pr-[26rem] lg:items-start lg:text-start md:px-22 ">
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
      <section>
        <div className="flex flex-col justify-around md:flex-row md:gap-x-[3rem] lg:max-w-7xl bg-gradient-to-r from-[#ffffff] to-[#f7f8f8] mt-5 gap-[5rem] lg:gap-[7rem] ">
          <Image
            src="/images/image-man-eating.webp"
            width={300}
            height={300}
            className="md:w-[500px] md:h-[500px] lg:w-[564px] lg:h-[533px] sm:ms-[5rem] lg:ms-0"
          />
          <div className="flex flex-col gap-y-2 lg:justify-center">
            <Image
              src="/images/pattern-curved-line-left.svg"
              width={85}
              height={200}
              className="hidden place-self-end xl:flex"
            />
            <h1 className="text-5xl font-bold text-[#3c4552] p-6">
              What your BMI result means
            </h1>
            <div className="p-6 me-2 ">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
