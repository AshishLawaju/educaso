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

  return (
    <section className="container py-8">
      <BreadCum
        photo={currentStudy?.breadcumPhoto}
        title={currentStudy?.title}
        path={currentStudy?.title}
      />

      <div className="flex">
        <div className="basis-3/5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          voluptatum assumenda cum, excepturi voluptatem possimus ex praesentium
          veritatis, in aspernatur vero! Maiores quidem obcaecati ipsum adipisci
          esse, sed accusamus aliquid? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorum, voluptatum assumenda cum, excepturi
          voluptatem possimus ex praesentium veritatis, in aspernatur vero!
          Maiores quidem obcaecati ipsum adipisci esse, sed accusamus aliquid?
        </div>
        <div className="basis-2/5">
          <Image
            className="h-full w-full"
            src={`${currentStudy!.educasoImage.src}`}
            alt={`${currentStudy?.title}`}
            width={434}
            height={472}
          ></Image>
        </div>
      </div>

      <div className="flex">
        <div className="h-[329px] w-[489px] flex-1">
          <Image
            src={studyhere}
            alt="best consaltancy"
            className="h-full w-full"
          ></Image>
        </div>
        <div className="flex-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eos quos cumque nisi a, illo repudiandae harum ex facilis dicta totam
          officia quaerat tempora porro distinctio adipisci, quisquam aut
          accusantium? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum eos quos cumque nisi a, illo repudiandae harum ex facilis
          dicta totam officia quaerat tempora porro distinctio adipisci,
          quisquam aut accusantium?
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:justify-between">
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

      <div className="flex justify-between">
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
            <StudyTesti />
          </div>
        </div>
      </div>

      <ContactBanner />
    </section>
  );
};

export default StudyAboardPage;
