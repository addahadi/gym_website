import React from 'react'
import {Box , Stack , Typography} from "@mui/material"

export const Herobanner = () => {
  return (
    <Box sx={{position:"relative" , zIndex:100 ,
        mt : {lg:"60px", sm:"60px", xs:"40px" },
        ml : {lg:"100px" ,sm:"45px",xs:"10px"},
    }}>
        <Typography 
        fontWeight={300}
        fontSize="20px"
        color= "white"
        sx={{
            width:"150px",
            height:"30px",
            padding:"8px",
            backgroundColor:"rgba(0, 0, 0, 0.7)",
            marginBottom:"12px",
        }}        
        >
            Fitness Club
        </Typography>
        <Typography  fontWeight="bold" color="rgba(0, 0, 0, 0.7)
" lineHeight="115px" sx={{
    fontSize : {lg:"100px" , sm:"80px" , xs:"65px"},
 mb:"15px"}} >
            TransForm <br/> Your Fitness <br/> Journey
        </Typography>
        <Typography lineHeight="32px" color = "#425466" fontSize="20px">
        Join thousands of individuals who are transforming their lives with our <br/>  home workout plans. From personalized routines to expert advice, <br/> 
        we provide the tools you need to  achieve your fitness goals and 
        </Typography>
        
        
        <img src="../public/banner.png" className='hero-banner-img'/>
        
        <Stack   width={{sm : 700 , xs : 400}} height={300} p="20px" m="auto" sx= {{
                 background:"hsla(33, 100%, 53%, 1)" , display:{lg:"none" , sm:"block" , xs:"block"},
                 mt:"70px",
                 }}>
                <Typography 
                
                fontSize="30px"
                mb = "50px"
                color="white">Unlock Your Free Trial</Typography>
                <Typography color="white" mb="30px">Sign up now to explore our platform for free</Typography>
                <button style={{width:200 , height:40  ,border:"none" , outline:"none" ,backgroundColor:"rgba(0, 0, 0, 0.7)" , color : "white",
                   fontSize:"15px",
                   fontWeight:300,
                   cursor:"pointer"
                }}
                
                
                
                >Start Free Trial</button>

        </Stack>
    </Box>
  )
}

