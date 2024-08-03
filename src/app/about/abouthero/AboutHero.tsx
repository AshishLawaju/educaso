import Image from "next/image"
import heroImg from "../abouthero/assets/hero.png"
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="all bg-[#09117C] lg:flex justify-between 2xl:px-[170px] xl:px-[50px] lg:px-[20px] ">

        <div className="left-side xl:pt-[206px] lg:pt-[200px] sm:pt-[100px] pt-[50px]">

          <div className="sub_heading xl:text-[45px] sm:text-[35px] text-[25px] text-[#FEFDFD] font-semibold lg:text-left text-center">
            <h1 className="text-span-white text-[48px]">
              <span className="bg-span-white text-[#09117C] pl-0 pb-0 text-[50px]">A</span>bout Us
            </h1>
          </div>

          <p className="text-[#E2E2E2] mt-[24px] lg:w-[398px] lg:text-left text-center lg:mx-0 sm:mx-[100px] mx-[30px]">
            Craft a path to world-class education with our tailored consultancy services, guiding you towards your dream university and beyond.
          </p>

          <div className="btn hidden lg:block xl:pt-[100px] pt-[80px] ">
            <button className="border-2 border-[#FEFDFD] rounded-[6px] text-[#FEFDFD] px-5 py-2 flex items-center">
              BOOK AN APPOINTMENT <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>


        <div className="right_side xl:pt-[65px] pt-[60px] pb-[79px]">

          <div className="bg-[#FFFFFF] absolute lg:px-[20px] sm:px-[15px] px-[7px] lg:py-[20px] sm:py-[15px] py-[7px] sm:mt-[40px]  md:ml-[100px] sm:ml-[50px] ml-[15px] rounded-[12px]">
            <h1 className="sm:text-[14px] text-[12px]">Visa Approval Rate</h1>

            <div className="bg-[#DDDDDD] sm:w-[200px] w-[150px] h-[4px] mt-3 rounded-[33px]">
              <p className="bg-[#09117C] sm:w-[189px] w-[120px] h-[4px] rounded-[33px]"></p>
            </div>
            <p className="pt-2 sm:text-[14px] text-[12px]">89%</p>
          </div>


          <div className=" flex lg:justify-normal justify-center">
            <Image className="xl:w-[599px] xl:h-[542px] " src={heroImg} alt="heroImage" />
          </div>



          <div className="btn flex justify-center  lg:hidden xl:pt-[100px] pt-[80px] ">
            <button className="border-2 border-[#FEFDFD] rounded-[6px] text-[#FEFDFD] px-5 py-2 flex items-center">
              BOOK AN APPOINTMENT <FaArrowRight className="ml-2" />
            </button>
          </div>

        </div>
      </div>

    </>
  )
}
export default Hero