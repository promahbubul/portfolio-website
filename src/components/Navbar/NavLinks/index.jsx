const NavLinks = () => {
  return (
    <>
      <a
        className="text-lg p-2 text-slate-500 font-semibold hover:text-orange-500 active:text-orange-500  transition-all ease-out duration-300"
        href="#"
      >
        Home
      </a>
      <a
        className="text-lg p-2 text-slate-900 font-semibold hover:text-orange-500 active:text-orange-500  transition-all ease-out duration-300"
        href="#about"
      >
        About
      </a>
      <a
        className="text-lg p-2 font-semibold hover:text-orange-500 active:text-orange-500  duration-300 ease-in-out  transition-all "
        href="#service"
      >
        Services
      </a>
      <a
        className="text-lg p-2 font-semibold hover:text-orange-500 active:text-orange-500  transition-all ease-out duration-300"
        href="#project"
      >
        Projects
      </a>
      <a
        className="text-lg p-2 font-semibold hover:text-orange-500 active:text-orange-500  transition-all ease-out duration-300"
        href="#contact"
      >
        Contact
      </a>
    </>
  );
};
export default NavLinks;
