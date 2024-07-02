import Image from "next/image";
import faqImage from "./assets/FAQ.webp";
import Capital from "@/components/Capital/Capital";
import Accordian from "../accordian/Accordian";
const FAQ = () => {
  const faqData = [
    {
      ques: "How long does it take to get the IELTS test scores?",
      ans: "The IELTS test score result is published online within 13 days and the hard copy is issued after 17 days from your LRW test.",
    },
    {
      ques: "How much does it cost to book an IELTS test?  ",
      ans: "It takes Rs. 25,300 to book an IELTS test date.",
    },
    {
      ques: "How do I book an IELTS Date in Nepal?",
      ans: "You can book your IELTS date from the consultancy you are trying to apply for. If you don’t want to book your IELTS date from a consultancy, you can either book the test from IDP or British Council Nepal.",
    },
    {
      ques: "Can I change my IELTS Date after I book the date?",
      ans: "Yes, you can change your IELTS date, but you need to request a cancellation or postponement 5 weeks prior to the test.",
    },
    {
      ques: "How long is the IELTS test score valid?",
      ans: "IELTS test score is valid for 2 years.",
    },
    {
      ques: "What is the duration of the IELts test?",
      ans: "The IELTS test lasts for 3 hours which includes listening, reading and writing. Speaking test is taken separately which may last for 10 minutes to half an hour depending on the test conductor.",
    },
    {
      ques: "Are IELTS Preparation classes available in Kathmandu",
      ans: "Yes, If you are planning to take the IELTS Test then do Visit us. We have a special offer for you. Please Visit Us",
    },
  ];
  return (
    <section className="container py-[116px]">
      <h3 className="small-sub-heading text-center">
        <span className="leading-5">
          <Capital character="F" />
        </span>
        requently Asked Questions
      </h3>
      <div className="mt-6 flex gap-[116px] items-center">
        <div className="h-[460px] w-[744px] hidden lg:block">
          <Image alt="FAQ" src={faqImage} className="w-full h-full "></Image>
        </div>
        <Accordian accData={faqData} />
      </div>
    </section>
  );
};

export default FAQ;
