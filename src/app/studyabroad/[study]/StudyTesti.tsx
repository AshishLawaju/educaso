import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const StudyTesti = () => {
  return (
    <div className="text-background bg-primary px-[55px] py-[41px] rounded-3xl ">
   
   <p className="relative">

      Studying in Australia not only offers top-tier education but also provides
      a multicultural experience, diverse opportunities, and a high quality of
      life, making it an attractive destination for students worldwide.
      <BiSolidQuoteAltLeft  className="absolute -top-6 -left-4 text-[24px]" />
      <BiSolidQuoteAltRight className="absolute -bottom-3 right-3 text-[24px]" />
   </p>


    </div>
  );
};

export default StudyTesti;
