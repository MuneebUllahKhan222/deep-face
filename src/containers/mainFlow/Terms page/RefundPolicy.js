import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../../../components/general/Header'
import FooterTerms from './Footer.terms'
import { useNavigate } from 'react-router-dom'

const RefundPolicy = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', height: 'fit-content' }}>
            <Header />
            <Box p={9} pl={{sm:10,md:14, xs:3}} pr={{sm:10,md:14, xs:3}} sx={{ color: 'white' }}>
                <Typography fontFamily={'Raleway'} sx={{ fontSize: '28px', fontWeight: 600 }}>
                    Refund policy
                </Typography>
                <Box mt={2} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#1F1F1F', borderRadius: '20px' }}>

                    <Box p={4} pb={10} pl={{sm:8, xs:3}} pr={{sm:8, xs:3}} sx={{ color: 'white' }}>
                        {/* <TabsandContent /> */}



                        <Typography fontFamily={'Raleway'} sx={{ fontSize: '22px', fontWeight: 600 }}>
                            CREDITS
                        </Typography>


                        <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
                        As a deep face customer, you are entitled to a refund under the conditional terms listed here. At the time that credits are purchased, if a customer chooses to forego any swap service within the first 24 hours, those credits are refundable. If a customer spends any credits at all, the account becomes activated, and the funds are no longer refundable. Also, any time past the 24 hour (buyers remorse) window is also considered an active account without the possibility of a refund.
                        </Typography>


                        <Typography fontFamily={'Raleway'} sx={{ fontSize: '22px', fontWeight: 600, marginTop:'50px' }}>
                        CREATION LOCKER
                        </Typography>

                        <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
                        As a deep face customer, you are entitled to a refund under the conditional terms listed here. If you have purchased the Creation Locker subscription, and not utilized your locker for any storage whatsoever within the first 24 hours, you are entitled to a full refund and termination of service. Anything beyond the 24 hour (buyers remorse) window is considered an active subscription.
                        </Typography>


                        <Typography fontFamily={'Raleway'} sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px' }}>
                        For more information regarding our Terms and Conditions, please visit <Button variant='text' disableElevation disableRipple disableFocusRipple disableTouchRipple sx={{color:'#FFD600', textDecoration:'underline'}} onClick={() => navigate('/termsAndCondition')}>HERE</Button>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <FooterTerms />
        </Box>
    )
}

export default RefundPolicy