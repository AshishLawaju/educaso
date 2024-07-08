"use client";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
import Image from "next/image";
import testi11 from "./assets/testi11.jpg";
import testi12 from "./assets/testi12.jpg";
import testi14 from "./assets/testi14.jpg";
import testi15 from "./assets/testi15.jpg";
import testi16 from "./assets/testi16.jpg";
import Capital from "../Capital/Capital";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Joe Christensen",
      description:
        "Great job, I will definitely be ordering again! LookScout is worth much more than I paid.  I would like to personally thank you.",
      rating: 5,
      photo: testi11,
    },
    {
      name: "Emily Johnson",
      description:
        "DK Solutions polished our brand's presentation with quality packaging. We're thrilled with the results.",
      rating: 5,
      photo: testi16,
    },

    {
      name: "Mateusz Kowalski",
      description:
        "DK Solutions' spotless cleaning services exceeded our expectations. Standout professionalism in the industry.",
      rating: 5,
      photo: testi12,
    },
    {
      name: "Anna Nowak",
      description:
        "DK Solutions provided exceptional manpower solutions, ensuring our success within deadlines. Outstanding service!",
      rating: 5,
      photo: testi14,
    },
  ];
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`text-blue border-primary text-primary hover:bg-primary hover:text-[#fff] absolute bottom-20 left-12 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md border-2 max-lg:hidden`}
        onClick={onClick}
      >
        <FaArrowRightLong className=" " />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`text-blue border-primary text-primary hover:bg-primary hover:text-[#ffffff] absolute bottom-20 left-0 z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md border-2 max-lg:hidden`}
        onClick={onClick}
      >
        <FaArrowLeftLong className=" " />
      </div>
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="bg-[#fefdfd]">
      <div className="container py-[112px]">
        <div className="text-center">
          <h3 className="small-sub-heading text-primary">
            <span className="leading-4">
              <Capital character="T" />
            </span>
            ESTIMONIALS
          </h3>
          <h2 className="sub-heading text-primary">
            What our students says about us
          </h2>
        </div>
        <div className="mt-16">
          <Slider {...settings}>
            {testimonialsList.map((testo) => (
              <div key={testo.name}>
                <div className="flex">
                  <div className="flex flex-1 flex-col gap-y-3 sm:gap-y-12">
                    <div className="mt-3 flex gap-2">
                      {[...Array(testo.rating)].map((_, index) => {
                        console.log("index", index)
                        return <FaStar
                          key={`rate-${index}`}
                          className="text-[#FFAE43]"
                        />
                      })}
                    </div>
                    <p className="text-start text-base font-semibold lg:text-2xl">
                      {testo.description}
                    </p>
                    <p className="text-start">{testo.name}</p>
                  </div>

                  <div className="flex h-[385px] w-[355px] flex-1 justify-end max-sm:hidden">
                    <Image
                      src={testo.photo}
                      alt="profile"
                      height={385}
                      width={355}
                      className="object-cover"
                    ></Image>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
