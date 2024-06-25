import { BiSolidRightArrow } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiPlayMiniFill } from "react-icons/ri";

const Footer = () => {
  const studyabroadData = [
    "Study in USA",
    "Study in UK",
    "Study in Canada",
    "Study in South Korea",
    "Study in Japan",
    "Study in Europe",
    "Study in Australia",
  ];
  return (
    <footer className="bg-primary">
      <main className="container flex flex-col justify-between gap-x-32x gap-y-10 py-12 text-background lg:flex-row">
        <div>
          <div className="flex gap-2">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border">
              <FaRegEnvelope />
            </div>
            <div>
              <p>infoeducasoabroad@gmail.com </p>
              <p className="break-all">
                infoeducasoabroadconsultancy@gmail.com
              </p>
              <p>mayakarki020@gmail.com</p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border">
              <MdOutlineLocalPhone />
            </div>
            +977 9848743847
          </div>

          <div className="mt-4 flex gap-2">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border">
              <LuMapPin />
            </div>
            Putalisadak, Kathmandu
          </div>
        </div>

        <div className="justify-between sm:flex  lg:w-[53%]">
          <div>
            <h3 className="small-sub-heading text-background">Study Abroad</h3>
            <hr className="mt-3 w-[30%] border-[1.5px] border-background" />
            <div className="mt-6 flex flex-col gap-y-3">
              {studyabroadData.map((stu) => (
                <div key={stu} className="flex items-center gap-4">
                  <div className="h-[12.5px] w-[6.25px] text-span-white">
                    <RiPlayMiniFill className="text-span-white" />
                  </div>
                  {stu}
                </div>
              ))}
            </div>
          </div>
          <div className="max-sm:mt-10">
            <h3 className="small-sub-heading text-background">
              Study Preparation
            </h3>
            <hr className="mt-3 w-[30%] border-[1.5px] border-background" />

            <div className="mt-6 flex flex-col gap-y-3">
              <div className="flex items-center gap-4">
                <div className="h-[12.5px] w-[6.25px] text-span-white">
                  <RiPlayMiniFill className="text-span-white" />
                </div>
                PTE
              </div>
              <div className="flex items-center gap-4">
                <div className="h-[12.5px] w-[6.25px] text-span-white">
                  <RiPlayMiniFill className="text-span-white" />
                </div>
                IELTS
              </div>
              <div className="flex items-center gap-4">
                <div className="h-[12.5px] w-[6.25px] text-span-white">
                  <RiPlayMiniFill className="text-span-white" />
                </div>
                Duolingo
              </div>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
