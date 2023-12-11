import React from "react";
import SectionHeading from "../ui/SectionHeading/SectionHeading";
import Container from "../Container/Container";
import dashboardImage from "../../assets/dashboard.jpg";
import websiteImage from "../../assets/website.jpg";
import profileImage from "../../assets/profile.avif";
import Button from "../ui/Button/Button";

const About = () => {
  return (
    <Container>
      <section id="about" className=" my-20 flex flex-row md:gap-5">
        {/* left */}
        <div className="w-full flex flex-row h-[350px]  gap-2 md:w-5/12">
          <img
            className="row-span-2 rounded-md h-full  w-7/12"
            src={profileImage}
            alt=""
          />
          <div className="flex flex-col gap-2 h-full w-5/12">
            <img className=" h-full  w-full" src={dashboardImage} alt="" />
            <img className=" h-full  w-full" src={websiteImage} alt="" />
          </div>
        </div>
        {/* right */}
        <div className="w-full flex flex-col justify-center md:w-7/12">
          <SectionHeading
            align="text-left"
            title="About Me"
            subtitle="I Enjoy Solving Problem With Scalable Solutions"
          />
          <p className="text-[#001255af] mb-5 font-merriweather text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eaque veniam nam voluptatibus qui at harum vel similique optio
            assumenda fuga dolorum nulla dolores natus, reiciendis quam, beatae
            adipisci ab autem doloribus magni consequuntur illum est.
          </p>
          <p className="text-[#001255af] mb-5 font-merriweather text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
            distinctio, ut ipsum natus at delectus? Dolore inventore
            necessitatibus reprehenderit
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
