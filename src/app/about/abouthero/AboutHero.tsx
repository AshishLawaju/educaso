import aboutus from "../assets/aboutus.webp";
import Image from "next/image";
import Capital from "@/components/Capital/Capital";
import Button from "@/components/common/button/Button";

const AboutHero = () => {
  return (
    <div className="py-8">
      <div
        className="container h-[90vh] rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutus.src})` }}
      >
        <div className="pl-12 flex flex-col justify-center h-full">
          <h1 className="main-heading font-raleway">
            <span className="leading-10">
              <Capital character="A" />
            </span>
            bout Us!
          </h1>
          <p className="mt-3 w-[39%] text-paragraph">
            Craft a path to world-class education with our tailored consultancy
            services, guiding you towards your dream university and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
