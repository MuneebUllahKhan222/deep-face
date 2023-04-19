import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const PricingBoxDetailed = ({planName,planPrice,planCreds, handleClick, detail, bonusCred}) => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', rowGap:'3px', alignItems:'center', flexGrow:1}}>

    {
        bonusCred
        ?
        <Box p={1} sx={{display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'#FFD600', borderRadius:'5px', width:'85%' }}>
        <Typography fontSize={15} fontWeight={600} fontFamily={'Raleway'}>{bonusCred} Bonus Credits</Typography>
    </Box>
        :
        <Box p={1} sx={{display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'#FFD600', borderRadius:'5px', width:'85%', visibility:'hidden' }}>
        <Typography fontSize={15} fontWeight={600} fontFamily={'Raleway'}>{bonusCred} Bonus Credits</Typography>
    </Box>
    }
    
    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'-webkit-fill-available', height:'fit-content',display:'flex', justifyContent:'space-between', flexDirection:'column', alignItems:'center', flexGrow:1, backgroundColor: '#1F1F1F', position:'relative'}}>
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
    {
        bonusCred
        ?
        <Box sx={{display:'flex', color:'#FFD600'}}>
        {/* {bonusCred} extra credits */}
        <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
            <Typography fontFamily={'Raleway'} sx={{textAlign:'center'}}>{bonusCred} bonus credits</Typography>
        </Box>
        :
        <Box sx={{display:'flex', color:'#FFD600', visibility:'hidden'}}>
        {bonusCred} bonus credits
        </Box>
    }
    
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
    </Box>
    
                    
  )
}

export default PricingBoxDetailed