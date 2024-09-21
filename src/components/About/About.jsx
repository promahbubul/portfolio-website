import SectionHeading from "../ui/SectionHeading/SectionHeading";
import Container from "../Container/Container";
import dashboardImage from "../../assets/dashboard.jpg";
import websiteImage from "../../assets/website.jpg";
import Button from "../ui/Button/Button";

const About = () => {
  return (
    <Container>
      <section
        id="about"
        className=" my-20 flex  h-full flex-col-reverse md:flex-row md:gap-5"
      >
        {/* left */}
        <div
          data-aos="fade-right"
          className="w-full   flex flex-row   gap-2 md:w-5/12"
        >
          <img
            className="row-span-2 rounded-md h-full  w-8/12"
            src="profile.png"
            alt=""
          />
          <div className="flex flex-col gap-2 h-full w-4/12">
            <img className=" h-full  w-full" src={dashboardImage} alt="" />
            <img className=" h-full  w-full" src={websiteImage} alt="" />
          </div>
        </div>
        {/* right */}
        <div
          data-aos="fade-right"
          className="w-full  h-full  flex flex-col justify-center md:w-7/12"
        >
          <SectionHeading
            align="text-left"
            title="About Me"
            subtitle="I Enjoy Solving Problem With Scalable Solutions"
          />
          <p className="text-[#001255af] dark:text-slate-300 mb-5 text-justify md:text-left   text-base md:text-lg font-poppins">
            I am a frontend developer with a strong focus on creating responsive
            and user-friendly web applications. With expertise in React, Redux,
            Node.js, MongoDB, and Tailwind CSS, I excel at transforming designs
            into functional interfaces.
          </p>
          <p className="text-[#001255af] dark:text-slate-300 mb-5  text-justify md:text-left font-poppins  text-base md:text-lg">
            My passion for innovation drives me to continuously improve my
            skills and deliver high-quality solutions that meet diverse client
            needs, ensuring an engaging user experience at every turn.
          </p>
          <div className="">
            <Button text="Download CV" link="#" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
