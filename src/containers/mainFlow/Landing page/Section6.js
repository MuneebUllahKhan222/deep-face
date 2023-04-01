import { Box, Typography } from '@mui/material'
import React from 'react';
// import stick from '../../../assets/images/stick.png'
// import imageSwap from '../../../assets/images/imageSwap.png'
import data from '../../../assets/images/data.png'
import lock from '../../../assets/images/lock.png'

const Section6 = () => {

  return (
    <Box sx={{height:'60vh', '@media(max-width:800px)':{ height:'fit-content',padding:'60px 40px 60px 40px'}}}>
        <Box sx={{height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center','@media(max-width:800px)':{flexDirection:'column'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'35%','@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%', alignItems:'center'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography fontWeight={600} sx={{fontSize:'40px','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px'}, '@media(max-width:600px)':{fontSize:'23px'}}}>Your data is safe.</Typography>
                    <img src={lock} height={'100px'} alt='lock' />
                </Box>
                <Typography fontSize={16} fontWeight={500} textAlign={'center'}>With our one-of-a-kind private Creation Locker, your data remains safe and in your own personal, for your eyes only cloud.</Typography>  
            </Box>


            <Box sx={{width:'27%','@media(max-width:800px)':{width:'40%', marginTop:'30px'}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'80%'}}}>
                <img src={data} alt={'data'} width={'100%'} />
            </Box>


        </Box>
    </Box>
  )
}

export default Section6