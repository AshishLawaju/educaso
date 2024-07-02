import Link from "next/link";
import { StaticImageData } from "next/image";

type breadcumType = {
  photo?: StaticImageData;
  title?: String;
  path?: String;
};

const BreadCum = ({ photo, title, path }: breadcumType) => {
  // console.log({ params });

  return (
    <section
      className="container relative flex h-[150px]  sm:h-[300px] flex-col justify-center overflow-hidden rounded-3xl bg-cover bg-center sm:pl-[50px] pl-5"
      style={{
        backgroundImage: `url(${photo?.src})`,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#00000079] to-[#00000014]"></div>
      <h1 className="sub-heading relative text-background">{title}</h1>
      <div className="relative font-light text-span-white">
        <Link href={"/"}>
          <span className="cursor-pointer font-bold">Home</span>
        </Link>
        {path}
      </div>
    </section>
  );
};

export default BreadCum;
