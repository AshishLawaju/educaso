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
      name: "Sarita Shrestha",
      description:
        "Educaso's language preparation programs helped me develop fluency in Korean. The structured curriculum and supportive instructors made learning enjoyable and effective.",
      rating: 5,
      photo: testi11,
    },
    {
      name: "Rajesh Maharjan",
      description:
        "I am thankful to Educaso for their expert guidance in obtaining my I-20 form. They made the process straightforward and ensured all my documents were in order.",
      rating: 5,
      photo: testi16,
    },
    {
      name: "Anjali Thapa",
      description:
        "The interview preparation classes at Educaso were invaluable. They provided me with the skills and confidence to excel in my university admission interview.",
      rating: 5,
      photo: testi12,
    },
    {
      name: "Prakash Acharya",
      description:
        "Educaso's scholarship assistance was crucial in securing funding for my studies abroad. Their support and advice helped me navigate the scholarship application process successfully.",
      rating: 5,
      photo: testi14,
    },
  ];

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`text-blue max-lg:hiddenx absolute bottom-0 left-16 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-[#fff] max-sm:-bottom-12 max-sm:right-0`}
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
        className={`text-blue max-lg:hiddenx absolute bottom-0 left-4 z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-[#ffffff] max-sm:-bottom-12 max-sm:right-0`}
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
    <section className="bg-[#fefdfd] max-sm:mb-10">
      <div className="container py-10 sm:py-20 lg:py-[112px]">
        <div className="text-center">
          <h3 className="small-sub-heading text-primary">
            <span className="leading-4">
              <Capital character="T" />
            </span>
            ESTIMONIALS
          </h3>
          <h2 className="sub-heading text-primary sm:mt-3">
            What our students says about us
          </h2>
        </div>
        <div className="mt-8 md:mt-16">
          <Slider {...settings}>
            {testimonialsList.map((testo) => (
              <div key={testo.name + testo.rating} className="sm:px-2">
                <div className="xs:px-2z flex sm:px-2">
                  <div className="flex flex-1 flex-col gap-y-3 sm:gap-y-12">
                    <div className="mt-3 flex gap-2">
                      {[...Array(testo.rating)].map((_, index) => {
                        return (
                          <FaStar
                            key={`rate-${index}`}
                            className="text-[#FFAE43]"
                          />
                        );
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
                      className="overflow-hidden rounded-lg object-cover object-center"
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
