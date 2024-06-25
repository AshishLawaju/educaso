import Image from "next/image";
import whats from "./assets/whats.png";
import viber from "./assets/viber.png";

const Header = () => {
  return (
    <nav className="bg-primary text-background font-light  bg-red-500">
      <div className="container py-[17px] flex justify-between text-[12px]">
        <p>
          infoeducasoabroad@gmail.com &nbsp;  | &nbsp;  infoeducasoabroadconsultancy@gmail.com &nbsp;  |&nbsp;  
          mayakarki020@gmail.com
        </p>
        <p>+977 9848743847</p>
        <div className="flex gap-x-3">
          <Image src={viber} alt="viber"></Image>
          <Image src={whats} alt="whatsapp"></Image>
        </div>
      </div>
    </nav>
  );
};

export default Header;
