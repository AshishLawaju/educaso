import aboutus from "../assets/aboutus.webp";
import Image from "next/image";
import Capital from "@/components/Capital/Capital";
import Button from "@/components/common/button/Button";
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <motion.div className="py-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div
        className="container lg:h-[90vh] rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutus.src})` }}
      >
        <div className="sm:pl-12 flex flex-col justify-center h-full max-lg:py-8">
          <h1 className="main-heading font-raleway">
            <span className="leading-10">
              <Capital character="A" />
            </span>
            bout Us!
          </h1>
          <p className="mt-3 w-[80%] lg:w-[39%] text-paragraph">
            Craft a path to world-class education with our tailored consultancy
            services, guiding you towards your dream university and beyond.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutHero;
