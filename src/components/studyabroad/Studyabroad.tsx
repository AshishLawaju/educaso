"use client";
import Capital from "../Capital/Capital";
import StudyCard from "./StudyCard";
import aus from "./assets/aus.webp";
import faus from "./assets/faus.webp";
import fjapan from "./assets/fjapan.webp";
import fuk from "./assets/fuk.webp";
import fus from "./assets/fus.webp";
import japan from "./assets/japan.webp";
import uk from "./assets/uk.webp";
import us from "./assets/us.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./studyabroad.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Studyabroad = () => {
  const studyabroadData = [
    {
      flag: faus,
      backgroundImage: aus,
      title: "Study in Australia",
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: fus,
      backgroundImage: us,
      title: "Study in US",
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: fuk,
      backgroundImage: uk,
      title: "Study in UK",
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: fjapan,
      backgroundImage: japan,
      title: "Study in Japan",
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
  ];
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "absolute -top-24 right-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-2 border-primary hover:bg-primary hover:text-[#ffffff]"
        }
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <GoArrowRight className="text-[22px]" />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "absolute -top-24 right-16 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-2 border-primary hover:bg-primary hover:text-[#ffffff] "
        }
        onClick={onClick}
      >
        <GoArrowLeft className="text-[22px]" />
      </div>
    );
  }
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#fefdfd] py-[116px]">
      <div className="container">
        <div className="border-b border-[#d1d1d1] pb-6">
          <h3 className="small-sub-heading text-primary">
            <span className="leading-4">
              <Capital character="S" />
            </span>
            TUDY ABOARD!
          </h3>
          <h2 className="sub-heading text-primary">
            We bring you an invaluable opportunity for studying abroad
          </h2>
        </div>

        <div className="mt-8">
          <Slider {...settings}>
            {studyabroadData.map((studyabroad) => {
              return (
                <div key={studyabroad.title}>
                  <StudyCard
                    title={studyabroad.title}
                    subtitle={studyabroad.subtitle}
                    backgroundImage={studyabroad.backgroundImage}
                    flag={studyabroad.flag}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Studyabroad;
