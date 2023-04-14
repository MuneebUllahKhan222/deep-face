import { Box, Typography } from '@mui/material'
import React from 'react';
import stick from '../../../assets/images/stick.png'
import CustomButton from '../../../components/general/CustomButton';
import Header from '../../../components/general/Header';
import './GifSwapPage.css'
import Section1Img from '../../../assets/images/gifSwap1-section1.png'

const Section1 = () => {
  return (
    <Box className='section1-gif'  sx={{height:'100vh',display:'flex', flexDirection:'column',justifyContent:'space-between',backgroundColor:'black','@media(max-width:800px)':{ height:'fit-content'}}}>
    <Box sx={{height:'10%'}}>
    <Header />

    </Box>
        <Box sx={{display:'flex', height:'90%',flexDirection:'column', alignItems:'center',  padding:'0px 40px 60px 40px', '@media(max-width:800px)':{padding:'0 40px 60px 40px'}}}>
        <Box mr={{lg:75, xs:0}} sx={{height:'100%', display:'flex', justifyContent:'flex-start', alignItems:'center','@media(max-width:800px)':{flexDirection:'column'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'100%','@media(max-width:1000px)':{width:'100%'},'@media(max-width:800px)':{width:'80%', marginTop:'40px', alignItems:'center'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{color:'white',fontSize:'40px','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'},fontFamily:'Raleway'}}>GIF Face Swap</Typography>
                    <img src={stick}  alt='stick' />
                </Box>
                <Typography fontSize={14} fontWeight={500} sx={{color:'white','@media(max-width:800px)':{textAlign:'center'},fontFamily:'Raleway'}}>Swap a face on your favorite GIFs today and be the hero of your text threads!</Typography>
                <CustomButton  navigateTo={'/swap/gifSwap/upload'} text='Try Swap it' style={{width:'fit-content', marginTop:'25px'}} />
            </Box>

            


            <Box sx={{width:'27%',display:'none','@media(max-width:800px)':{width:'60%', marginTop:'30px', display:'block', borderRadius:'30px'}, '@media(max-width:600px)':{width:'65%'}, '@media(max-width:450px)':{width:'85%'}, '@media(max-width:400px)':{width:'98%'}}}>
            <img src={Section1Img} alt={'imageSwap'} width={'100%'} style={{borderRadius:'30px'}} />
            </Box>


        </Box>
        </Box>
    </Box>
  )
}

export default Section1