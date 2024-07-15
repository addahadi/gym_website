import React from 'react'
import { Box } from '@mui/material'
import Canvas from "../component/canvas/canvas"
import draw from "../../../data/data.js"
import { Herobanner } from '../component/herobanner.jsx'
import { Search } from '../component/search.jsx'
import { useState } from 'react'
export const Home = () => {
  let  [exercises , setexercises] = useState([])
  let  [bodypart , setbodypart] = useState("all")
  return (
    <Box>
      <Herobanner/>
      <Canvas  draw = {draw}/>
      <Search setexercises={setexercises}   bodypart={bodypart} setbodypart={setbodypart} />
    </Box>
  )
}
