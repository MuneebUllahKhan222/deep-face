import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoSwap from '../../../assets/images/video-swap.png'

function Section3() {
  const navigate = useNavigate();
  return (
    <Box sx={{height:'60vh', paddingTop:'60px',backgroundColor:'black', '@media(max-width:800px)':{ height:'fit-content',padding:'60px 40px 60px 40px'}}}>
    <Box sx={{height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center', '@media(max-width:800px)':{ flexDirection:'column'}}}>

        
    <Box sx={{width:'27%', '@media(max-width:800px)':{width:'40%'}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'60%'}}}>
        <img src={videoSwap} alt='imageSwap' width={'100%'} height={'100%'} />
    </Box>
    <Box sx={{ display:'flex', flexDirection:'column', width:'35%', '@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%'},'@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{fontSize:'40px',color:'white','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'}, '@media(max-width:600px)':{fontSize:'25px'}, }}>Video Face Swap</Typography>
                    {/* <img src={stick}  alt='stick' /> */}
                </Box>
                <Typography fontSize={14} fontWeight={500} sx={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque.</Typography>
                <Button variant='contained' onClick={() => navigate('/videoSwap')} disableElevation sx={{backgroundColor:'#FFD600', height:'45px',borderRadius:'12px',width:'fit-content', marginTop:'25px', '&:hover':{backgroundColor:'#FFD600'}}}>Try Video Swap</Button>           
            </Box>

    </Box>
</Box>
  )
}

export default Section3