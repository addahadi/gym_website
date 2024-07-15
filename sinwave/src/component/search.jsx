import React, { useEffect, useState } from 'react'
import {Box , Stack , TextField ,Typography ,Button} from "@mui/material"
import { options , fetchData } from '../utils/api'
import Scrollbar from './scrollbar'



function searchlooping(data , search){
    let arr = []
    for(let i = 0 ; i < data.length ; i++){
        if( data[i].name.include(search) 
            || data[i].bodyPart.include(search) 
            ||data[i].equipment.include(search)
            || data[i].target.include(search)){
                arr.push(data[i])
            }
    }
    return arr
}

export const Search = ({setexercises , bodypart , setbodypart}) => {
  let  [search , setsearch] = useState("");
  let  [bodyparts , setbodyparts] = useState([])
  useEffect(()=>{
    async function FetchbodyPart(){
        const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , options)
        setbodyparts(['all' , ...bodyParts])
    }
    FetchbodyPart()
  },[])

  async function handlesearch(){
    if(search){
        const exercisedata = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options)
        const chosenexercise = searchlooping(exercisedata,search)
        setsearch('')
        setexercises(chosenexercise)
    }
  }
  function changedValue(e){ 
    setsearch(e.target.value.toLowerCase())
  }
  return (
    <Stack alignItems="center" mt="200px" justifyContent="center"
    p="20px"
    >
        <Typography  fontWeight={700} sx={{
            fontSize:{lg:"44px" , xs:"30px"},
            mb:"50px",
            textAlign:"center",
            color:"rgba(0,0,0,0.8)"
        }} >
            Awesome Exercises you <br/> should konw
        </Typography>
        <Box position="relative" mb="72px">
            <TextField  onChange={changedValue} value = {search}
            sx={{
                input:{fontWeight:"700" ,border:"none" , 
                    borderRadius:"4px"
                },
                width:{lg:"800px" , xs:"350px"},
                backgroundColor:"white",
                borderRadius:"40px",
                outline:"none",
            }}
            
            height= "76px"  placeholder='Search for an exercise' type='text'>
            </TextField>
            <Button sx={{bgcolor:"hsla(33, 100%, 53%, 1)",
               color:"#fff",
               textTransform:"none",
               width:{lg:"175px" , xs:"80px"},
               fontSize:{lg:"20px" ,xs:"14px"},
               height:"56px",
               position:"absolute",
               right:"0px"
            }} onClick={handlesearch} >Search</Button>
        </Box>
        <Box sx={{position:"relative" , width:"100%" , p : "20px"}}>
            
            <Scrollbar data = {bodyparts} bodypart = {bodypart} setbodypart = {setbodypart}/>
        </Box>
    </Stack>
  )
}
