import { Box, Typography } from '@mui/material'
import React from 'react';
import Header from '../../../components/general/Header';
import './VideoSwapPage.css'
import CustomButton from '../../../components/general/CustomButton';

const Section1 = () => {
  return (
    <Box className={'section-1-video'} sx={{ height: '100vh', display:'flex', flexDirection:'column',justifyContent:'space-between',backgroundColor: 'black', '@media(max-width:800px)': { height: '70vh' } }}>
      <Box sx={{height:'10%'}}>

      <Header colorScheme={'video'} />
      </Box>
      <Box sx={{ display: 'flex', height: '90%', flexDirection: 'column', alignItems: 'center', padding: '0px 40px 60px 40px' }}>
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', '@media(max-width:800px)': { flexDirection: 'column-reverse' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', '@media(max-width:1000px)': { width: '40%' }, '@media(max-width:800px)': { width: '60%' }, '@media(max-width:600px)': { width: '90%' }, '@media(max-width:450px)': { width: '100%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography fontWeight={600} sx={{ margin: '0 auto 0 auto', color: 'white', textAlign: 'center', fontSize: '40px', '@media(max-width:900px)': { fontSize: '35px' }, '@media(max-width:800px)': { fontSize: '30px' } }}>Video Face Swap</Typography>
            </Box>
            <Typography fontSize={14} fontWeight={500} sx={{ margin: '0 auto 0 auto', color: 'white', textAlign: 'center', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque.</Typography>
            <CustomButton navigateTo={'/videoSwap/upload'} text='Try Swap it' style={{width:'fit-content',margin: '35px auto 0 auto',}} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section1