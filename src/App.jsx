import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ServiceParts from "./pages/ServicesParts"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ServiceParts" element={ <ServiceParts /> } />
      </Routes>
    </Router>
  )
}

export default App
