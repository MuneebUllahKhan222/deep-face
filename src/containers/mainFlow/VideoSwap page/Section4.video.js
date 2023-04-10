import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import pic from '../../../assets/images/videoSwap-pic.png'
import gif from '../../../assets/images/imageSwap-gif.png'
import { useNavigate } from 'react-router-dom'

const Section4 = () => {
    const navigate = useNavigate();
    const matches650px = useMediaQuery('(max-width:650px and min-width:450px)')
    const matches450px = useMediaQuery('(max-width:650px and min-width:450px)')
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

    
    <Box mt={{sm:10, xs:4}} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',width:'60%','@media(max-width:900px)':{width:'75%'}, '@media(max-width:650px)':{width:'85%'} }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: 700, marginBottom: '40px', textAlign:'center','@media(max-width:650px)':{fontSize:'32px', marginTop:'30px'},fontFamily:'Raleway' }}>
                    Other Exciting Deep Duck Features
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width:'80%',flexWrap: 'wrap', columnGap: '15px', rowGap: '15px', '@media(max-width:650px)':{width:'85%'}, '@media(max-width:450px)':{flexDirection:'column', alignItems:'center'} }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', '@media(max-width:650px)':{width:'65%'} }}>
                            <img src={pic} alt='play' width={matches650px ?'100px': matches450px ? '100%' : '130px'} />
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '20px', textAlign:'center',fontFamily:'Raleway' }}>
                                Swap Face on Image
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 400, marginTop: '10px', textAlign:'center',fontFamily:'Raleway' }}>
                            Using a high quality image, upload your base and hero image now.
                            </Typography>
                            <Button onClick={() => navigate('/imageSwap/upload')} variant='text' sx={{color:'#FFD600', fontWeight:'700'}}>{'>> Try now'}</Button>

                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%',textAlign:'center', '@media(max-width:650px)':{width:'65%'} }}>
                            <img src={gif} alt='play' width={matches650px ?'100px': '130px'} />
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '20px', textAlign:'center',fontFamily:'Raleway' }}>
                                Swap Face on GIF
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 400, marginTop: '10px', textAlign:'center',fontFamily:'Raleway' }}>
                            Have a favorite GIF? Slap your face on it and give your friends a laugh.    
                            </Typography>
                            <Button onClick={() => navigate('/gifSwap/upload')} variant='text' sx={{color:'#FFD600', fontWeight:'700'}}>{'>> Try now'}</Button>

                        </Box>
                    </Box>
                </Box>
                </Box>
  )
}

export default Section4