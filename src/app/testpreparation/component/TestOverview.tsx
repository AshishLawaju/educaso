import Image from "next/image";
import testPhoto from "../assets/testoverview.webp";
import Capital from "@/components/Capital/Capital";
const TestOverview = ({
  overviewContent,
  title,
}: {
  title: string;
  overviewContent: string;
}) => {
  return (
    <section className="flex gap-[165px]">
      <div className="flex-1">
        <h3 className="small-sub-heading">
          <span className="leading-5">
            <Capital character="I" />
          </span>
          {title} Overview
        </h3>
        <div className="mt-6">{overviewContent.split("\n").map(para=>

          (
            <p key={para} className="mt-6">{para}</p>
          )
        )}</div>
      </div>
      <div className="h-[255px] w-[348px]">
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
