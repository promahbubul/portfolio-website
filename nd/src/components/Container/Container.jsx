import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-5xl  w-full mx-auto p-5 lg:p-2 ">
      {children}
    </div>
  );
};

export default Container;
