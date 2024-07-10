import hero from "./assets/hero.webp";
import Image from "next/image";
import Button from "../common/button/Button";
import Capital from "../Capital/Capital";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      className="py-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div
        className="container rounded-3xl bg-cover bg-center lg:h-[85vh]"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="py-[12%] lg:pl-12">
          <h1 className="main-heading font-raleway text-primary">
            <span className="leading-10">
              <Capital character="U" />
            </span>
            nlock a Better Future!
          </h1>
          <p className="mt-3 sm:text-paragraph lg:w-[40%]">
            Embark on a transformative educational journey with our{" "}
            <br className="max-lg:hidden" /> expert guidance and unlock a world
            of opportunities in <br className="max-lg:hidden" /> your dream
            university for a brighter future ahead.
          </p>

          <div className="mt-8 text-[14px] lg:mt-20">
            <Link href={"/contact"}>
              <Button
                buttonTittle={"BOOK AN APPOINTMENT"}
                backgroundColors={"09117C"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
