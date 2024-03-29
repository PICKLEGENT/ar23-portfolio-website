import { Route, Routes, useLocation } from "react-router-dom"
import { Contact, Home, Portfolio, Project } from "./pages"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" Component={Home} />
          <Route path="/project" Component={Project} />
          <Route path="/contact" Component={Contact} />
          <Route path="/portfolio" Component={Portfolio} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App