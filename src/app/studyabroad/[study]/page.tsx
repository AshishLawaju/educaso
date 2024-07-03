"use client";
import BreadCum from "@/components/common/breadcum/BreadCum";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import { studyabroadData } from "@/data/studyabroad/studyabrooad.data";
import { log } from "console";
import Image from "next/image";
import React from "react";
import studyhere from "./assets/studyhere.webp";
import chatImage from "./assets/chat.webp";
import Capital from "@/components/Capital/Capital";
import { IoIosCheckmark, IoMdCheckmark } from "react-icons/io";
import StudyTesti from "./StudyTesti";
import { usePathname } from "next/navigation";
type studyAboradPageType = {
  params: { study: string };
};

const chatText = [
  "High-Quality Education",
  "Diverse Course Options",
  "Research Opportunities",
  "Global Recognition",
  "Multicultural Environment",
  "Work Opportunities",
  "Quality of Life",
  "Safety and Support",
];

const StudyAboardPage: React.FC<studyAboradPageType> = ({ params }) => {
  console.log({ params });

  const currentStudy = studyabroadData.find(
    (study) => study.id == params.study,
  );

  const pathname = usePathname();

  return (
    <section className="py-8">
      <BreadCum
        photo={currentStudy?.breadcumPhoto}
        title={currentStudy?.title}
        path={` / Study Abroad / ${currentStudy?.title}`}
      />

      <div className="container flex flex-col items-center gap-x-[116px] py-[32px] max-lg:gap-8 sm:py-[60px] lg:flex-row lg:py-[100px]">
        <div className="lg:basis-3/5">
          {currentStudy?.description1.split("\n").map((para) => (
            <p key={para} className="mt-3">
              {para}
            </p>
          ))}
        </div>
        <div className="container lg:basis-2/5">
          <div className="h-[472] w-[434]">
            <Image
              className="h-full w-full"
              src={`${currentStudy!.educasoImage.src}`}
              alt={`${currentStudy?.title}`}
              width={434}
              height={472}
            ></Image>
          </div>
        </div>
      </div>

      <div className="container flex lg:gap-[135px]">
        <div className="h-[329px] w-[489px] flex-1 max-lg:hidden">
          <Image
            src={studyhere}
            alt="best consaltancy"
            className="h-full w-full"
          ></Image>
        </div>
        <div className="flex-1">
          {currentStudy?.description2.split("\n").map((para) => (
            <p key={para} className="mt-3">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="my-20 flex flex-wrap justify-center gap-4 bg-[#f7f7ff] py-20 sm:justify-between">
        <h3 className="small-sub-heading w-full text-center">
          Studying in {currentStudy?.title} offers several compelling reasons
          for international students:
        </h3>
        <div className="container flex flex-wrap justify-center gap-4 sm:justify-between">
          {chatText.map((chat) => (
            <div
              key={chat}
              style={{ backgroundImage: `url(${chatImage.src})` }}
              className="flex h-[150px] w-[263px] items-center justify-center"
            >
              <p className="w-[50%] text-center text-primary">{chat}</p>
            </div>
          ))}
        </div>
      </div>
      {/* break  */}
      <div className="container flex flex-col justify-between gap-[40px] lg:flex-row lg:gap-[110px]">
        <div className="lg:w-[50%]">
          <h3 className="small-sub-heading">
            <span className="leading-5">
              <Capital character="E" />
            </span>
            ducation System
          </h3>
          <h3 className="small-sub-heading text-primary">
            The most popular programs in {currentStudy?.title} are:
          </h3>

          <ul className="">
            {currentStudy?.educationList.map((edu) => (
              <li key={edu} className="flex gap-3">
                <div className="">
                  <IoMdCheckmark className="mt-1 text-[#63C600]" />
                </div>
                {edu}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative justify-end lg:flex lg:w-[50%]">
          <div className="h-[441px] w-[398px] max-lg:hidden">
            <Image
              className="h-full w-full "
              alt={`${currentStudy?.title}`}
              src={currentStudy!.educationImage}
            ></Image>
          </div>
          <div className="-bottom-5 w-full lg:absolute max-lg:pb-10">
            <StudyTesti testi={currentStudy!.educationDialog} />
          </div>
        </div>
      </div>

      <ContactBanner />
    </section>
  );
};

export default StudyAboardPage;
