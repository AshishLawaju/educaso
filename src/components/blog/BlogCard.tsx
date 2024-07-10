import { StaticImageData } from "next/image";
import blogImage from "./assets/blog.webp";

export type blogType = {
  id: string;
  title: string;
  description1: string;
  description2?: [];
  photo?: StaticImageData;
  author?: string;
  date?: string;
};

const BlogCard = ({
  id,
  title,
  description1,
  description2,
  photo,
  author,
  date,
}: blogType) => {
  return (
    <div
      className="w-[397px]x relative flex h-[360px] items-end rounded-3xl bg-cover bg-center p-5 group cursor-pointer hover:scale-95 transition-all duration-300  ease-in-out"
      style={{
        backgroundImage: `url(${photo!.src})`,
      }}
    >
      <div className="absolute  left-0 top-0 z-0 h-full w-full rounded-3xl bg-gradient-to-b from-[#00000000] to-[#0000207a]"></div>
      <p className="W-[60%] relative text-background mb-2">
        {title}
      </p>
    </div>
  );
};

export default BlogCard;
