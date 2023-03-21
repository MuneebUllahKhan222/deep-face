import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import got from '../../../assets/images/imageSwap-got.png'
import play from '../../../assets/images/imageSwap-play.png'
import gif from '../../../assets/images/imageSwap-gif.png'




const Section3 = () => {

    const matches1200px = useMediaQuery('(max-width:1200px)')
    const matches1050px = useMediaQuery('(max-width:1050px and min-width:700px)')
    const matches700px = useMediaQuery('(max-width:700px)')
    const matches650px = useMediaQuery('(max-width:650px and min-width:450px)')
    const matches450px = useMediaQuery('(max-width:650px and min-width:450px)')
    return (
        <Box pt={5} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', width: '60%', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', '@media(max-width:900px)':{width:'75%'}, '@media(max-width:650px)':{width:'85%'} }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 600, textAlign:'center', lineHeight:'45px', '@media(max-width:650px)':{fontSize:'32px'} }}>
                    Deep Duck is providing so accurate results
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', marginBottom: '20px', marginTop:'10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque.</Typography>

                <img src={got} alt='game of thrones' width={matches1200px ?'97%':matches700px ? '90%' : '80%'} height={matches1050px ?'450px' :matches700px ? '400px' : '500px'} />

                <Box mt={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: 700, marginBottom: '40px', textAlign:'center','@media(max-width:650px)':{fontSize:'32px', marginTop:'30px'} }}>
                        Our more Exciting Features
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width:'80%',flexWrap: 'wrap', columnGap: '15px', rowGap: '15px', '@media(max-width:650px)':{width:'85%'}, '@media(max-width:450px)':{flexDirection:'column', alignItems:'center'} }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', '@media(max-width:650px)':{width:'45%'} }}>
                            <img src={play} alt='play' width={matches650px ?'100px': matches450px ? '100%' : '130px'} />
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '20px', textAlign:'center' }}>
                                Swap Face on Video
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

        </Box>
    )
}

export default Section3