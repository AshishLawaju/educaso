import Image from "next/image";
import globe from "./assets/globe.webp";
const Growth = () => {
  return (
    <section className="bg-primary text-background">
      <div className="container py-20">
        <div className="flex justify-between gap-20">
          <div className="flex-1">
            <h2 className="font-raleway text-[48px] font-bold leading-tight">
              Accelerating your academic growth overseas
            </h2>
            <p className="mt-3">
              Our education consultants can support with excellence in guidance
              with education and visa consultancy in Nepal. We&apos;ve been
              growing since 2003 with over 50 branches across 15 countries. You
              can enjoy a wide range of services for fulfilling your dreams to
              study in Australia, the UK, Canada and the US.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Image src={globe} alt="connecting educaso to world"></Image>
          </div>
        </div>

        <hr className="my-[48px] w-full text-[#979DED]" />

        <div className="grid grid-cols-3 justify-items-center text-center">
          <div>
            <p className="text-center font-light text-background">
              INTERNATIONAL STUDENTS <br /> ASSISTED
            </p>
            <p className="sub-heading mt-3 text-span-white">100,000+</p>
          </div>
          <div>
            <p className="text-center font-light text-background">
              SCHOLARSHIPS <br />
              APPROVED
            </p>
            <p className="sub-heading mt-3 text-span-white">10,000+</p>
          </div>
          <div>
            <p className="text-center font-light text-background">
              ENROLLED IN <br />
              IELTS/PTE PREPARATION CLASSES
            </p>
            <p className="sub-heading mt-3 text-span-white">10,000+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
