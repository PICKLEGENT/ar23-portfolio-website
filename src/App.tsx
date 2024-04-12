import { SpeedInsights } from "@vercel/speed-insights/next"
import { Route, Routes, useLocation } from "react-router-dom"
import { Contact, Home, About, Portfolio, Project } from "./pages"

const App = () => {
  const location = useLocation()

  return (
    <>
      <SpeedInsights />
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/project" Component={Project} />
        <Route path="/portfolio" Component={Portfolio} />
      </Routes>
    </>
  )
}

export default App