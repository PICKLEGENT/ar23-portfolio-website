import { Route, Routes } from "react-router-dom"
import { Home, Project } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/project" Component={Project} />
    </Routes>
  )
}

export default App