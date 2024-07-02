import Image from "next/image";
import Link from "next/link";
import touch1 from "./assets/touch1.webp";
import touch2 from "./assets/touch2.webp";
import touch3 from "./assets/touch3.webp";
import Button from "@/components/common/button/Button";
const Pathway = () => {
  return (
    <section className="bg-primary">
        <div className="text-white container flex flex-col gap-8 py-8 sm:py-14 lg:flex-row lg:gap-[125px] lg:py-32">
          <div className="lg:w:191px] flex-1">
            <div
              data-aos="fade-up"
              className="text-xl font-semibold text-background sm:text-2xl lg:text-[32px]"
            >
              Your Pathway to a
              <br /> <p className="lg:mt-[24px]"> World-Class Education </p>
            </div>
            <p
              data-aos="fade-up"
              className="mt-2 text-[#d9d9d9] max-sm:text-sm lg:mt-4"
            >
              Embark on a transformative educational journey with our expert
              guidance and personalized support. Contact us now to start shaping
              your future through world-class academic opportunities.
            </p>
            <div className="mt-16">

            <Link href={"/contact"} >
              <Button
                buttonTittle={"Connect with us"}
                backgroundColors={"0057ff"}
                ></Button>
            </Link>
                </div>
          </div>
          <div className="flex flex-1 justify-center gap-2 max-sm:hidden lg:justify-between">
            <div className="flex flex-col justify-between max-sm:gap-4">
              <div className="h-[162px] w-full sm:w-[289px]">
                <Image
                  alt="touch"
                  src={touch1}
                  height={158}
                  width={298}
                ></Image>
              </div>

              <div className="h-[160px] w-full sm:w-[289px]">
                <Image
                  alt="touch"
                  src={touch2}
                  // height={158}
                  width={298}
                  className="h-full"
                ></Image>
              </div>
            </div>
            <div className="h-[322px] w-[298px] max-sm:hidden">
              <Image
                alt="touch"
                src={touch3}
                height={328}
                width={298}
                className="h-full"
              ></Image>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Pathway