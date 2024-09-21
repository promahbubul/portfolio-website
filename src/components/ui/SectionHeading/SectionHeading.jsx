import React from "react";

const SectionHeading = ({ title,align, subtitle, justify }) => {
  return (
    <div className={`${align} mb-5 max-w-sm  `}>
      <div className={`mb-2 flex flex-row items-center ${justify}`}>
        <div className="w-14 h-1 bg-orange-600"></div>
        <div className="w-2 h-2 rounded-full mr-2 bg-orange-600"></div>
        <h4 className="text-lg text-orange-600 font-merriweather">{title}</h4>
      </div>
      <h2 className="text-[#001355] font-bold text-4xl font-merriweather leading-tight">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
