import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../../components/general/Footer'
import Header from '../../../components/general/Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const LandingPage = () => {
  return (
    <>  
    {/* <Header /> */}
    <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        {/* <Footer /> */}
    </>
  )
}

export default LandingPage