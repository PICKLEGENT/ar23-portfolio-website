import { Route, Routes, useLocation } from "react-router-dom"
import { Contact, Home, Info, Portfolio, Project } from "./pages"

const App = () => {
  const location = useLocation()

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home} />
        <Route path="/info" Component={Info} />
        <Route path="/contact" Component={Contact} />
        <Route path="/project" Component={Project} />
        <Route path="/portfolio" Component={Portfolio} />
      </Routes>
    </>
  )
}

export default App