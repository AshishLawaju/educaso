"use client";

import BreadCum from "@/components/common/breadcum/BreadCum";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import { servicesData } from "@/data/services/services.data";
import Image from "next/image";
import languageImage from "../languagePreperation.webp";
import { usePathname } from "next/navigation";

interface ServicePageProps {
  params: {
    servicepage: string;
  };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  // console.log({ params });

  const pathname = usePathname();
  // console.log({ pathname });

  const myservice = servicesData.find(
    (s) => params.servicepage == s.id,
    // console.log(s.id);
  );
  // console.log({ myservice });

  return (
    <div className="py-8">
      <BreadCum
        photo={myservice?.breadPhoto}
        title={myservice?.title}
        path={` / Services / ${myservice?.title}`}
      />
      <div className="container flex items-center justify-between py-10 sm:py-14 lg:pt-16 lg:pb-0 max-sm:text-[14px]" >
        <div className="lg:basis-3/5">
          {/* {myservice?.title} */}
          <p>{myservice?.description}</p>
          <ul className="flex flex-col gap-6 py-8">
            {myservice?.info.map((info) => (
              <li key={info} className="ml-6 list-disc">
                {info}
              </li>
            ))}
          </ul>
          <p>{myservice?.conclusion}</p>
        </div>
        <div className="flex flex-1 basis-2/5 justify-end max-lg:hidden">
          <div className="h-[485px] w-[403px]">
            <Image
              alt="language preparation"
              className="h-full w-full"
              src={myservice!.photo1}
            ></Image>
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default ServicePage;
