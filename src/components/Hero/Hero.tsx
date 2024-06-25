import hero from "./assets/hero.webp";
import hero2 from "./assets/hero.png";
import Image from "next/image";
import Button from "../common/button/Button";
import Capital from "../Capital/Capital";
const Hero = () => {
  return (
    <div className="py-8">
      <div
        className="container h-[90vh] rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${hero2.src})` }}
      >
        <div className="pl-12 pt-[12%]">
          <h1 className="main-heading font-raleway">
            <span className="leading-10">
              <Capital character="U" />
            </span>
            nlock a Better Future!
          </h1>
          <p className="mt-3 w-[39%] text-paragraph">
            Embark on a transformative educational journey with our expert
            guidance and unlock a world of opportunities in your dream
            university for a brighter future ahead.
          </p>
          <div className="mt-20">
            <Button
              buttonTittle={"BOOK AN APPOINTMENT"}
              backgroundColors={"09117C"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
