import React from "react";
import AboutHero from "./abouthero/AboutHero";
import AboutWhoR from "./components/AboutWhoR";
import OurMission from "./components/OurMission";
import Whatwedo from "@/components/whatwedo/whatwedo";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import Pathway from "@/components/common/dk/pathway";
import Image from "next/image";
import aboutbanner from "./assets/aboutbanner.webp";
const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <AboutWhoR />

      <div
        className="h-[50vh] w-full bg-cover bg-fixed bg-center lg:hidden"
        style={{ backgroundImage: `url(${aboutbanner.src})` }}
      >
        {/* <Image alt="gratuate" src={aboutbanner} className="" ></Image> */}
      </div>
      <OurMission />
      <Whatwedo />
      <Testimonials />

      <Pathway />
      <ContactBanner />
    </main>
  );
};

export default AboutUs;
