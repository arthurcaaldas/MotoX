// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards"
import Brands from "../../components/Brands"
import Footer from "../../components/Footer"
import './Home.css'

const images = [
  "https://via.placeholder.com/1200x600?text=Image+1",
  "https://via.placeholder.com/1200x600?text=Image+2",
  "https://via.placeholder.com/1200x600?text=Image+3",
];

const Home = () => {
  return (
    <body>
      <Header></Header>
      
      <main className={`${"mt-header"}`}>
        <Carousel images={images} />
        <Cards></Cards>
        <Brands></Brands>
      </main>

      <Footer></Footer>
    </body>
  )
}

export default Home
