import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import stick from '../../../assets/images/stick.png'
import imageSwap from '../../../assets/images/imageSwap.png'
import { useNavigate } from 'react-router-dom';

const Section2 = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{height:'60vh','@media(max-width:800px)':{ height:'fit-content',padding:'60px 40px 60px 40px'}}}>
        <Box  sx={{height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center', '@media(max-width:800px)':{flexDirection:'column'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'35%','@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%',alignItems:'center'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{fontSize:'40px','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'}, fontFamily:'Raleway'}}>Image Swap</Typography>
                    <img src={stick}  alt='stick' />
                </Box>
                <Typography fontSize={16} fontWeight={500} sx={{fontFamily:'Raleway'}}>With Deep Duck, swapping faces on any image is as simple as an upload and a click.</Typography>
                <Button variant='contained' disableElevation onClick={() =>navigate('/imageSwap')} sx={{backgroundColor:'#FFD600', fontWeight:600,height:'45px',borderRadius:'12px',width:'fit-content', marginTop:'25px', '&:hover':{backgroundColor:'#FFD600'}}}>Try Image Swap</Button>           
            </Box>


            <Box sx={{width:'27%', '@media(max-width:800px)':{width:'40%', marginTop:"30px"}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'60%'}}}>
                <img src={imageSwap} alt={'imageSwap'} width={'100%'} />
            </Box>


        </Box>
    </Box>
  )
}

export default Section2