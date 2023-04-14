import { Box, Typography } from '@mui/material'
import React from 'react';
import stick from '../../../assets/images/stick.png'
import CustomButton from '../../../components/general/CustomButton';
import kholiBabar from '../../../assets/gifs/gifSwap-gif1.gif'

const Section2 = () => {
    return (
        <Box sx={{ height: '60vh', backgroundColor: '#1E1E1E', '@media(max-width:800px)': { height: 'fit-content', padding: '60px 40px 60px 40px' } }}>
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-around', flexDirection:'row-reverse',alignItems: 'center', '@media(max-width:800px)': { flexDirection: 'column' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', color: 'white', '@media(max-width:1000px)': { width: '40%' }, '@media(max-width:800px)': { width: '60%', alignItems:'center' }, '@media(max-width:600px)': { width: '90%' }, '@media(max-width:450px)': { width: '100%' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography fontWeight={600} sx={{ fontSize: '40px', '@media(max-width:900px)': { fontSize: '35px' }, '@media(max-width:800px)': { fontSize: '30px'},'@media(max-width:430px)': { fontSize: '25px', textAlign:'center'},'@media(max-width:370px)': { fontSize: '20px'},fontFamily:'Raleway' }}>Swap Face From GIF</Typography>
                        <img src={stick} alt='stick' />
                    </Box>
                    <Typography fontSize={14} fontWeight={500} sx={{'@media(max-width:800px)': {textAlign:'center'},fontFamily:'Raleway'}}>By using a high quality image, upload your gif, swap the face and enjoy!</Typography>
                     <CustomButton  navigateTo={'/swap/gifSwap/upload'} text='Try Swap it' style={{width:'fit-content', marginTop:'25px'}} />
                </Box>
                <Box sx={{ width: '27%', height:'80%','@media(max-width:800px)': { width: '40%', marginTop:'30px' }, '@media(max-width:600px)': { width: '50%' }, '@media(max-width:450px)': { width: '70%' } }}>
                    <img src={kholiBabar} alt={'section2'} width={'100%'} height={'100%'} />
                </Box>
            </Box>
        </Box>
    )
}

export default Section2