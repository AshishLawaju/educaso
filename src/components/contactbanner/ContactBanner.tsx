"use client"
import { useRouter } from "next/navigation";
import Button from "../common/button/Button";

const ContactBanner = () => {
  const router = useRouter()
  return (
    <section className="sm:container py-10x sm:py-40x lg:py-[116px]">
      <div className="flex flex-col items-center justify-between rounded-3xl bg-primary p-[32px] sm:p-[60px] text-background max-lg:justify-start lg:flex-row">
        <div>
          <h2 className="sub-heading text-background lg:w-[55%]">
            There&apos;s a University waiting to fulfil your study goals
          </h2>
          <p className="mt-2 sm:w-[80%] lg:mt-3 lg:w-[60%] text-span-white">
            Get expert advice on choosing education institutes, addressing the
            admissions process, scholarships, etc.
          </p>
        </div>
        <div className="max-lg:w-full max-lg:mt-4 whitespace-nowrap" onClick={()=>router.push("/contact")}>
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
