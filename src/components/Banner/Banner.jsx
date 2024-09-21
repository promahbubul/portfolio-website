import React from 'react'
import bannerImage from '../../assets/banner.jpg'
import './banner.css'
import Container from '../Container/Container';

const Banner = () => {
  return (
    <div className={`banner flex items-center mt-2  flex-row`}>
      <Container>
        <div className="text-white">
          <h1 className="text-white  font-merriweather leading-tight text-6xl font-bold">
            Hello! <br />
            I'm <span className="text-orange-600"> Mahbubul Alam</span>
          </h1>
          <p className="mb-10 max-w-lg leading-snug text-base">
            I a Front-end developer. JavaScript is my native programming
            language. In my project I use{" "}
            <span className="bg-orange-700 px-1 rounded-sm font-bold">React</span> and{" "}
            <span className="bg-orange-700 px-1 rounded-sm font-bold">Tailwind CSS </span>.
          </p>
          <a
            href="#contact"
            className="text-white hover:bg-orange-400 duration-300 ease-in-out bg-orange-600 py-3 px-5 rounded-sm "
          >
            Contact Me
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Banner