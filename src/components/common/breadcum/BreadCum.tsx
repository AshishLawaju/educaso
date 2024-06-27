import Link from "next/link";
import carrer from "./carrercouncelling.webp";
import { StaticImageData } from "next/image";

type breadcumType = {
  photo: StaticImageData;
  title: String;
  path: String;
};

const BreadCum = (params:any) => {
console.log({params});

    
  return (
    <section
      className="container relative flex h-[300px] flex-col justify-center overflow-hidden rounded-3xl bg-cover bg-center pl-[50px]"
      style={{
        backgroundImage: `url(${carrer.src})`,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#00000079] to-[#00000014]"></div>
      <h1 className="sub-heading relative text-background">
        Language Preparation
      </h1>
      <div className="relative text-span-white">
        <Link href={"/"}>
          <span className="cursor-pointer font-bold">Home</span>
        </Link>{" "}
        / Services / Language Preparation
      </div>
    </section>
  );
};

export default BreadCum;
