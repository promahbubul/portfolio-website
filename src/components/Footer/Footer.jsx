import React from "react";
import Container from "../Container/Container";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#001355]  shadow-inner  shadow-orange-500">
      <Container>
        <h2 className="mb-5 pt-10 cursor-pointer text-center text-2xl text-white font-black">
          MAHB<span className="bg-orange-600 px-1 mx-[1px] rounded-md ">U</span>
          B
        </h2>
        {/* Foter Menu */}
        <div className="flex flex-row gap-3 text-lg justify-center items-center text-white">
          <a className="text-lg hover:text-orange-600 py-3 p-4" href="#">
            Home
          </a>
          |
          <a className="text-lg hover:text-orange-600 py-3 p-4" href="#service">
            Service
          </a>
          |
          <a className="text-lg hover:text-orange-600 py-3 p-4" href="#about">
            About
          </a>
          |
          <a
            className="text-lg hover:text-orange-600 py-3 p-4"
            href="#protfolio"
          >
            Protfolio
          </a>{" "}
          |
          <a className="text-lg hover:text-orange-600 py-3 p-4" href="#contact">
            Contact
          </a>
        </div>
        {/* Footer Social Llink */}
        <div className="mx-auto text-center flex flex-row gap-4  justify-center items-center text-white mt-3">
          <a href="" className="">
            <button className="bg-orange-600 p-3 text-2xl rounded-md">
              <FaLinkedinIn />
            </button>
          </a>
          <a href="" className="">
            <button className="bg-orange-600 p-3 text-2xl rounded-md">
              <FaTwitter />
            </button>
          </a>
          <a href="" className="">
            <button className="bg-orange-600 p-3 text-2xl rounded-md">
              <RiWhatsappFill />
            </button>
          </a>
        </div>
        <div className="mt-10">
          <h1 className="text-center text-sm border-gray-400 text-white py-5 border-t">
            Copyright &copy; 2023 Designed by Mahbubul Alam. All right reserved.
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
