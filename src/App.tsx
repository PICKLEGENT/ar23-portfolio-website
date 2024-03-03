import { Route, Routes } from "react-router-dom"
import { Contact, Home, Project } from "./pages"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/project" Component={Project} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </>
  )
}

export default App