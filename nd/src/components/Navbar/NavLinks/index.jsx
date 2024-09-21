import { useState } from "react";
import navLinkData from "../../../constants/navlinks.constant";

const NavLinks = () => {
  const [active, setAction] = useState("");
  return (
    <>
      {navLinkData.map((item) => (
        <a
          onClick={() => setAction(item.title)}
          key={item.id}
          className={`${
            active === item.title
              ? "text-orange-500"
              : "text-slate-500 dark:text-slate-100 "
          } text-lg p-2 font-semibold hover:text-orange-500 active:text-orange-500  transition-all ease-out duration-300`}
          href={item.to}
        >
          {item.title}
        </a>
      ))}
    </>
  );
};
export default NavLinks;
