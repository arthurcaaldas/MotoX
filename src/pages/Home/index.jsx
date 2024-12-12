// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards"
import Brands from "../../components/Brands"
import Footer from "../../components/Footer"
import Payments from "../../components/Payments"
import './Home.css'

const images = [
  "src/assets/images/banner/banner1.jpg",
  "src/assets/images/banner/banner2.jpg",
  "src/assets/images/banner/banner4.jpg",
];

const Home = () => {
  return (
    <body>
      <Header></Header>
      
      <main className={`${"mt-header"}`}>
        <Carousel images={images} />
        <Payments></Payments>
        <Cards></Cards>
        <Brands></Brands>
      </main>

      <Footer></Footer>
    </body>
  )
}

export default Home
