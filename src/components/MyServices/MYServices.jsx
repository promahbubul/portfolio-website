import React from "react";
import SectionHeading from "../ui/SectionHeading/SectionHeading";
import Container from "../Container/Container";
import ServiceCard from "./ServiceCard";
import serviceImage1 from "../../assets/web-design.png";
import serviceImage2 from "../../assets/coding.png";
import serviceImage3 from "../../assets/database-storage.png";

const MYServices = () => {
  return (
    <section id="service" className="my-20 duration-300 ease-in-out  transition-all">
      <Container>
        <SectionHeading
          align="text-center mx-auto"
          title="My Services"
          justify="justify-center "
          subtitle="Provide  Wide Range of Digital Services"
        />
        <div className="flex flex-row gap-5 justify-between">
          <ServiceCard
            image={serviceImage1}
            title="Front End"
            description="I am Front-end Developer. My front end framework is ReactJs and Tailwind CSS."
          />
          <ServiceCard
            image={serviceImage2}
            title="Back End"
            description="My project as a backend I user NodeJs runtime that is JavaScript. And also use ExpressJS framework fast backend development."
          />
          <ServiceCard
            image={serviceImage3}
            title="Database"
            description="As a database I use MongoDB. MongoDB is easy to use and scalable. MongoDB is noSQL."
          />
        </div>
      </Container>
    </section>
  );
};

export default MYServices;
