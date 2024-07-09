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
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./studyabroad.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { canadaImage, canadaFlag, germanyImage, gmFlag, KoreaImage, southKoreaFlag, MaltaFlag, MaltaImage, SwedenFlag, SwedenImage, FranceFlag, FranceImage, IrelandFlag, IrelandImage, PolandFlag, PolandImage, DenmarkFlag, DenmarkImage, NetherlandFlag, NetherlandImage } from "./assets";
const Studyabroad = () => {
  const studyabroadData = [
    {
      flag: faus,
      backgroundImage: aus,
      title: "Study in Australia",
      link: 'studyabroad/Australia',
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: canadaFlag,
      backgroundImage: canadaImage,
      title: "Study in Canada",
      link: 'studyabroad/Canada',
      subtitle:
        "Widen your career scope by studying in Canada in some of the top most globally ranked universities.",
    },

    {
      flag: gmFlag,
      backgroundImage: germanyImage,
      title: "Study in Germany",
      link: 'studyabroad/Germany',
      subtitle:
        "Widen your career scope by studying in Germany in some of the top most globally ranked universities.",
    },

    {
      flag: southKoreaFlag,
      backgroundImage: KoreaImage,
      title: "Study in South Korea",
      link: 'studyabroad/SouthKorea',
      subtitle:
        "Widen your career scope by studying in South Korea in some of the top most globally ranked universities.",
    },
    {
      flag: fus,
      backgroundImage: us,
      link: 'studyabroad/UnitedStates',
      title: "Study in US",
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: fuk,
      backgroundImage: uk,
      title: "Study in UK",
      link: 'studyabroad/UnitedKingdom',
      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: fjapan,
      backgroundImage: japan,
      title: "Study in Japan",
      link: 'studyabroad/Japan',

      subtitle:
        "Widen your career scope by studying in Australia in some of the top most globally ranked universities.",
    },
    {
      flag: MaltaFlag,
      backgroundImage: MaltaImage,
      title: "Study in Malta",
      link: 'studyabroad/Malta',

      subtitle:
        "Widen your career scope by studying in Malta in some of the top most globally ranked universities.",
    },
    {
      flag: SwedenFlag,
      backgroundImage: SwedenImage,
      title: "Study in Sweden",
      link: 'studyabroad/Sweden',

      subtitle:
        "Widen your career scope by studying in Sweden in some of the top most globally ranked universities.",
    },

    {
      flag: FranceFlag,
      backgroundImage: FranceImage,
      title: "Study in France",
      link: 'studyabroad/France',

      subtitle:
        "Widen your career scope by studying in France in some of the top most globally ranked universities.",
    },

    {
      flag: IrelandFlag,
      backgroundImage: IrelandImage,
      title: "Study in Ireland",
      link: 'studyabroad/Ireland',

      subtitle:
        "Widen your career scope by studying in Ireland in some of the top most globally ranked universities.",
    },
    {
      flag: PolandFlag,
      backgroundImage: PolandImage,
      title: "Study in Poland",
      link: 'studyabroad/Poland',

      subtitle:
        "Widen your career scope by studying in Poland in some of the top most globally ranked universities.",
    },
    {
      flag: DenmarkFlag,
      backgroundImage: DenmarkImage,
      title: "Study in Denmark",
      link: 'studyabroad/Denmark',

      subtitle:
        "Widen your career scope by studying in Denmark in some of the top most globally ranked universities.",
    },
    {
      flag: NetherlandFlag,
      backgroundImage: NetherlandImage,
      title: "Study in Netherland",
      link: 'studyabroad/Netherland',

      subtitle:
        "Widen your career scope by studying in Netherland in some of the top most globally ranked universities.",
    },

  ];
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "absolute -top-24 right-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-2 border-primary hover:bg-primary hover:text-[#ffffff] max-lg:hidden"
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
          "absolute -top-24 right-16 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-2 border-primary hover:bg-primary hover:text-[#ffffff] max-lg:hidden"
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
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
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
          <h2 className="sub-heading text-primary mt-3">
            We bring you an invaluable opportunity for studying abroad
          </h2>
        </div>

        <div className="mt-8">
          <Slider {...settings}>
            {studyabroadData.map((studyabroad) => {
              return (
                <div key={studyabroad.title}>
                  <Link href={studyabroad.link}>
                    <StudyCard
                      title={studyabroad.title}
                      subtitle={studyabroad.subtitle}
                      backgroundImage={studyabroad.backgroundImage}
                      flag={studyabroad.flag}
                    />
                  </Link>
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
