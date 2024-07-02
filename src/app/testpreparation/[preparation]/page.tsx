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
      <BreadCum
        photo={testBanner}
        title={currentTest?.id}
        key={currentTest?.id}
        path={` / Test Preparation / ${currentTest?.id}`}
      />

      <TestOverview
        overviewContent={`${currentTest?.overview}`}
        title={`${currentTest?.id}`}
      />
      {/* test format */}
      <div className="container">
        <h3 className="small-sub-heading text-center text-primary">
          {currentTest?.id} Test Format in Detail:
        </h3>

        <table className="border-collapse border">
          <>
            <thead className="border">
              <tr className="border">
                {currentTest?.testFormat &&
                  currentTest?.testFormat[0].map((hed) => (
                    <th key={hed[0]}>{hed}</th>
                  ))}
              </tr>
            </thead>

            <tbody className="border">
              {currentTest?.testFormat &&
                currentTest?.testFormat.map((data: any, ind) => (
                  <tr key={ind} className="border">
                    {data.map((tabledata: any) => (
                      <td key={tabledata} className="border">
                        {Array.isArray(tabledata)
                          ? tabledata.map((t) => <p key={t}>{t}</p>)
                          : tabledata}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </>
        </table>
      </div>

      {/*  test FAQ
       */}

      <div className="bg-[#f4f4fc] py-20">
        <div className="container flex flex-col">
          {currentTest!.faq &&
            currentTest?.faq.map((faq, index) => (
              <div
                key={faq.ques}
                className={`${index % 2 == 0 ? "" : "flex w-full justify-end"} `}
              >
                <div className="relative w-[50%]">
                  {index % 2 == 0 ? (
                    <div className="absolute -top-[124px] right-0 h-[122px] w-[201px]">
                      {index !== 0 && (
                        <Image
                          alt="follow educaso"
                          src={rlarrow}
                          className="h-full w-full"
                        ></Image>
                      )}
                    </div>
                  ) : (
                    <div className="absolute -top-[124px] h-[122px] w-[201px]">
                      <Image
                        alt="follow educaso"
                        src={lrarrow}
                        className="h-full w-full"
                      ></Image>
                    </div>
                  )}
                  <TestFAQ faq={faq} />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* register */}

      <section className="container flex justify-between py-[144px]">
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
        <div className="flex flex-1 justify-end">
          <Image alt="register" src={register}></Image>
        </div>
      </section>

      <Pathway/>
      <FAQ/>
    </main>
  );
};

export default TestPrepartion;
