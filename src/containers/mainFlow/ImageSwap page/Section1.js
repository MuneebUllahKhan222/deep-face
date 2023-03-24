import { Box, Typography } from '@mui/material'
import React from 'react';
import Header from '../../../components/general/Header';
import before from '../../../assets/images/imageSwap-before.png'
import CustomButton from '../../../components/general/CustomButton';

const Section1 = () => {
  return (
    <Box sx={{height:'100vh', display:'flex', flexDirection:'column',padding:'0px 40px 0px 40px',justifyContent:'space-between',backgroundColor:'#b4ffe3','@media(max-width:800px)':{ height:'fit-content',padding:'0px 40px 60px 40px'}}}>
    <Box sx={{height:'10%'}}>
    <Header colorScheme={'light'} />
    </Box>
        <Box pt={7} pb={5} sx={{display:'flex', flexDirection:'column', alignItems:'center', height:'90%', justifyContent:'center'}}>
        <Box  sx={{height:'fit-content', display:'flex', justifyContent:'space-around', alignItems:'center','@media(max-width:800px)':{flexDirection:'column-reverse'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'35%','@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{color:'#1A1A1A',fontSize:'40px','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'}}}>H1 heading</Typography>
                </Box>
                <Typography fontSize={14} fontWeight={500} sx={{color:'#1A1A1A'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque.</Typography>
                <CustomButton navigateTo={'./upload'} style={{marginTop:'25px', width:'fit-content'}} text={'Try Swap it'}/>
            </Box>


            <Box sx={{width:'35%','@media(max-width:800px)':{width:'40%'}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'60%'}}}>
                <img src={before} alt={'before and after'} width={'100%'} />
            </Box>


        </Box>
        </Box>
    </Box>
  )
}

export default Section1