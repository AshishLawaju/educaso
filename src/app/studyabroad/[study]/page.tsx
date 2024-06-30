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
        path={pathname}
      />

      <div className="container flex items-center gap-x-[116px] py-[100px]">
        <div className="basis-3/5">
          {currentStudy?.description1.split("\n").map((para) => (
            <p key={para} className="mt-3">
              {para}
            </p>
          ))}
        </div>
        <div className="container basis-2/5">
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

      <div className="container flex gap-[135px] ">
        <div className="h-[329px] w-[489px] flex-1">
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

      <div className="flex flex-wrap justify-center gap-4 bg-[#f7f7ff] sm:justify-between py-20 my-20 ">
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

      <div className="flex justify-between container gap-[110px]">
        <div className="w-[50%]">
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
        <div className="relative flex w-[50%] justify-end">
          <div className="h-[441px] w-[398px]">
            <Image
              className="h-full w-full"
              alt={`${currentStudy?.title}`}
              src={currentStudy!.educationImage}
            ></Image>
          </div>
          <div className="absolute -bottom-5">
            <StudyTesti testi={currentStudy!.educationDialog} />
          </div>
        </div>
      </div>

      <ContactBanner />
    </section>
  );
};

export default StudyAboardPage;
