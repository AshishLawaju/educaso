import Capital from "@/components/Capital/Capital";
import Image from "next/image";
import mission1 from "./assets/mission1.webp";
import mission2 from "./assets/mission2.webp";
const OurMission = () => {
  return (
    <section className="container flex py-10 sm:py-14  lg:py-[116px]">
      <div className="flex-1 flex justify-center relative max-lg:hidden">
        <Image alt="our mission" src={mission1} className="absolute left-0 -top-16"></Image>
        <Image alt="our mission" src={mission2} ></Image>
      </div>
      <div className="flex-1">
        <h3 className="small-sub-heading capitalize text-primary">
          <span className="leading-5">
            <Capital character="O" />
          </span>
          UR MISSION
        </h3>
        <h2 className="sub-heading mt-3 text-primary">
          Our Gateway to Global Opportunities
        </h2>
        <p className="mt-[24px] w-[93%] text-paragraph">
          At Educaso, our mission is to empower individuals to achieve their
          dreams of studying, working, or living abroad. We are dedicated to
          providing expert guidance, personalized support, and comprehensive
          services to help our clients navigate the complexities of
          international opportunities.
        </p>
        <p className="mt-[24px] w-[93%] text-paragraph">
          With a commitment to excellence and a passion for cultural exchange,
          we strive to make the journey to a new country seamless, rewarding,
          and transformative for each individual we serve. Join us as we embark
          on this exciting adventure together, turning dreams into reality, one
          step at a time.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
