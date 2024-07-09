import React from "react";
import Capital from "../Capital/Capital";
import Image from "next/image";
import img1 from "./assets/whorwe.png";
import img2 from "./assets/whorwe2.jpg";
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion'
const Whoarewe = () => {
  return (
    <motion.div className="py-8"

      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <section className="py-8 container flex justify-between max-lg:flex-col sm:py-10 lg:py-[180px]">
        <div className="flex-1x lg:w-[41%] ">
          <h3 className="small-sub-heading capitalize  text-primary">
            <span className="leading-5">
              <Capital character="w" />
            </span>
            ho are we!
          </h3>
          <h2 className="sub-heading  mt-3  text-primary">
            Elevate Your Education <br className="max-lg:hidden" />
            Worldwide
          </h2>

          <p className=" mt-3 sm:mt-6">
            As a team of dedicated advisors, we guide students towards their
            international academic goals. Leveraging our wealth of expertise, we
            provide personalized support at every step - from university selection
            to visa assistance.
          </p>
          <p className=" mt-3 sm:mt-6">
            As a team of dedicated advisors, we guide students towards their
            international academic goals. Leveraging our wealth of expertise, we
            provide personalized support at every step - from university selection
            to visa assistance.
          </p>
          <div className=" mt-3 sm:mt-6">
            <button className="paragraph-normal flex items-center gap-2">
              Read More <GoArrowRight />
            </button>
            <hr className="mt-2 w-[5%]" />
          </div>
        </div>

        <div className="flex-1x relative max-lg:hidden">
          <div className="h-[450px] w-[410px]">
            <Image
              className="h-full w-full rounded-xl bg-cover object-cover"
              src={img2}
              alt="who are educaso"
            ></Image>
          </div>
          <Image
            src={img1}
            className="absolute left-3 top-0 -z-10 scale-150 overflow-x-hidden"
            alt="all about educaso"
          ></Image>
        </div>
      </section>
    </motion.div>
  );
};

export default Whoarewe;
