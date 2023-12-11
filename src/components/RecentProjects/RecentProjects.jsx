import React from "react";
import SectionHeading from "../ui/SectionHeading/SectionHeading";
import Container from "../Container/Container";
import RecentProjectCard from "./RecentProjectCard";
import recentProjectImage1 from "../../assets/recent-projects/recent-project1.jpg";
import recentProjectImage2 from '../../assets/recent-projects/recent-project2.png'
import recentProjectImage3 from "../../assets/recent-projects/recent-project3.avif";
import Button from "../ui/Button/Button";


const RecentProjects = () => {
  return (
    <section id="project" className="my-20">
      <Container>
        <SectionHeading title="Recent Projects" subtitle="My Recent Projects" />
        <div className="flex flex-row gap-5 ">
          <RecentProjectCard
            image={recentProjectImage1}
            author="Mahbubul Alam"
            title="Knowladge Cafe Website"
            desc="Discover Knowledge Cafe – a vibrant space for collaborative learning and innovation. Explore interactive zones for focused study and group projects. Access a digital knowledge repository with diverse resources. "
          />
          <RecentProjectCard
            image={recentProjectImage2}
            author="Mahbubul Alam"
            title="Business Agency Website"
            desc="Using ReactJS and Tailwind CSS I build this Business Managment System. When I design this website I lern more advanced TailwindCSS and React JS"
          />
          <RecentProjectCard
            image={recentProjectImage3}
            author="Mahbubul Alam"
            title="Admin Dashboard Design"
            desc="Using ReactJS and Tailwind CSS I build this Business Managment System. When I design this website I lern more advanced TailwindCSS and React JS"
          />
        </div>
        <div className="mx-auto text-center my-10">
          <Button text="Explore More" />
        </div>
      </Container>
    </section>
  );
};

export default RecentProjects;
