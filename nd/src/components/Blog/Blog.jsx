import React from "react";
import Container from "../Container/Container";
import SectionHeading from "../ui/SectionHeading/SectionHeading";
import BlogCard from "./BlogCard";
import blogImage1 from "../../assets/blog/blog1..png";
import blogImage2 from "../../assets/blog/blog2.jpg";
import blogImage3 from "../../assets/blog/blog3.png";

const Blog = () => {
  return (
    <div className="my-20">
      <Container>
        <SectionHeading
          align={"mx-auto text-center"}
          justify={"justify-center"}
          title={"Latest Blogs"}
          subtitle={"Blog & Articles"}
        />
        <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-3">
          <BlogCard
            image={blogImage1}
            author="Mahbubul Alam"
            date="Mar 8, 2023"
            title="Front-End Roadmap"
            desc="If you want to be a front end developer you must need to learn HTML, CSS, JavaScript. Then you need to switch React and othe JavaScript Framework"
          />
          <BlogCard
            image={blogImage2}
            date="Mar 8, 2023"
            author="Mahbubul Alam"
            title="Bacnend Development Roadmap"
            desc="Backend Development has many of proglamming language. Like: Java, C++, C#, Python, nodejs etc."
          />
          <BlogCard
            image={blogImage3}
            date="Mar 8, 2023"
            author="Mahbubul Alam"
            title="React for Frontend"
            desc="React is a JavaScript Library. React is use frontend development for web. "
          />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
