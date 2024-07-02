type testFAQType = {
  faq: {
    ques: string;
    ans: string[];
  };
};

const TestFAQ: React.FC<testFAQType> = ({ faq }) => {
  return (
    <>
      <div className="w-[596px]x  max-lg:mt-[123px] rounded-xl bg-[#fefdfd] px-8 py-10 ">
        <h3 className="small-sub-heading text-primary">{faq?.ques}</h3>
        <ul className="ml-5 mt-3 list-disc text-paragraph ">
            
          <>
            {Array.isArray(faq.ans) &&
              faq.ans.map((ans) => <li key={ans}>{ans}</li>)}
          </>
        </ul>
      </div>
    </>
  );
};

export default TestFAQ;
