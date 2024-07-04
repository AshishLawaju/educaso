import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiPlayMiniFill } from "react-icons/ri";

const Footer = () => {
  const studyabroadData = [
    { name: "Study in USA", id: "UnitedStates" },
    { name: "Study in UK", id: "UnitedKingdom" },
    { name: "Study in Canada", id: "Canada" },
    { name: "Study in South Korea", id: "SouthKorea" },
    { name: "Study in Japan", id: "Japan" },

    { name: "Study in Australia", id: "Australia" },
  ];
  return (
    <footer className="bg-primary">
      <main className="gap-x-32x container flex flex-col justify-between gap-y-10 py-12 text-background lg:flex-row">
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

        <div className="justify-between sm:flex lg:w-[53%]">
          <div>
            <h3 className="small-sub-heading text-background">Study Abroad</h3>
            <hr className="mt-3 w-[30%] border-[1.5px] border-background" />
            <div className="mt-6 flex flex-col gap-y-3">
              {studyabroadData.map((stu) => (
                <div key={stu.name} className="flex items-center gap-4">
                  <div className="h-[12.5px] w-[6.25px] text-span-white">
                    <RiPlayMiniFill className="text-span-white" />
                  </div>
                  <Link
                    href={`/studyabroad/${stu.id}`}
                    className="transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    {stu.name}
                  </Link>
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
                <Link href={`/testpreparation/IELTS`} className="transition-all duration-300 ease-in-out hover:scale-105">PTE</Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-[12.5px] w-[6.25px] text-span-white">
                  <RiPlayMiniFill className="text-span-white" />
                </div>

                <Link href={`/testpreparation/PTE`} className="transition-all duration-300 ease-in-out hover:scale-105">IELTS</Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-[12.5px] w-[6.25px] text-span-white">
                  <RiPlayMiniFill className="text-span-white" />
                </div>
                <Link href={`/testpreparation/Duolingo`} className="transition-all duration-300 ease-in-out hover:scale-105">Duolingo</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
