import React from "react";

const PoftfolioCard = ({image, title, subtitle}) => {
  return (
    <div className="hover:scale-105 w-full duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blueOne">
      <img src={image} alt="" className="w-full h-64 " />
      <div className="bg-blueOne text-white px-5 py-4">
        <h3 className="text-xl font-merriweather font-semibold">{title}</h3>
        <p className="font-thin text-xs font-poppins">{subtitle}</p>
      </div>
    </div>
  );
};

export default PoftfolioCard;
