import { Box, Typography } from '@mui/material'
import React from 'react';
import Header from '../../../components/general/Header';
import './VideoSwapPage.css'
import CustomButton from '../../../components/general/CustomButton';
import Section1Img from '../../../assets/images/videoSwap-section1.png'

const Section1 = () => {
  return (
    <Box className={'section-1-video'} sx={{ height: '100vh', display:'flex', flexDirection:'column',justifyContent:'space-between',backgroundColor: 'black', '@media(max-width:800px)': { height: 'fit-content' } }}>
      <Box sx={{height:'10%'}}>

      <Header colorScheme={'video'} />
      </Box>
      <Box sx={{ display: 'flex', height: '90%', flexDirection: 'column', alignItems: 'center', padding: '0px 40px 60px 40px' }}>
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', '@media(max-width:800px)': { flexDirection: 'column-reverse'} }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', '@media(max-width:1000px)': { width: '100%' }, '@media(max-width:800px)': { width: '60%',marginTop:'40px' }, '@media(max-width:600px)': { width: '90%' }, '@media(max-width:450px)': { width: '100%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography fontWeight={600} sx={{ margin: '0 auto 0 auto', color: 'white', textAlign: 'center', fontSize: '40px', '@media(max-width:900px)': { fontSize: '35px' }, '@media(max-width:800px)': { fontSize: '30px' },fontFamily:'Raleway' }}>Video Face Swap</Typography>
            </Box>
            <Typography fontSize={14} fontWeight={500} sx={{ margin: '0 auto 0 auto', color: 'white', textAlign: 'center',fontFamily:'Raleway' }}>Think you got what it takes? Test your AI skills with Video Face Swap now!</Typography>
            <CustomButton navigateTo={'/swap/videoSwap/upload'} text='Try Swap it' style={{width:'fit-content',margin: '35px auto 0 auto',}} />
          </Box>
        </Box>

        <Box sx={{width:'27%',display:'none','@media(max-width:800px)':{width:'60%', marginTop:'30px', display:'block', borderRadius:'30px'}, '@media(max-width:600px)':{width:'65%'}, '@media(max-width:450px)':{width:'85%'}}}>
                <img src={Section1Img} alt={'imageSwap'} width={'100%'} style={{borderRadius:'30px'}} />
            </Box>
      </Box>
    </Box>
  )
}

export default Section1