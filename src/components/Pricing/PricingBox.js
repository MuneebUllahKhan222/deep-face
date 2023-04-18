import { Box, Button, Typography } from '@mui/material'
import React from 'react'
// import CircleIcon from '@mui/icons-material/Circle';
// import DoneIcon from '@mui/icons-material/Done';

const PricingBox = ({ planName, planPrice, planCreds, bonusCred, handleClick }) => {
    return (
        <Box p={2} pt={4} pb={4} sx={{ border: '6px solid #272727', borderRadius: '20px', boxSizing: 'border-box', width: '220px', height: '280px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: '#1F1F1F', '@media(max-width:1300px)': { flexGrow: 1 } }}>
            {/* <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}> */}


            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px', alignItems: 'center', }}>
                <Typography fontSize={26} fontWeight={600} fontFamily='Raleway'>
                    {planName}
                </Typography>
                <Typography fontSize={21} fontFamily='Raleway'>
                    ${planPrice}
                </Typography>
                <Typography fontSize={21} fontFamily='Raleway'>
                    {planCreds} Credits
                </Typography>
            </Box>


            {/* <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>100 Sec Video Swap </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>10 Gifs swap  </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>20 Images swap </Typography>
                        </Box>

                    </Box> */}

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => handleClick(planPrice, planCreds)} sx={{ backgroundColor: '#FFD600', color: 'white', fontWeight: '550', borderRadius: '40px', padding: '10px 20px 10px 20px' }}>Buy Credits</Button>
            </Box>
        </Box>

    )
}

export default PricingBox