import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ServiceParts from "./pages/ServicesParts"
import History from "./pages/History"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ServiceParts" element={ <ServiceParts /> } />
        <Route path="/History" element={ <History /> } />
        <Route path="/Contact" element={ <Contact /> } />
      </Routes>
    </Router>
  )
}

export default App
