import React from "react";
import { FaArrowRight } from "react-icons/fa";

type buttonType = {
  buttonTittle: String;
  backgroundColors?: String;
  textColors?: String;
};

const Button = ({ buttonTittle, textColors, backgroundColors }: buttonType) => {
  return (
    <button
      type="button"
      className={`flex items-center max-sm:text-sm gap-[6px] rounded-md bg-primary px-[18px] py-3 text-background `}
      style={{ 
        backgroundColor: `#${backgroundColors}`, 
        color: `${textColors}`
      }}
    >
      {buttonTittle} <FaArrowRight className="max-sm:text-sm"/>
    </button>
  );
};

export default Button;
