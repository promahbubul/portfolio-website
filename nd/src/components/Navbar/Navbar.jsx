import Container from "../Container/Container";

import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div
      id="#"
      className="md:navbar  top-0 z-10  bg-base-100 shadow-md shadow-orange-600 "
    >
      <Container>
        <div className="md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
          <h2 className="mb-5 cursor-pointer text-center text-2xl text-[#001355] dark:text-white font-black">
            MAHB
            <span className="bg-orange-600 text-white px-1 mx-[1px] rounded-md ">
              U
            </span>
            B
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="md:navbar-end w-full  text-right">
          <a
            href="/cv.pdf"
            className="text-white w-full inline-block text-center md:w-auto  py-3 text-lg font-semibold rounded-md hover:bg-orange-500 cursor-pointer px-5 bg-orange-600"
          >
            Download Cv
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
