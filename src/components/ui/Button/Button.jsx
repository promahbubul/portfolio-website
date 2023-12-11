import React from "react";

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      className="text-white cursor-pointer hover:shadow-md hover:shadow-orange-400 hover:duration-300 ease-in-out transition-all  bg-orange-600 hover:bg-orange-500 text-lg py-3 px-5 rounded-md"
    >
      {text}
    </a>
  );
};

export default Button;
