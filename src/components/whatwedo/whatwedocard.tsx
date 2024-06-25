import visa from "./assets/VISA.webp";
import test from "./assets/TEST.webp";
import { StaticImageData } from "next/image";
type whatwedocardType = {
  image: StaticImageData;
  title: String;
};

const Whatwedocard = ({ image, title }: whatwedocardType) => {
  return (
    <div
      className="relative flex h-[180px] w-[180px] items-end rounded-xl bg-cover bg-center p-5 text-[15px] font-semibold uppercase text-background"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <p className="relative z-10 w-[50%]">{title}</p>
      <div className="absolute left-0 top-0 z-0 h-full w-full rounded-xl bg-gradient-to-b from-[#00000000] to-[#0000207a]"></div>
    </div>
  );
};

export default Whatwedocard;
