import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import pic from '../../../assets/images/videoSwap-pic.png'
import gif from '../../../assets/images/imageSwap-gif.png'

const Section4 = () => {
    const matches650px = useMediaQuery('(max-width:650px and min-width:450px)')
    const matches450px = useMediaQuery('(max-width:650px and min-width:450px)')
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

    
    <Box mt={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',width:'60%','@media(max-width:900px)':{width:'75%'}, '@media(max-width:650px)':{width:'85%'} }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: 700, marginBottom: '40px', textAlign:'center','@media(max-width:650px)':{fontSize:'32px', marginTop:'30px'} }}>
                        Our more Exciting Features
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width:'80%',flexWrap: 'wrap', columnGap: '15px', rowGap: '15px', '@media(max-width:650px)':{width:'85%'}, '@media(max-width:450px)':{flexDirection:'column', alignItems:'center'} }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', '@media(max-width:650px)':{width:'45%'} }}>
                            <img src={pic} alt='play' width={matches650px ?'100px': matches450px ? '100%' : '130px'} />
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '20px', textAlign:'center' }}>
                                Swap Face on Image
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 400, marginTop: '10px', textAlign:'center' }}>
                                Lorem ipsum dolor sit ametip consec tetur adipiscing elit. Sed lacinia sit eva
                            </Typography>
                            <Button variant='text' sx={{color:'#FFD600', fontWeight:'700'}}>{'>> Try now'}</Button>

                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%',textAlign:'center', '@media(max-width:650px)':{width:'45%'} }}>
                            <img src={gif} alt='play' width={matches650px ?'100px': '130px'} />
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '20px', textAlign:'center' }}>
                                Swap Face on GIF
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 400, marginTop: '10px', textAlign:'center' }}>
                                Lorem ipsum dolor sit ametip consec tetur adipiscing elit. Sed lacinia sit eva
                            </Typography>
                            <Button variant='text' sx={{color:'#FFD600', fontWeight:'700'}}>{'>> Try now'}</Button>

                        </Box>
                    </Box>
                </Box>
                </Box>
  )
}

export default Section4