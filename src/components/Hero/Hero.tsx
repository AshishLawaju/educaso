import Image from "next/image"
import heroImg from "../../components/Hero/assets/hero.png"
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="all bg-[#09117C] lg:flex justify-between 2xl:px-[170px] xl:px-[50px] lg:px-[20px] ">

        <div className="left-side xl:pt-[206px] lg:pt-[200px] sm:pt-[100px] pt-[50px]">

          <div className="sub_heading xl:text-[45px] sm:text-[35px] text-[25px] text-[#FEFDFD] font-semibold lg:text-left text-center">
            <h1><span className="bg-[#FEFDFD] text-[#09117C] pl-3">U</span>nlock a Brighter Future</h1>
            <h1 className="-mt-[4px]">with Expert Language </h1>
            <h1 className="-mt-[4px]">and Academic Guidance</h1>
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

          <div className="bg-[#FFFFFF] absolute md:mt-[100px] sm:mt-[80px]  2xl:right-[480px] xl:right-[400px] lg:right-[270px]  md:ml-[100px] sm:ml-[50px] ml-5 xl:px-[20px] sm:px-[10px] px-2 xl:py-[20px] sm:py-[10px] py-2  rounded-[12px]">
            <h1 className="text-[14px]">Visa Approval Rate</h1>

            <div className="bg-[#DDDDDD] w-[200px] h-[4px] mt-3 rounded-[33px]">
              <p className="bg-[#09117C] w-[189px] h-[4px] rounded-[33px]"></p>
            </div>
            <p className="pt-2">89%</p>
          </div>


          <div className=" flex lg:justify-normal justify-center">
            <Image className="xl:w-[440px] w-[350px] xl:h-[600px] h-[550px]" src={heroImg} alt="heroImage" />
          </div>

          <div className="bg-span-white px-[20px] py-[20px] w-[155px] h-[200px] rounded-[12px] flex flex-col items-center justify-between  absolute 2xl:-mt-[290px] xl:-mt-[250px]
          lg:-mt-[280px] md:-mt-[270px] sm:-mt-[280px]   -mt-[180px] 2xl:right-[550px] xl:right-[440px] lg:right-[330px] md:right-[100px] sm:right-[30px] right-[10px]">
            <h1 className="mb-2 text-center">Test Success Rate</h1>

            <div className="relative bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center">
              <div className="border-2 border-[#09117C] w-[76px] h-[76px] rounded-full flex items-center justify-center">
                <h1 className="text-black text-xl font-bold">95%</h1>
              </div>
            </div>
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