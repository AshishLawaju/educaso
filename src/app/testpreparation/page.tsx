import Accordian from "@/components/common/accordian/Accordian";
import FAQ from "@/components/common/faq/FAQ";
import React from "react";
import TestOverview from "./component/TestOverview";

const TestPreparation = () => {
  return (
    <main className="container py-8">
      <TestOverview/>
      <FAQ/>
    </main>
  );
};

export default TestPreparation;
