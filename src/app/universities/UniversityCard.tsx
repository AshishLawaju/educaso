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
      className="relative cursor-pointer overflow-hidden rounded-t-3xl shadow-2xl"
      onClick={() => router.push(`/universities/${id}`)}
    >
      <div className="h-[250px] w-[389px]">
        <Image
          src={photo}
          alt={`${name}`}
          className="h-full w-full object-cover"
        ></Image>
      </div>
      <h3 className="w-[70%] px-8 py-12 font-semibold text-primary">{name}</h3>
      <div className="absolute right-4 top-[55%] z-10 h-[80px] w-[80px] overflow-hidden rounded-full">
        <Image alt={`${name}`} src={flag}></Image>
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
