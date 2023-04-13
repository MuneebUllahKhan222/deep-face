import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import thor from '../../../assets/gifs/videoSwap-ronaldo.gif'




const Section3 = () => {
    const navigate = useNavigate();
    const matches1200px = useMediaQuery('(max-width:1200px)')
    const matches1050px = useMediaQuery('(max-width:1050px and min-width:700px)')
    const matches700px = useMediaQuery('(max-width:700px)')
    return (
        <Box pt={5} pb={5} sx={{ width: '100%', backgroundColor:'#1E1E1E',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', color:'white',width: '60%', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', '@media(max-width:900px)':{width:'75%'}, '@media(max-width:650px)':{width:'85%'} }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 600, textAlign:'center', lineHeight:'45px', '@media(max-width:650px)':{fontSize:'32px'},fontFamily:'Raleway' }}>
                Deep Duck provides very accurate results.
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', marginBottom: '40px', marginTop:'10px',fontFamily:'Raleway', }}>Enjoy near perfect results using our one-of-a-kind face swap tool.</Typography>

                <img src={thor} alt='game of thrones' width={matches1200px ?'97%':matches700px ? '90%' : '80%'} height={matches1050px ?'450px' :matches700px ? '350px' : '500px'} style={{borderRadius:'30px'}} />

                <Button onClick={() => navigate('/swap/videoSwap/upload')} variant='text' sx={{color:'#FFD600', marginTop:'30px', fontWeight:700}}>{'>> Try now'}</Button>

            </Box>

        </Box>
    )
}

export default Section3