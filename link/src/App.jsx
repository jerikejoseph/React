import Home from './Components/Home';
import About from './Components/About';
import Nav from "./Components/Nav"
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {


  return (
  
 <BrowserRouter>
 <Nav/>
 <Routes>
  <Route path='/' Component={Home}/>
  <Route path='/about' Component={About}/>
  </Routes>
  </BrowserRouter>
  
  )
}

export default App
