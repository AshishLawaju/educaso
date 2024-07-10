"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowDropleft } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import "./navbar.css";
import { FiAlignRight } from "react-icons/fi";
import { GiCrossedBones, GiHamburgerMenu } from "react-icons/gi";
import { servicesData } from "@/data/services/services.data";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine, RiMenuFold4Line } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsMenuUp } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();

  // console.log(pathname.split("/")[1]);

  // const pathname2 = pathname.split("/")[1];

  const navLinks = [
    {
      name: "Home",
      link: "/",
      // more:false
    },
    {
      name: "About Us",
      link: "/about",
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
      link: "/universities",
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
    { name: "Study in US", id: "UnitedStates" },
    {
      name: "Study in UK",
      id: "UnitedKingdom",
    },
    {
      name: "Study in Europe",
      sublink: [
        { name: "Study in Denmark", id: "Denmark" },
        { name: "Study in Netherland", id: "Netherlands " },
        { name: "Study in Germany", id: "Germany" },
        { name: "Study in Poland", id: "Poland" },
        { name: "Study in Malta", id: "Malta" },
        { name: "Study in Ireland", id: "Ireland" },
        { name: "Study in France", id: "France" },
        { name: "Study in Sweden", id: "Sweden" },
      ],
    },
    {
      name: "Study in Canada",
      id: "Canada",
    },
    {
      name: "Study in South Korea",
      id: "SouthKorea",
    },
    {
      name: "Study in Japan",
      id: "Japan",
    },
    {
      name: "Study in Australia",
      id: "Australia",
    },
  ];

  const testLink = [
    { id: "IELTS", title: "IELTS" },
    { id: "PTE", title: "PTE" },
    { id: "Duolingo", title: "Duolingo" },
    { id: "TOPIK", title: "Korean" },
    { id: "JLPT", title: "Japanese" },
  ];
  const [extendedNav, setExtendedNav] = useState("");
  const [extendedNav2, setExtendedNav2] = useState(false);
  const [smallNav, setSmallNav] = useState(false);
  const [smallExtendedNav, setSmallExtendedNav] = useState("");
  const [smallExtendedNav2, setSmallExtendedNav2] = useState("");

  const smallref = useRef<HTMLDivElement>(null);

  // console.log(smallref.current);

/*   useEffect(() => {
    function handler(event: any) {
      console.log(smallref.current);
      if (smallref.current && !smallref.current.contains(event.target as Node)) {
        setSmallNav(false);
      }
    }

    
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []); */
  return (
    <nav className="sticky top-0 z-50 bg-[#fffffe] shadow-sm">
      <div className="container relative flex items-center justify-between max-xl:flex-row-reverse max-xl:py-4 max-sm:py-3">
        <div className="w-[22%] xl:hidden"></div>
        <div className="h-[36px] w-[132px] cursor-pointer">
          <Link href={"/"}>
            <Image src={logo} alt="educaso" className="h-full w-full"></Image>
          </Link>
        </div>

        <ul className="relative flex items-center gap-x-8 whitespace-nowrap text-[14px] text-span-black max-xl:hidden">
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
            <div key={navLink.name}>
              {navLink.link ? (
                <Link href={navLink.link}>
                  <li
                    className={`navbarx cursor-pointer ${pathname == navLink.link ? "activeNav text-primary" : ""}`}
                    key={navLink.name}
                  >
                    {navLink.name}
                  </li>
                </Link>
              ) : (
                <>
                  <li
                    className={`navbarx my-[30px] flex cursor-pointer items-center gap-2 ${pathname.split("/")[1] == navLink.name.toLowerCase().replace(" ", "") ? "activeNav text-primary" : ""}`}
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
                      }}
                      onMouseLeave={() => {
                        setExtendedNav("");
                      }}
                      className="paragraph-span-small absolute left-[20%] top-[55px] overflow-hidden rounded-b-xl bg-[#fffffe] text-[12px] text-[#000000]"
                    >
                      <div className="flex flex-col">
                        {servicesData.map((service) => (
                          <Link
                            href={`/services/${service.id}`}
                            key={service.title}
                          >
                            <p className="cursor-pointer border-b border-[#e8e8e8] px-[44px] py-[10px] transition-all duration-200 ease-in-out hover:bg-primary hover:text-span-white">
                              {service.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {extendedNav == "Study Abroad" && (
                    <div
                      onMouseEnter={() => {
                        setExtendedNav("Study Abroad");
                        // console.log(navLink.name);
                      }}
                      onMouseLeave={() => {
                        setExtendedNav("");
                      }}
                      className="paragraph-span-small absolute left-[40%] top-[55px] rounded-b-xl bg-[#fffffe] text-[12px] text-[#000000] transition-all duration-300 ease-in-out"
                    >
                      <div className="flex flex-col">
                        {studyLink.map((Study: any) =>
                          Study.sublink ? (
                            <>
                              <p
                                key={Study.name}
                                className="relative flex cursor-pointer items-center gap-2 border-b border-[#e8e8e8] px-[44px] py-[10px] transition-all duration-200 ease-in-out hover:bg-primary hover:text-span-white"
                                onMouseEnter={() => {
                                  if (Study.name === "Study in Europe") {
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
                                    <MdKeyboardArrowRight className="text-sm" />
                                    {extendedNav2 && (
                                      <div className="absolute -right-[97%] top-0 overflow-hidden rounded-r-xl bg-[#fffffe] text-paragraph">
                                        {Study.sublink.map((stu: any) => (
                                          <Link
                                            key={stu}
                                            href={`/studyabroad/${stu.id}`}
                                            className=""
                                          >
                                            <div className="border-b border-[#e8e8e8]">
                                              <p
                                                className="px-[44px] py-[10px] transition-all duration-200 ease-in-out hover:bg-primary hover:text-span-white"
                                                key={stu}
                                              >
                                                {stu.name}
                                              </p>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                )}
                              </p>
                            </>
                          ) : (
                            <Link
                              key={Study.name}
                              href={`/studyabroad/${Study.id}`}
                              className="transition-all duration-200 ease-in-out hover:bg-primary hover:text-span-white"
                            >
                              <p
                                key={Study.name}
                                className="relative flex cursor-pointer items-center gap-2 border-b border-[#e8e8e8] px-[44px] py-[10px]"
                                onMouseEnter={() => {
                                  if (Study.name === "Study in Europe") {
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
                                    <MdKeyboardArrowRight className="text-sm" />
                                    {extendedNav2 && (
                                      <div className="absolute -right-[95%] top-0 rounded-r-xl bg-[#fffffe]">
                                        {Study.sublink.map((stu: any) => (
                                          <div
                                            className="border-b border-[#e8e8e8]"
                                            key={stu}
                                          >
                                            <p
                                              className="px-[44px] py-[10px]"
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
                            </Link>
                          ),
                        )}
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
                      className="paragraph-span-small absolute left-[62%] top-[55px] overflow-hidden rounded-b-xl bg-[#fffffe] text-[12px] text-[#000000]"
                    >
                      <div className="flex flex-col">
                        {testLink.map((service) => (
                          <Link
                            key={service.id}
                            href={`/testpreparation/${service.id}`}
                            className="transition-all duration-200 ease-in-out hover:bg-primary hover:text-span-white"
                          >
                            <p className="rpun cursor-pointer border-b border-[#e8e8e8] px-[44px] py-[10px]">
                              {service.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </ul>
        <Link href={"/contact"}>
          <button className="whitespace-nowrap rounded-xl bg-gradient-to-b from-[#4453DD] to-[#09117C] px-[22px] py-3 text-[14px] text-background transition-all duration-300 ease-in-out hover:from-[#555db5] hover:to-[#383fa2] max-xl:hidden">
            Contact Us
          </button>
        </Link>

        {/* small navbar start here @ */}
        <div
          
          className="transition-all duration-300 ease-in-out xl:hidden"
        >
          {
            <>
              <div className="">
                <RiCloseLargeLine
                  className={`${smallNav ? "scale-110" : "h-0 scale-0"} cursor-pointer text-[20px] text-[#000] transition-all duration-300 ease-in-out`}
                  onClick={() => setSmallNav((pre) => !pre)}
                />
              </div>

              <HiMenuAlt2
                className={`${smallNav ? "h-0 scale-0" : "scale-105"} cursor-pointer text-[26px] font-bold text-primary transition-all duration-300 ease-in-out`}
                onClick={() => setSmallNav((pre) => !pre)}
              />
            </>
          }
        </div>
      </div>
      <div className="xl:hidden">
        {true && (
          <div 
            className={`p-4x absolute left-0 top-0 flex h-[100vh] w-[70%] flex-col overflow-y-scroll bg-[#fffffe] pt-[60px] ${smallNav ? "translate-x-0x opacity-100 transition-all duration-300 ease-out" : "opacity-0x w-0 -translate-x-[999px] transition-all duration-300 ease-in-out"} -z-10 shadow-2xl`}
          >
            <div  className="container">
              {navLinks.map((navlink) => (
                <div
                  className=""
                  key={navlink.name}
                  onClick={() => setSmallExtendedNav(navlink.name)}
                >
                  <>
                    <p className="text- flex cursor-pointer items-center gap-1 border-y px-4 py-2">
                      {!navlink.link ? (
                        <>
                          {navlink.name}{" "}
                          <MdOutlineArrowDropDown className="text-[24px]" />
                        </>
                      ) : (
                        <Link
                          href={navlink.link}
                          onClick={() => setSmallNav(false)}
                        >
                          {navlink.name}
                        </Link>
                      )}
                    </p>
                  </>

                  {
                    <>
                      {smallExtendedNav == "Services" &&
                        navlink.name == "Services" && (
                          <ul className="ml-3 text-sm font-light text-sub-heading">
                            {servicesData.map((serv) => (
                              <li className="ml-3 p-[3px]" key={serv.title}>
                                <Link
                                  href={`/services/${serv.id}`}
                                  onClick={() => setSmallNav(false)}
                                >
                                  {serv.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </>
                  }
                  {
                    <>
                      {smallExtendedNav == "Study Abroad" &&
                        navlink.name == "Study Abroad" && (
                          <ul className="ml-3 text-sm font-light">
                            {studyLink.map((serv) => (
                              <li
                                key={serv.name}
                                className="p-[2px]"
                                onClick={() => setSmallExtendedNav2(serv.name)}
                              >
                                <div className="flex items-center gap-1">
                                  {serv.sublink ? (
                                    <>
                                      {" "}
                                      {serv.name}{" "}
                                      <MdOutlineArrowDropDown className="text-[24px]" />
                                    </>
                                  ) : (
                                    <Link
                                      href={`/studyabroad/${serv.id}`}
                                      onClick={() => setSmallNav(false)}
                                    >
                                      {serv.name}
                                    </Link>
                                  )}
                                </div>
                                {serv.sublink && (
                                  <>
                                    {smallExtendedNav2 == "Study in Europe" &&
                                      navlink.name == "Study Abroad" && (
                                        <>
                                          {serv.sublink.map((ser) => (
                                            <p
                                              key={`${ser.id}`}
                                              className="ml-4 py-[2px]"
                                            >
                                              <Link
                                                onClick={() =>
                                                  setSmallNav(false)
                                                }
                                                href={`/studyabroad/${ser.id}`}
                                              >
                                                {ser.name}
                                              </Link>
                                            </p>
                                          ))}
                                        </>
                                      )}
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                    </>
                  }
                  {
                    <>
                      {smallExtendedNav == "Test Preparation" &&
                        navlink.name == "Test Preparation" && (
                          <ul className="ml-3 py-[2px] text-sm font-light">
                            {testLink.map((service) => (
                              <Link
                                onClick={() => setSmallNav(false)}
                                key={service.id}
                                href={`/testpreparation/${service.id}`}
                              >
                                <li className="ml-3 cursor-pointer py-[2px]">
                                  {service.title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                    </>
                  }
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
