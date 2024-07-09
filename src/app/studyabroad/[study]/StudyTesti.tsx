import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const StudyTesti = ({ testi }: { testi: string }) => {
  return (
    <div className="rounded-xl bg-primary px-[55px] py-[41px] text-background ">
      <p className="relative">
        {testi}

        <BiSolidQuoteAltLeft className="absolute -left-4 -top-6 text-[24px]" />
        <BiSolidQuoteAltRight className="absolute -bottom-3 right-1 text-[24px]" />
      </p>
    </div>
  );
};

export default StudyTesti;
