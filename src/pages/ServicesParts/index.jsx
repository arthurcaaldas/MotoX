import Header from "../../components/Header";
import Maintenance from "../../components/Maintenance"
// import Payments from "../../components/Payments"
import Footer from "../../components/Footer"
import './ServiceParts.css'


const ServiceParts = () => {
  return (
    <body>
      <Header></Header>
      
      <main className={`${"mt-header"}`}>
        <Maintenance></Maintenance>
        {/* <Payments></Payments> */}
      </main>

      <Footer></Footer>
    </body>
  )
}

export default ServiceParts