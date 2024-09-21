import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const RecentProjectCard = ({ author, image, title, desc, link }) => {
  return (
    <div className="border shadow-md flex flex-col justify-between  shadow-base-500 w-full ">
      <div className="w-full">
        <img src={image} alt="" className="w-full h-56" />
        <div className="px-5 pt-5">
          <p className="text-base font-semibold font-merriweather text-orange-600">
            {author}
          </p>
          <h3 className="text-[#001355] text-2xl leading-loose font-bold font-merriweather">
            {title}
          </h3>
          <p className="text-[#001255af] font-poppins font-thin text-sm">
            {desc}
          </p>
        </div>
      </div>
      <div className="p-5  mx-auto ">
        <button className="text-center flex flex-row items-center gap-2 px-5 py-3 rounded-md font-merriweather text-lg font-bold underline text-[#001355]   ">
          View Case Studio <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default RecentProjectCard;
