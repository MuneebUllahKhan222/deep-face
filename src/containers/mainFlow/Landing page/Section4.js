import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import stick from '../../../assets/images/stick.png'
import gifSwap from '../../../assets/images/gif-swap.png'
import { useNavigate } from 'react-router-dom'

const Section4 = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{height:'60vh', '@media(max-width:800px)':{ height:'fit-content',padding:'60px 40px 60px 40px'}}}>
        <Box sx={{height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center', '@media(max-width:800px)':{flexDirection:'column-reverse'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'35%', '@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{fontSize:'40px','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'}}}>Gif Face Swap</Typography>
                    <img src={stick}  alt='stick' />
                </Box>
                <Typography fontSize={14} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque.</Typography>
                <Button onClick={() => navigate('/gifSwap')} variant='contained' disableElevation sx={{backgroundColor:'#FFD600', height:'45px',borderRadius:'12px',width:'fit-content', marginTop:'25px', '&:hover':{backgroundColor:'#FFD600'}}}>Try GIF Swap</Button>           
            </Box>


            <Box sx={{width:'27%', '@media(max-width:800px)':{width:'40%'}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'60%'}}}>
                <img src={gifSwap} alt={'gifSwap'} width={'100%'} />
            </Box>


        </Box>
    </Box>
  )
}

export default Section4