import BreadCum from "@/components/common/breadcum/BreadCum";
import testBanner from "./assets/testbanner.webp";
import { testPreparationData } from "@/data/testpreparation/testpreparation.data";
import TestOverview from "../component/TestOverview";
import { useEffect } from "react";

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
    <main className="container py-8">
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

      <section>
        <h3 className="small-sub-heading text-center text-primary">
          {currentTest?.id} Test Format in Detail:
        </h3>

        <table>
          <>
            <thead>
              {currentTest?.testFormat &&
                currentTest?.testFormat[0].map((hed) => (
                  <th key={hed[0]}>{hed}</th>
                ))}
            </thead>

            {currentTest?.testFormat &&
              currentTest?.testFormat.map((data, ind) => (
                <tbody key={ind}>{data}</tbody>
              ))}
          </>
        </table>
      </section>
    </main>
  );
};

export default TestPrepartion;
