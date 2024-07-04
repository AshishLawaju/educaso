"use client";
import Image from "next/image";
import globe from "./assets/globe.webp";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
const Growth = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    onChange: (inView) => setCounterOn(inView),
  });
  return (
    <section  className="bg-primary text-background">
      <div className="container py-10 sm:py-20">
        <div className="flex justify-between gap-8 max-lg:flex-col lg:gap-20">
          <div className="flex-1">
            <h2 className="font-raleway text-[22px] font-bold leading-tight sm:text-[32px] lg:text-[48px]">
              Accelerating your academic growth overseas
            </h2>
            <p className="mt-3">
              Our education consultants can support with excellence in guidance
              with education and visa consultancy in Nepal. We&apos;ve been
              growing since 2003 with over 50 branches across 15 countries. You
              can enjoy a wide range of services for fulfilling your dreams to
              study in Australia, the UK, Canada and the US.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center lg:justify-end">
            <Image
              src={globe}
              alt="connecting educaso to world"
              className="max-lg:w-full"
            ></Image>
          </div>
        </div>

        <hr className="my-[48px] w-full text-[#979DED]" />

        <div className="grid-col-1 grid justify-items-center gap-y-6 text-center max-sm:text-sm sm:grid-cols-3">
          <div className="">
            <p   className="text-center font-light text-background">
              INTERNATIONAL STUDENTS <br /> ASSISTED
            </p>
            <p  ref={ref}className="sub-heading mt-3 text-span-white">     <>{counterOn && <CountUp end={100000} />}+</>+</p>
          </div>

          <div>
            <p className="text-center font-light text-background">
              SCHOLARSHIPS <br />
              APPROVED
            </p>
            <p className="sub-heading mt-3 text-span-white">
              <>{counterOn && <CountUp end={100} />}+</>
            </p>
          </div>
          <div>
            <p className="text-center font-light text-background">
              ENROLLED IN <br />
              IELTS/PTE PREPARATION CLASSES
            </p>
            <p className="sub-heading mt-3 text-span-white">     <>{counterOn && <CountUp end={100000} />}+</>+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
