import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import MYServices from './components/MyServices/MYServices'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import RecentProjects from './components/RecentProjects/RecentProjects'
import Portfolio from './components/Protfolio/Portfolio'
import Blog from './components/Blog/Blog'


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <MYServices />
      <About />
      <RecentProjects />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  )
}

export default App