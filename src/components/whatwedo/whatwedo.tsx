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
    <section className="bg-[#f7f7ff] py-[116px]">
      <div className="container flex">
        <div className="flex flex-1 flex-wrap gap-3">
          {whatwedoData.map((whatwedo) => (
            <div key={whatwedo.title}>
              <Whatwedocard title={whatwedo.title} image={whatwedo.image} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center text-start">
          <div className="w-[70%]">
            <h3 className="small-sub-heading text-primary">
              <span className="leading-4">
                <Capital character="W" />
              </span>
              HAT WE DO!
            </h3>
            <h2 className="sub-heading mt-3 text-primary">
              We make your study abroad dreams a simpler reality
            </h2>
            <Readmore/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
