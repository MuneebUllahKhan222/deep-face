import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/general/Header'
import FooterTerms from '../mainFlow/Terms page/Footer.terms'

const PricingPage = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'black',}}>
        
        <Header />
        
        <Box mt={10} sx={{display:'flex', width:'100%', justifyContent:'center', height:'800px', color:'white' }}>
                <Box p={3} pt={6} pl={8} pr={8} sx={{display:'flex', flexDirection:'column', alignItems:'center',width:'80%',borderRadius:'20px',backgroundColor:'#1F1F1F', height:'100%'}}>
                    <Typography fontSize={22} fontWeight={600}>
                        Premium Plans
                    </Typography>

                    <Box mt={5} pl={2} pr={2} sx={{display:'flex', justifyContent:'space-between', alignItems:'center',width:'100%', border:'1px solid #898989', borderRadius:'15px', height:'60px'}}>
                        <Typography>
                            1 month
                        </Typography>
                        <Typography>
                            $90.25$
                        </Typography>
                    </Box>
                </Box>

        </Box> 

        <FooterTerms />
    </Box>

  )
}

export default PricingPage