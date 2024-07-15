import React from 'react'
import {Link} from "react-router-dom"
import {Stack} from "@mui/material"
export const Navbar = () => {
  return (
    <Stack direction="row" 
    justifyContent="space-around"
    sx={{gap :{sm :"50px" ,xs:"30px"} ,mt:{ sm: "32px" , xs:"20px"},
    justifyContent:"flex-end",
    alignItems:"center",
    marginRight:{sm:"30px" , xs: "20px"}

  }}
    
    >
      <Link to="/">
      <img src="../public/gym.svg" width={50} height={50} />
      </Link>
      <Stack direction="row" gap="40px"
      fontSize="17px"
      fontWeight="400"
      >
        <Link to="/" style={{textDecoration:"none" ,color:'#3A1212'}}>Home</Link>
        <Link style={{textDecoration:"none" , color: '#3A1212'}}>About us</Link>
        <a href='#exercises' style= {{
          textDecoration:"none" , color:'#3A1212'
        }}>Exercises</a>
      </Stack>
    </Stack>
  )
}
