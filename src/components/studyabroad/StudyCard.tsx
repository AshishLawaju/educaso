import Image, { StaticImageData } from "next/image";
import aus from "./assets/aus.webp";
import faus from "./assets/faus.webp";
import Readmore from "../common/button/readmore/Readmore";
type studyCardType = {
  flag: StaticImageData;
  backgroundImage: StaticImageData;
  title: String;
  subtitle: String;
};

const StudyCard = ({
  flag,
  backgroundImage,
  title,
  subtitle,
}: studyCardType) => {
  return (
    <div className="relative h-[462px] max-sm:mx-[6px]  sm:w-[295px] overflow-hidden rounded-t-3xl bg-[#ffffff] shadow-sm">
      <div className="h-[180px] w-full sm:w-[295px]">
        <Image
          src={backgroundImage}
          alt={`${title}`}
          className="h-full w-full"
        ></Image>
      </div>

      <div className="bore absolute right-5 top-[33%] h-[80px] w-[80px] overflow-hidden rounded-full border-[5px] border-[#ffffff]">
        <Image
          src={flag}
          alt="aus flag"
          className="h-full w-full object-cover"
        ></Image>
      </div>

      <div className="px-[27px] py-[40px]">
        <h3 className="small-sub-heading text-primary">{title}</h3>
        <p className="paragraph-normal mt-3 line-clamp-4 text-[#484747]">
          {subtitle}
        </p>
        <Readmore />
      </div>
    </div>
  );
};

export default StudyCard;
