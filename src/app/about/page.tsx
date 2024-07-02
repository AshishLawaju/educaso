import React from "react";
import AboutHero from "./abouthero/AboutHero";
import AboutWhoR from "./components/AboutWhoR";
import OurMission from "./components/OurMission";
import Whatwedo from "@/components/whatwedo/whatwedo";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import Pathway from "@/components/common/dk/pathway";

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <AboutWhoR />
      <OurMission />
      <Whatwedo />
      <Testimonials />

      <Pathway />
      <ContactBanner />
    </main>
  );
};

export default AboutUs;
