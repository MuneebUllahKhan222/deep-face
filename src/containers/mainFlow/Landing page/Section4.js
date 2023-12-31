import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import stick from '../../../assets/images/stick.png'
import gifSwap from '../../../assets/images/gif-swap.png'
import { useNavigate } from 'react-router-dom'

const Section4 = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{height:'60vh', '@media(max-width:800px)':{ height:'fit-content',padding:'60px 40px 60px 40px'}}}>
        <Box sx={{height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center', '@media(max-width:800px)':{flexDirection:'column'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'35%', '@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%', alignItems:'center'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{fontSize:'40px','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'},fontFamily:'Raleway'}}>GIF Face Swap</Typography>
                    <img src={stick}  alt='stick' />
                </Box>
                <Typography fontSize={16} fontWeight={500} sx={{'@media(max-width:800px)':{textAlign:'center'},fontFamily:'Raleway'}}>Have a favorite GIF? Put your face on it and text it to your friends.</Typography>
                <Button onClick={() => navigate('/gif-swap')} variant='contained' disableElevation sx={{fontWeight:600,backgroundColor:'#FFD600', height:'45px',borderRadius:'12px',width:'fit-content', marginTop:'25px', '&:hover':{backgroundColor:'#FFD600'}}}>Try GIF Swap</Button>           
            </Box>


            <Box sx={{width:'27%', '@media(max-width:800px)':{width:'40%', marginTop:'30px'}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'80%'}}}>
                <img src={gifSwap} alt={'gifSwap'} width={'100%'} />
            </Box>


        </Box>
    </Box>
  )
}

export default Section4