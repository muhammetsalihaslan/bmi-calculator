import Image from "next/image";
import React from "react";
import Calculator from "./calculator";
import Card from "./card";
import Smallcard from "./smallcard";

const Main = () => {
  return (
    <main
      className="flex flex-col min-h-screen items-center
 bg-gradient-to-r from-[#ffffff] to-[#f7f8f8] gap-y-10 pb-10 "
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
      <section className="md:mx-10 lg:mx-[10rem]">
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
        <div className="grid lg:grid-cols-3 gap-y-10 my-10">
          <Card icon="/images/icon-eating.svg" title="Healthy eating">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </Card>
          <Card icon="/images/icon-exercise.svg" title="Regular exercise">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </Card>
          <Card icon="/images/icon-sleep.svg" title="Adequate sleep">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </Card>
        </div>
      </section>
      <section className="flex flex-col mx-6 gap-y-14 md:mx-10 lg:mx-[8.75rem]">
        <div className="flex flex-col text-center gap-y-10 md:flex-row md:gap-x-[4rem] lg:gap-x-[8.75rem] lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-y-6 text-start ">
            <h1 className="text-4xl font-semibold text-[#253347] lg:text-6xl lg:mx-6">
              Limitation of BMI
            </h1>
            <p className="text-[#5E6E8C] lg:mx-6">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
            <Image
              src="/images/pattern-curved-line-right.svg"
              width={94}
              height={122}
              className="hidden place-self-start lg:flex lg:self-center"
            />
          </div>
        </div>
        <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 md:mt-[2rem] lg:-mt-[20rem] ">
          <Smallcard
            icon="/images/icon-gender.svg"
            title="Gender"
            className="lg:col-start-4 lg:-mr-[10rem]"
          >
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </Smallcard>
          <Smallcard
            icon="/images/icon-age.svg"
            title="Age"
            className="lg:col-start-3 lg:-mr-[7rem]"
          >
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </Smallcard>
          <Smallcard
            icon="/images/icon-muscle.svg"
            title="Muscle"
            className="lg:col-start-5 lg:-ml-[7rem]"
          >
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </Smallcard>
          <Smallcard
            icon="/images/icon-pregnancy.svg"
            title="Pregnancy"
            className="lg:col-start-2 lg:-mr-[7rem]"
          >
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </Smallcard>
          <Smallcard
            icon="/images/icon-race.svg"
            title="Race"
            className="lg:col-start-4 lg:-ml-[7rem]"
          >
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </Smallcard>
        </div>
      </section>
    </main>
  );
};

export default Main;
