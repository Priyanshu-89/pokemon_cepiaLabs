import { Route,  Routes } from "react-router-dom"
import Pokemon from "./Pokemon"
import PokemonDetails from "./PokemonDetails"
import About from "./About"

const App = () => {
  return (
  // --------------- React Router Dom----------------------
    <Routes>
    <Route path="/" element={<Pokemon/>}/>
    <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
    <Route path="/about" element={<About/>}/>
 </Routes>

  )
}

export default App
