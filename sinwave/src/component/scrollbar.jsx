import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography ,Stack} from '@mui/material';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src="../public/left.svg"  width={50} height={50} />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src="../public/right.svg"   width={50} height={50}/>
      </Typography>
    );
  };
  



const Scrollbar = ({data , bodypart , setbodypart}) => {
    console.log(data)
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow = {RightArrow} >
        {data.map((item)=>{
            return  <Box key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}>
             <Stack type="button" alignItems="center" 
             justifyContent="center" className='bodyPart-card' width={270} height={280}
             sx = {{
                borderTop : bodypart ===item ?  "4px solid hsla(33, 100%, 53%, 1)" : "",
                backgroundColor:"#fff",
                width:"270px",
                height:"280px",
                cursor:"pointer",
                gap:"47px"
             }}
             >
                <img src="../public/work.svg" width={40} height={40}/>
             </Stack>
            </Box>
        })}
    </ScrollMenu>
    
  )
}

export default Scrollbar