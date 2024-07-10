"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
type AccordionItem = {
  ques: string;
  ans: string;
};
type AccordionProps = {
  accData: AccordionItem[];
};
const Accordian = ({ accData }: AccordionProps) => {
  const [accoID, setAccoID] = useState("");
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
    <div className="">
      {accData.map((aq) => (
        <div
          key={aq?.ques}
          className="mt-4 cursor-pointer rounded-xl px-3 sm:px-8 py-4 sm:py-6 shadow-lg"
          onClick={() => {
            if (accoID == aq?.ques) {
              return setAccoID("");
            }
            setAccoID(aq.ques);
          }}
        >
          <h2 className="flex items-start justify-end text-[#484747] gap-1 sm:gap-2">
            {aq.ques}

            <div className="">
              <div className="h-[40px] w-[40px]">
                <GoPlus
                  className={`text-lg ${accoID === aq.ques ? "rotate-45 scale-110" : "rotate-0"} transition-all duration-500 ease-in-out`}
                />
              </div>
            </div>
          </h2>

          {
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${accoID === aq.ques ? "max-h-40" : "max-h-0"}`}
            >
              <h3
                className={`mt-2 ${accoID === aq.ques ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-in-out`}
              >
                {aq.ans}
              </h3>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Accordian;
