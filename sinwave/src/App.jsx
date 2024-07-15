import { useState } from 'react'
import './App.css'
import draw from '../../data/data'

import {Route , Routes} from 'react-router-dom'
import {Box} from "@mui/material"
import { Exercise } from './app/exercise.jsx'
import { Navbar } from './component/navbar.jsx'
import {Home} from "./app/home.jsx"
function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px" ,}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<Exercise/>}/>
      </Routes>
    </Box>
  )
}

export default App
