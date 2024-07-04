import Image from "next/image";
import whats from "./assets/whats.png";
import viber from "./assets/viber.png";
import Link from "next/link";

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
        <Link href="tel:+9779848743847" target="_blank">
          <p className="whitespace-nowrap max-lg:hidden">+977 9848743847</p>
        </Link>

        <div className="flex flex-col items-center">
          <Link href="tel:+9779848743847" target="_blank">
          <p className="whitespace-nowrap lg:hidden">+977 9848743847</p>
          </Link>
          <div className="flex gap-x-3 max-lg:mt-2 max-lg:justify-end">
            <Link href="viber://chat?number=9779848743847" target="_blank">
              <div className="h-[24px] w-[24px]">
                <Image src={viber} alt="viber" />
              </div>
            </Link>

            <Link
              href="https://wa.me/9779848743847?text=Hello%20Educaso%20!"
              target="_blank"
            >
              <div className="h-[24px] w-[24px]">
                <Image src={whats} alt="whatsapp"></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
