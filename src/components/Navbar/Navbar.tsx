"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowDropleft } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./navbar.css";
const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "Home",
      link: "/",
      // more:false
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Services",
    },
    {
      name: "Study Abroad",
    },
    {
      name: "Test Preparation",
    },
    {
      name: "Universities",
      link: "/universitites",
    },
  ];

  const serviceLink = [
    "Language Preparation",
    "Career Counseling",
    "Offer Letter and I20",
    "Visa Application Assistance",
    "Mock Test",
    "Interview Preparation Classes",
    "University Enrollment",
    "Scholarship Assistance",
    "Bank Loan and Documentation Support",
    "Pre-Departure Briefing",
    "Ticket and Airport Pickup",
    "Accommodation Arrangements",
    "SOP Guidance",
  ];

  const studyLink = [
    { name: "Study in US" },
    {
      name: "Study in UK",
    },
    {
      name: "Study in Europe",
      sublink: [
        "Study in Denmark",
        "Study in Netherland",
        "Study in German",
        "Study in Poland",
        "Study in Malta",
        "Study in Ireland",
        "Study in France",
        "Study in Sweden",
      ],
    },
    {
      name: "Study in Canada",
    },
    {
      name: "Study in South Korea",
    },
    {
      name: "Study in Japan",
    },
    {
      name: "Study in Australia",
    },
  ];

  const testLink = ["IELTS", "PTE", "Duolingo", "Korean", "Japanese"];
  const [extendedNav, setExtendedNav] = useState("");
  const [extendedNav2, setExtendedNav2] = useState(false);
  return (
    <nav className="bg-[#fffffe] shadow-sm sticky top-0 z-50">
      <div className="container py-[27px]; flex justify-between items-center relative">
        <div className="h-[36px] w-[132px] cursor-pointer ">
          <Link href={"/"}>
            <Image src={logo} alt="educaso" className="w-full h-full"></Image>
          </Link>
        </div>

        <ul className="flex items-center gap-x-8 text-[16px] text-span-black whitespace-nowrap relative">
          {/*  <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer flex gap-2 items-center">
            Services <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex gap-2 items-center">
            Study Abroad <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex gap-2 items-center">
            Test Preparation <IoIosArrowDown />
          </li>
          <li className="cursor-pointer">Universities</li> */}

          {navLinks.map((navLink) => (
            <>
              {navLink.link ? (
                <Link href={navLink.link}>
                  <li className="cursor-pointer navbarx" key={navLink.name}>
                    {navLink.name}
                  </li>
                </Link>
              ) : (
                <>
                  <li
                    className="cursor-pointer navbarx flex gap-2 items-center  py-[30px]"
                    key={navLink.name}
                    onMouseEnter={() => {
                      setExtendedNav(navLink.name);
                      console.log(navLink.name);
                    }}
                    onMouseLeave={() => {
                      setExtendedNav("");
                    }}
                  >
                    {navLink.name}
                    <IoIosArrowDown />
                  </li>
                  {extendedNav == "Services" && (
                    <div
                      onMouseEnter={() => {
                        setExtendedNav("Services");
                        console.log(navLink.name);
                      }}
                      onMouseLeave={() => {
                        setExtendedNav("");
                      }}
                      className="absolute top-20 left-[20%] rounded-xl bg-[#fffffe] text-[12px] text-[#000000]  paragraph-span-small"
                    >
                      <div className="flex flex-col  ">
                        {serviceLink.map((service) => (
                          <p
                            className="border-b border-[#e8e8e8] px-[44px] py-[10px] cursor-pointer"
                            key={service}
                          >
                            {service}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {extendedNav == "Study Abroad" && (
                    <div
                      onMouseEnter={() => {
                        setExtendedNav("Study Abroad");
                        console.log(navLink.name);
                      }}
                      onMouseLeave={() => {
                        setExtendedNav("");
                      }}
                      className="absolute  top-20 left-[40%] rounded-xl bg-[#fffffe] text-[12px] text-[#000000]  paragraph-span-small"
                    >
                      <div className="flex flex-col  ">
                        {studyLink.map((Study: any) => (
                          <p
                            className="  relative border-b   border-[#e8e8e8] px-[44px] py-[10px] cursor-pointer flex gap-2 items-center"
                            key={Study.name}
                            onMouseEnter={() => {
                              if (Study.name == "Study in Europe") {
                                setExtendedNav2(true);
                              }
                            }}
                            onMouseLeave={() => {
                              setExtendedNav2(false);
                            }}
                          >
                            {Study.name}

                            {Study.sublink && (
                              <>
                                <MdKeyboardArrowRight className=" text-sm" />
                                {extendedNav2 && (
                                  <div className="absolute -right-[95%] top-0  bg-[#fffffe] rounded-r-xl ">
                                    {Study.sublink &&
                                      Study.sublink.map((stu: any) => (
                                        <div
                                          className="border-b   border-[#e8e8e8]"
                                          key={stu}
                                        >
                                          <p
                                            className=" px-[44px] py-[10px]"
                                            key={stu}
                                          >
                                            {stu}
                                          </p>
                                        </div>
                                      ))}
                                  </div>
                                )}
                              </>
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {extendedNav == "Test Preparation" && (
                    <div
                      onMouseEnter={() => {
                        setExtendedNav("Test Preparation");
                        console.log(navLink.name);
                      }}
                      onMouseLeave={() => {
                        setExtendedNav("");
                      }}
                      className="absolute top-20 left-[62%] rounded-xl bg-[#fffffe] text-[12px] text-[#000000]  paragraph-span-small"
                    >
                      <div className="flex flex-col  ">
                        {testLink.map((service) => (
                          <p
                            className="border-b border-[#e8e8e8] px-[44px] py-[10px] cursor-pointer"
                            key={service}
                          >
                            {service}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ))}
        </ul>

        <button className=" py-3 px-[22px] rounded-xl  whitespace-nowrap text-background  bg-gradient-to-b from-[#4453DD] to-[#09117C]">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
