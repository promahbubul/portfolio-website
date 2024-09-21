/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div
      data-aos="flip-up"
      className="shadow-orange-300 dark:border-[0.5px] dark:border-slate-400 dark:shadow-slate-600 transition-all flex flex-col justify-between gap-2 shadow-md  hover:shadow-orange-500  hover:shadow-lg  ease-in-out duration-500 cursor-pointer w-full  rounded-lg p-5"
    >
      <div className="">
        <img className="w-20 text-center mx-auto" src={image} alt="" />
        <h3 className="text-2xl text-[#001355] dark:text-slate-200 my-5 font-merriweather font-semibold">
          {title}
        </h3>
        <p className="text-[#001255af] dark:text-slate-400 font-merriweather text-base">
          {description}
        </p>
      </div>
      <BsArrowRight className="text-2xl text-orange-600 font-bold text-right block mx-auto cursor-pointer" />
    </div>
  );
};

export default ServiceCard;

/// #FF8F00
