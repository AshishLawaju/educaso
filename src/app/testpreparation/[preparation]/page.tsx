import BreadCum from "@/components/common/breadcum/BreadCum";
import testBanner from "./assets/testbanner.webp";
import { testPreparationData } from "@/data/testpreparation/testpreparation.data";
import TestOverview from "../component/TestOverview";
import { useEffect } from "react";
import TestFAQ from "../component/TestFAQ";
import Image from "next/image";
import lrarrow from "./assets/LRarrow.webp";
import rlarrow from "./assets/RLarrow.webp";
import register from "./assets/register.webp";
import Pathway from "@/components/common/dk/pathway";
import FAQ from "@/components/common/faq/FAQ";
import { MdOutlineTask } from "react-icons/md";
type testPreparationType = {
  params: {
    preparation: string;
  };
};

const TestPrepartion = ({ params }: testPreparationType) => {
  // console.log({ params });
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const currentTest = testPreparationData.find((test) => {
    return test.id == params.preparation;
  });

  // console.log(currentTest);

  return (
    <main className="py-8">
    {  <div className="">
        <BreadCum
          photo={testBanner}
          title={currentTest?.id}
          key={currentTest?.id}
          path={` / Test Preparation / ${currentTest?.id}`}
        />
      </div>}

    {  <TestOverview
        overviewContent={`${currentTest?.overview}`}
        title={`${currentTest?.id}`}
      />}
      {/* test format */}
    {  <div className="container py-10 sm:py-[80px] lg:py-[144px]">
        <h3 className="small-sub-heading text-center text-primary">
          {currentTest?.id} Test Format in Detail:
        </h3>
        <div className="max-md:overflow-x-scroll">
          <table className="mt-6 w-full border-collapse rounded-xl border bg-[#f7f7ff]">
            <>
              <thead className="border">
                <tr className="border bg-primary text-span-white">
                  {currentTest?.testFormat &&
                    currentTest?.testFormat[0].map((hed) => (
                      <th key={hed[0]} className="border px-6 py-4">
                        {hed}
                      </th>
                    ))}
                </tr>
              </thead>

              <tbody className="rounded-xl border">
                {currentTest?.testFormat &&
                  currentTest?.testFormat.map((data: any, ind) => (
                    <tr key={ind} className="border">
                      {data.map((tabledata: any) => (
                        <td key={tabledata} className="border px-6 py-4">
                          {Array.isArray(tabledata)
                            ? tabledata.map((t) => (
                                <p key={t} className="mt-3 flex gap-1">
                                  <span className="mt-1">
                                    <MdOutlineTask className="text-primary" />
                                  </span>
                                  {t}
                                </p>
                              ))
                            : tabledata}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </>
          </table>
        </div>
      </div>}
      {/*  test FAQ
       */}

      <div className="bg-[#f4f4fc] py-10 sm:py-14 lg:py-20 overflow-hidden">
        <div className="container flex flex-col">
          {currentTest!.faq &&
            currentTest?.faq.map((faq, index) => (
              <div
                key={faq.ques}
                className={`${index % 2 == 0 ? "" : "flex w-full justify-end"} `}
              >
                <div className="relative w-full  lg:w-[50%]">
                  {index % 2 == 0 ? (
                    <div className="absolute  -top-[124px] max-lg:left-[20%] lg:right-0 h-[122px] w-[201px]">
                      {index !== 0 && (
                        <Image
                          alt="follow educaso"
                          src={rlarrow}
                          className="h-full w-full"
                        ></Image>
                      )}
                    </div>
                  ) : (
                    <div className="absolute h-[122px] w-[201px] max-md:left-[20%] lg:-top-[124px]">
                      <Image
                        alt="follow educaso"
                        src={lrarrow}
                        className="h-full w-full"
                      ></Image>
                    </div>
                  )}
                  <div className={`${index == 0 ? "" : "max-lg:mt-[123px]"}`}>
                    <TestFAQ faq={faq} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* register */}

      {<section className="container flex justify-between py-10 sm:py-20 lg:py-[144px]">
        <div className="flex-1">
          <h3 className="small-sub-heading text-primary">
            How to register {currentTest?.id}?
          </h3>
          <p className="mt-6 text-paragraph">
            To register for the {currentTest?.id} test, follow these simple
            steps:
          </p>
          <ul className="ml-5 mt-3 list-disc">
            {currentTest?.register &&
              currentTest?.register.map((reg) => <li key={reg}>{reg}</li>)}
          </ul>
        </div>
        <div className="hidden flex-1 justify-end lg:flex">
          <Image alt="register" src={register}></Image>
        </div>
      </section>}

      <Pathway />
      <FAQ />
    </main>
  );
};

export default TestPrepartion;
