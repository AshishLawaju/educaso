import Capital from "@/components/Capital/Capital";
import Image from "next/image";
import aboutwho from "./assets/aboutwho.webp";
const AboutWhoR = () => {
  return (
    <section className="container flex py-[116px] gap-[94px]">
      <div className="flex-1">
        <h3 className="small-sub-heading capitalize text-primary">
          <span className="leading-5">
            <Capital character="w" />
          </span>
          ho are we
        </h3>
        <h2 className="sub-heading mt-3 text-primary">
          A top-notch option for your
          <br className="max-lg:hidden" />
          global academic aspirations
        </h2>
        <p className="mt-[24px] w-[93%]  text-paragraph">
          Educaso Abroad Consultancy Pvt.Ltd (EAC) is an independent Company
          that provide a common platform for students to study abroad. A
          committed group of people created Educaso Abroad Consultancy. The
          group includes Chairman David Tamang, MD. Maya Karki, the CEO, Anju
          Chhetri, and other team members. We are all here to assist you. Using
          a franchise model, EAC links hundreds of world universities in a row,
          setting it apart from peers. It is a genuine and native group of
          interest. We offer the most ideal and friendly atmosphere.
        </p>
      </div>
      <div className="flex-1 ">
        <Image src={aboutwho} alt="about educaso" className=""></Image>
      </div>
    </section>
  );
};

export default AboutWhoR;
