import Header from "../../components/Header";
import Trajectory from "../../components/Trajectory"
import Milestones from "../../components/Milestones"
import Footer from "../../components/Footer"
import './History.css'

const History = () => {
  return (
    <body>
      <Header></Header>
      
      <main>
      <Trajectory></Trajectory>
      <Milestones></Milestones>
      </main>

      <Footer></Footer>
    </body>
  )
}

export default History
