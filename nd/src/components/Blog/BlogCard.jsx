import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCard = ({ image, author, date, title, desc, link }) => {
  return (
    <div className="w-full flex  flex-col justify-between shadow-base-500 dark:shadow-slate-900 shadow-2xl pb-5">
      <div className="">
        <img src={image} alt="" className="h-48 w-full" />
        <div className="px-5 py-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm text-orange-600 dark:text-orange-400 font-light">
              By {author}
            </p>
            <p className="text-sm text-blueSecondary dark:text-slate-300 font-light">
              {date}
            </p>
          </div>
          <div className="">
            <h3 className="leading-loose text-xl font-merriweather font-semibold text-blueOne dark:text-slate-200 ">
              {title}
            </h3>
            <p className="text-blueSecondary dark:text-slate-300 text-sm font-poppins">
              {desc}
            </p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <button className="text-base font-poppins font-bold text-blueOne dark:text-blue-500 hover:text-orange-600 hover:duration-300 hover:ease-in-out flex flex-row gap-1 items-center ">
          Read More <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
