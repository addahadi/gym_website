import React from 'react'
import { Box } from '@mui/material'
import Canvas from "../component/canvas/canvas"
import { Herobanner } from '../component/herobanner.jsx'
import { Search } from '../component/search.jsx'
import { useState } from 'react'
import Exercises from '../component/exercises.jsx'
import draw from "../data/data.js"
export const Home = () => {
  let  [exercises , setexercises] = useState([])
  let  [bodypart , setbodypart] = useState("all")
  return (
    <Box>
      <Herobanner/>
      <Canvas  draw = {draw}/>
      <Search setexercises={setexercises}   bodypart={bodypart} setbodypart={setbodypart} />
      <Exercises setexercises={setexercises} exercises={exercises} bodypart={bodypart}/>
    </Box>
  )
}
