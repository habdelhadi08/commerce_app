

import{Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage/index.jsx'
import NavBar from "./components/Nav/index.jsx";
import Women from "./pages/Women/index.jsx"
import Men from "./pages/Women/index.jsx"
import Kids from "./pages/Kids/index.jsx"




export default function App() {
  
  return (
    <>
     <div className="App">
      <NavBar/>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Women" element={<Women/>}/>
    <Route path="/Men" element={<Men/>}/>
    <Route path="/Kids" element={<Kids/>}/>
    
     </Routes>
     </div>
  
     </>
     
     
  );
}
