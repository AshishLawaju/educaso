import Image from "next/image";
import whats from "./assets/whats.png";
import viber from "./assets/viber.png";

const Header = () => {
  return (
    <nav className="bg-red-500 bg-primary font-light text-background">
      <div className="container flex justify-between py-[17px] text-[12px]">
        <p>
          infoeducasoabroad@gmail.com <br className="sm:hidden" />{" "}
          <span className="hidden sm:inline"> &nbsp; | &nbsp;</span>
          <span className="break-all">
            {" "}
            infoeducasoabroadconsultancy@gmail.com{" "}
          </span>
          <span className="hidden sm:inline"> &nbsp; | &nbsp;</span>
          <br className="sm:hidden" /> mayakarki020@gmail.com
        </p>
        <p className="whitespace-nowrap max-lg:hidden">+977 9848743847</p>

        <div className="flex flex-col items-center">
          <p className="whitespace-nowrap lg:hidden">+977 9848743847</p>
          <div className="flex gap-x-3 max-lg:mt-2 max-lg:justify-end">
            <div className="h-[24px] w-[24px]">
              <Image src={viber} alt="viber"></Image>
            </div>
            <div className="h-[24px] w-[24px]">
              <Image src={whats} alt="whatsapp"></Image>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
