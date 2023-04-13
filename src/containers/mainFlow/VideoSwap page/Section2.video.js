import { Box, Typography } from '@mui/material'
import React from 'react';
import stick from '../../../assets/images/stick.png'
import ronaldo from '../../../assets/gifs/videoSwap-thor.gif'
import CustomButton from '../../../components/general/CustomButton';

const Section2 = () => {
    return (
        <Box sx={{ height: '60vh', backgroundColor: '#1E1E1E', '@media(max-width:800px)': { height: 'fit-content', padding: '60px 40px 60px 40px' } }}>
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', '@media(max-width:800px)': { flexDirection: 'column' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', color: 'white', '@media(max-width:1000px)': { width: '40%' }, '@media(max-width:800px)': { width: '60%', alignItems:'center' }, '@media(max-width:600px)': { width: '90%' }, '@media(max-width:450px)': { width: '100%' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography fontWeight={600} sx={{ fontSize: '40px', '@media(max-width:900px)': { fontSize: '35px' }, '@media(max-width:800px)': { fontSize: '30px' },fontFamily:'Raleway' }}>Video face Swap</Typography>
                        <img src={stick} alt='stick' />
                    </Box>
                    <Typography fontSize={14} fontWeight={500} sx={{'@media(max-width:800px)':{textAlign:'center'},fontFamily:'Raleway'}}>Using high quality video, upload your base footage, and with our face swap tool, upload a high quality image of the face you’d like to swap. That’s it!</Typography>
                    <CustomButton navigateTo={'/swap/videoSwap/upload'}  style={{marginTop:'25px', width:'fit-content'}} text={'Try Video Swap'}/>
                </Box>
                <Box sx={{ width: '27%', '@media(max-width:800px)': { width: '40%', marginTop:'30px' }, '@media(max-width:600px)': { width: '50%' }, '@media(max-width:450px)': { width: '80%' } }}>
                    <img src={ronaldo} alt={'ronaldo'} width={'100%'} />
                </Box>
            </Box>
        </Box>
    )
}

export default Section2