import React from 'react'
import Container from '../Container/Container'
import SectionHeading from '../ui/SectionHeading/SectionHeading'
import PortfolioCard from './PoftfolioCard'
import portfolioImage1 from "../../assets/portfolio/portfolio1.jpg";
import portfolioImage2 from '../../assets/portfolio/portfolio2.jpg'
import portfolioImage3 from '../../assets/portfolio/portfolio3.jpg'
import portfolioImage4 from '../../assets/portfolio/portfolio4.jpg'
import portfolioImage5 from '../../assets/portfolio/portfolio5.jpg'
import portfolioImage6 from "../../assets/portfolio/portfolio6.jpg";

const Portfolio = () => {
  return (
    <div className="my-20">
      <Container>
        <SectionHeading
          title={"My Portfolio"}
          subtitle={"My Work Example"}
          align={"text-center mx-auto"}
          justify={"justify-center"}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <PortfolioCard
            image={portfolioImage1}
            title="School Managment System"
            subtitle="Web App"
          />
          <PortfolioCard
            image={portfolioImage2}
            title="School Managment System"
            subtitle="Web App"
          />
          <PortfolioCard
            image={portfolioImage3}
            title="School Managment System"
            subtitle="Web App"
          />
          <PortfolioCard
            image={portfolioImage4}
            title="School Managment System"
            subtitle="Web App"
          />
          <PortfolioCard
            image={portfolioImage5}
            title="School Managment System"
            subtitle="Web App"
          />
          <PortfolioCard
            image={portfolioImage6}
            title="School Managment System"
            subtitle="Web App"
          />
        </div>
      </Container>
    </div>
  );
}

export default Portfolio