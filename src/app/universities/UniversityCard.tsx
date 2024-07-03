"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export type universitiesCardType = {
  photo: StaticImageData;
  name: String;
  flag: StaticImageData;
  id: String;
};
const UniversityCard = ({ photo, name, flag, id }: universitiesCardType) => {
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer overflow-hidden h-full rounded-t-3xl shadow-md"
      onClick={() => router.push(`/universities/${id}`)}
    >
      <div className="w-[389px]x h-[250px] w-full">
        <Image
          src={photo}
          alt={`${name}`}
          className="h-full w-full object-cover object-center"
        ></Image>
      </div>
      <h3 className="w-[70%] px-8 py-12 font-semibold text-primary">{name}</h3>
      <div className="absolute right-4 top-[55%] z-10 h-[80px] w-[80px] border-[6px]  border-[#ffffff] overflow-hidden rounded-full object-contain object-center ">
        <Image alt={`${name}`} src={flag} className="h-full"></Image>
      </div>
    </div>
  );
};

/*

{blog?.description1.split("\n").map((text) => (
                <p key={text} className="">
                  {text}
                </p>
              ))}
*/

export default UniversityCard;
