import './App.css'

import {Route , Routes} from 'react-router-dom'
import {Box} from "@mui/material"
import ExerciseDetail from './app/exercise.jsx'
import { Navbar } from './component/navbar.jsx'
import {Home} from "./app/home.jsx"
import Footer from './component/footer.jsx'
function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px" ,}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
