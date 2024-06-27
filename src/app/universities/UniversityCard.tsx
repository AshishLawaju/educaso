import Image, { StaticImageData } from "next/image";
import React from "react";

type universitiesCardType = {
  photo: StaticImageData,
  name: String,
  flag: StaticImageData,
};
const UniversityCard = ({ photo, name, flag }: universitiesCardType) => {
  return (
    <div className="shadow-2xl rounded-t-3xl overflow-hidden relative cursor-pointer">
      <div className="h-[250px] w-[389px] ">
        <Image src={photo} alt={`${name}`} className="h-full w-full"></Image>
      </div>
      <h3 className="px-8 py-12 font-semibold text-primary w-[70%]">
       {name}
      </h3>
      <div className="h-[80px] w-[80px] absolute z-10 right-4 top-[55%] rounded-full overflow-hidden">
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
