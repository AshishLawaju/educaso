import BlogPage from "@/components/blog/BlogPage";
import Capital from "@/components/Capital/Capital";
import Footer from "@/components/common/footer/Footer";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import ContactUs from "@/components/contactus/ContactUs";
import Growth from "@/components/growth/Growth";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Navbar/Header";
import Navbar from "@/components/Navbar/Navbar";
import Studyabroad from "@/components/studyabroad/Studyabroad";
import Testimonials from "@/components/testimonials/Testimonials";
import Whatwedo from "@/components/whatwedo/whatwedo";
import Whoarewe from "@/components/whoweare/Whoarewe";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Whoarewe />
      <Whatwedo />
      <Studyabroad />
      <Growth />
      <Testimonials />
      <BlogPage />  
      <ContactBanner />
      <ContactUs/>

      {/*    <div className="font-roboto text-3xl text-primary">
        Everyone has right to freedom
      </div>
      <div className="font-raleway text-3xl text-paragraph">
        Everyone has right to freedom
      </div>
      <div className="font-exo2x text-3xl">Everyone has right to freedom</div>
      <div className="font-x text-3xl">Everyone has right to freedom</div>
      <div className="font-">abcdefghijklmnopqrst ABCD</div>
      <div className="">abcdefghijklmnopqrst ABCD</div>
      <div className="main-heading leading-10">
        <Capital character={""} />
        pital
      </div> */}
    </>
  );
};

export default Home;
