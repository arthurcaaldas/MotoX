import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards"
import Brands from "../../components/Brands"
import Footer from "../../components/Footer"
import './Home.css'


const Home = () => {
  return (
    <body>
      <Header></Header>
      
      <main className={`${"mt-header"}`}>
        <Carousel></Carousel>
        <Cards></Cards>
        <Brands></Brands>
      </main>

      <Footer></Footer>
    </body>
  )
}

export default Home
