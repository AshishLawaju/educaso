"use client"
import BlogPage from "@/components/blog/BlogPage";
import Capital from "@/components/Capital/Capital";
import BreadCum from "@/components/common/breadcum/BreadCum";
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
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>

      <div>

        <Hero />
        <Whoarewe />
        <Whatwedo />
        <Studyabroad />
        <Growth />
        <Testimonials />
        <BlogPage />
        <ContactBanner />
        <ContactUs />
      </div>

    </>
  );
};

export default Home;
