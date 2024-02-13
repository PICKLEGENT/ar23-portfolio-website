import { Route, Routes } from "react-router-dom"
import { Home, Project } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" /> {<Home />}
      <Route path="/project" /> {<Project />}
    </Routes>
  )
}

export default App