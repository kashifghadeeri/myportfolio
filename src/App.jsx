import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import { useState } from "react";


// import styles of this component
import styles from "./App.module.css"

// import other components to use


import images from "./Jsons/Images.json"


const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true
    },
    {
      id: 2,
      title: "Topic Images",
      active: false
    },
    {
      id: 3,
      title: "Nature Images",
      active: false
    },
    {
      id: 4,
      title: "NFT Images",
      active: false
    },
    {
      id: 5,
      title: "Space Images",
      active: false
    }
  ]

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [ ...images.categories[categoryChoose] ]
    })
  }
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
  
      <Testimonials />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
