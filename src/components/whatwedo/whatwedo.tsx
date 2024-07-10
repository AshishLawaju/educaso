import Whatwedocard from "./whatwedocard";
import accomodation from "./assets/ACCOMODATIONARRANGEMENT.webp";
import careerconcselling from "./assets/CAREERCOUNSELLING.webp";
import scholarship from "./assets/SCHOLARSHIPASSITANCE.webp";
import test from "./assets/TEST.webp";
import university from "./assets/UNIVERSITY.webp";
import visa from "./assets/VISA.webp";
import Capital from "../Capital/Capital";
import Readmore from "../common/button/readmore/Readmore";

const Whatwedo = () => {
  const whatwedoData = [
    {
      title: "TEST PREPARATION",
      image: test,
    },
    {
      title: "VISA GUIDANCE",
      image: visa,
    },
    {
      title: "ACCOMODATION ARRANGEMENT",
      image: accomodation,
    },
    {
      title: "CAREER COUNSELLING",
      image: careerconcselling,
    },
    {
      title: "UNIVERSITY SEARCH",
      image: university,
    },
    {
      title: "SCHOLARSHIP ASSITANCE",
      image: scholarship,
    },
  ];
  return (
    <section className=" my-8 bg-[#f7f7ff] sm:py-14 lg:py-[116px]">
      <div className="container flex max-lg:flex-col-reverse max-lg:gap-8">
        <div className="grid flex-1 grid-cols-1 place-content-center place-items-center gap-3 sm:grid-cols-2 xl:grid-cols-3 max-sm:pb-10">
          {whatwedoData.map((whatwedo) => (
            <div key={whatwedo.title} className="w-full">
              <Whatwedocard title={whatwedo.title} image={whatwedo.image} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-center text-start max-sm:mt-8 lg:justify-center">
          <div className="lg:w-[70%]">
            <h3 className="small-sub-heading text-primary">
              <span className="leading-4">
                <Capital character="W" />
              </span>
              HAT WE DO!
            </h3>
            <h2 className="sub-heading mt-3 text-primary">
              We make your study abroad dreams a simpler reality
            </h2>
            {/* <Readmore /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
