import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const BlogCard = ({image, author, date, title, desc, link}) => {
  return (
    <div className="w-full flex  flex-col justify-between shadow-base-500 shadow-2xl pb-5">
      <div className="">
        <img src={image} alt="" className="h-48 w-full" />
        <div className="px-5 py-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm text-orange-600 font-light">By {author}</p>
            <p className="text-sm text-blueSecondary font-light">{date}</p>
          </div>
          <div className="">
            <h3 className="leading-loose text-xl font-merriweather font-semibold text-blueOne ">
              {title}
            </h3>
            <p className="text-blueSecondary text-sm font-poppins">{desc}</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <button className="text-base font-poppins font-bold text-blueOne hover:text-orange-600 hover:duration-300 hover:ease-in-out flex flex-row gap-1 items-center ">
          Read More <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default BlogCard