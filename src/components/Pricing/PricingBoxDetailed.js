import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const PricingBoxDetailed = ({planName,planPrice,planCreds, handleClick, detail, bonusCred}) => {
  return (
    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'fit-content',display:'flex', justifyContent:'space-between', flexDirection:'column', alignItems:'center', flexGrow:1, backgroundColor: '#1F1F1F',}}>
    {/* <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}> */}
    <Box mb={2} sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px', alignItems: 'center', }}>
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

    <Box mb={3} sx={{display:'flex', flexDirection:'column', rowGap:'10px', }}>
        <Box sx={{display:'flex'}}>
            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
            <Typography fontFamily={'Raleway'} sx={{textAlign:'center'}}>{detail?.vs} </Typography>
        </Box>

        <Box sx={{display:'flex'}}>
            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
            <Typography fontFamily={'Raleway'}>{detail?.gs}</Typography>
        </Box>

        <Box sx={{display:'flex'}}>
            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
            <Typography fontFamily={'Raleway'}>{detail?.is}</Typography>
        </Box>

    </Box>

    <Box sx={{display:'flex', justifyContent:'center'}}>
        <Button onClick={() => handleClick(planPrice, planCreds)} sx={{backgroundColor:'#FFD600', color:'white', fontWeight:'550', borderRadius:'40px', padding:'7px 20px 7px 20px'}}>Buy Credits</Button>
    </Box>
    </Box>
    
                    
  )
}

export default PricingBoxDetailed