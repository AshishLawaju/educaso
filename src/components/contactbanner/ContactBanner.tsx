import Button from "../common/button/Button";

const ContactBanner = () => {
  return (
    <section className="container py-10 sm:py-40 lg:py-[116px]">
      <div className="flex flex-col items-center justify-between rounded-3xl bg-primary p-[32px] sm:p-[60px] text-background max-lg:justify-start lg:flex-row">
        <div>
          <h2 className="sub-heading text-background lg:w-[55%]">
            There&apos;s a University waiting to fulfil your study goals
          </h2>
          <p className="mt-2 w-[80%] lg:mt-3 lg:w-[60%]">
            Get expert advice on choosing education institutes, addressing the
            admissions process, scholarships, etc.
          </p>
        </div>
        <div className="max-lg:w-full max-lg:mt-4 whitespace-nowrap">
          <Button
            buttonTittle={"Contact Us"}
            backgroundColors={"ffffff"}
            textColors={"#09117C"}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
