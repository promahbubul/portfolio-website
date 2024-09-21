/* eslint-disable react/prop-types */

const SectionHeading = ({ title, align, subtitle, justify }) => {
  return (
    <div className={`${align} mb-10 max-w-sm text-center md:text-left  `}>
      <div
        className={`mb-2 flex flex-row items-center justify-center md:${justify}`}
      >
        <div className="w-14 h-1 bg-orange-600"></div>
        <div className="w-2 h-2 rounded-full mr-2 bg-orange-600"></div>
        <h4 className="text-lg text-orange-600 dark:text-orange-400 font-merriweather">
          {title}
        </h4>
      </div>
      <h2 className="text-[#001355] dark:text-slate-200 font-bold text-3xl md:text-4xl font-merriweather leading-tight">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
