import Image from "next/image";
import testPhoto from "../assets/testoverview.webp";
import Capital from "@/components/Capital/Capital";
import { log } from "console";
const TestOverview = ({
  overviewContent,
  title,
}: {
  title: string;
  overviewContent: string;
}) => {
  return (
    <section className="container mt-8 sm:mt-[56px] flex gap-[165px]">
      <div className="flex-1">
        <h3 className="small-sub-heading">
          <span className="leading-5">
            <Capital character={`${title[0]}`} />
          </span>
          {title.slice(1)} Overview
        </h3>
        <div className="mt-6">
          {overviewContent.split("\n").map((para) => (
            <p key={para} className="mt-6">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="h-[255px] w-[348px] max-lg:hidden">
        <Image
          alt="test preparation"
          className="h-full w-full"
          src={testPhoto}
        ></Image>
      </div>
    </section>
  );
};

export default TestOverview;
