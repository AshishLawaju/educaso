"use client"
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
    <main className="overflow-x-hidden">
      <AboutHero />
      <AboutWhoR />

      {/*     <div
        className="h-[50vh] w-full  bg-fixed bg-center lg:hiddenx"
        style={{ backgroundImage: `url(${aboutbanner.src})` }}
      >
      </div> */}
      <OurMission />
      <Whatwedo />
      <Testimonials />

      <Pathway />
      <div className="max-sm:py-8">

      <ContactBanner />
      </div>
    </main>
  );
};

export default AboutUs;
