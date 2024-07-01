import Image from "next/image";
import testPhoto from "../assets/testoverview.webp";
import Capital from "@/components/Capital/Capital";
const TestOverview = () => {
  return (
    <section className="flex gap-[165px]">
      <div className="flex-1">
        <h3 className="small-sub-heading">
          <span className="leading-5">
            <Capital character="I" />
          </span>
          ELTS Overview
        </h3>
        <div className="mt-6"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          ipsam quod atque quibusdam minus pariatur, nobis autem saepe deserunt
          sunt corrupti vitae fugiat cumque reprehenderit sequi fugit facilis et
          quo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          ipsam quod atque quibusdam minus pariatur, nobis autem saepe deserunt
          sunt corrupti vitae fugiat cumque reprehenderit sequi fugit facilis et
          quo!
        </p>
      </div>
      <div className="h-[255px] w-[348px]">
        <Image
          alt="test preparation"
          className="h-full w-full"
          src={testPhoto}
        ></Image>
      </div>
    </section>
  );
};

export default TestOverview;
