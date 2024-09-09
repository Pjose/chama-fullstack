import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddClient from "./clients/AddClient"
import EditClient from "./clients/EditClient"
import ViewClient from "./clients/ViewClient"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addclient" element={<AddClient />} />
          <Route exact path="/editclient/:id" element={<EditClient />} />
          <Route exact path="/viewclient/:id" element={<ViewClient />} />
        </Routes> 
        
      </Router>
      
    </div>
  )
}

export default App
