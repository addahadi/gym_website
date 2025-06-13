import {Box , Stack , Typography} from "@mui/material"
import ExerciseCard from "./exercisecar";



const Exercises = ({exercises , setexercises , bodypart}) => {
    return (
    <Box id="exercises" sx={{mt:"100px"  ,p:"20px" , display:"flex" , flexDirection:"column"}}>
        <Typography variant="h3" mb="100px" alignSelf="center"  color="rgba(0,0,0,0.8)" fontWeight="bold">
            Showing Resultes
        </Typography>
        <Stack direction="row" sx={{gap:{lg:"20px" ,xs:"20px"}}} 
        flexWrap="wrap" justifyContent="center">
            {exercises.map((exercise , index)=>{
                return <ExerciseCard exercise={exercise} key={index}/>
            })}
        </Stack>
    </Box>
  )
}

export default Exercises