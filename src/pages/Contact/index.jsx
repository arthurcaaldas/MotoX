import Header from "../../components/Header";
import Map from "../../components/Map";
import Footer from "../../components/Footer"
import './Contact.css'


const Contact = () => {
  return (
    <body>
      <Header></Header>
      
      <main className={`${"mt-header"}`}>
        <Map></Map>
      </main>
      <Footer></Footer>
    </body>
  )
}

export default Contact
