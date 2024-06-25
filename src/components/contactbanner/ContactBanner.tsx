import Button from "../common/button/Button";

const ContactBanner = () => {
  return (
    <section className="container py-[116px]">
      <div className="rounded-3xl bg-primary p-[60px] text-background flex justify-between items-center">
        <div>
          <h2 className="sub-heading text-background w-[55%]">
            There&apos;s a University waiting to fulfil your study goals
          </h2>
          <p className="mt-3 w-[60%]">
            Get expert advice on choosing education institutes, addressing the
            admissions process, scholarships, etc.
          </p>
        </div>
        <div>
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
