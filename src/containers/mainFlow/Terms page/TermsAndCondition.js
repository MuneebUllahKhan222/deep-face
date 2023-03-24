import { Box } from '@mui/material'
import React from 'react'
import Header from '../../../components/general/Header'
import FooterTerms from './Footer.terms'
import TabsandContent from './TabsandContent'

const TermsAndCondition = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'black', height:'fit-content'}}>
        <Header />
        <Box p={5}>

        <TabsandContent />
        </Box>

        <FooterTerms />
    </Box>
  )
}

export default TermsAndCondition