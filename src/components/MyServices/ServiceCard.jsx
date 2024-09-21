import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="shadow-orange-300 flex flex-col justify-between gap-2 shadow-md hover:shadow-orange-500  hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer w-full  rounded-lg p-5">
      <div className="">
        <img className="w-20 text-center mx-auto" src={image} alt="" />
        <h3 className="text-2xl text-[#001355] my-5 font-merriweather font-semibold">
          {title}
        </h3>
        <p className="text-[#001255af] font-merriweather text-base">
          {description}
        </p>
      </div>
      <BsArrowRight className="text-2xl text-orange-600 font-bold text-right block mx-auto cursor-pointer" />
    </div>
  );
};

export default ServiceCard;

/// #FF8F00
