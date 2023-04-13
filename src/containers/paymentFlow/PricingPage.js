import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/general/Header'
import FooterTerms from '../mainFlow/Terms page/Footer.terms'
import CreditsTable from '../../components/general/CreditsTable'
import { useDispatch } from 'react-redux'
import { setLockerPricingModalOpen, setPricingModalOpen } from '../../store/reducers/user'
import { getCookies } from '../../utils'
import { useNavigate } from 'react-router-dom'

const PricingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBuyCredit=() => {
        const user = getCookies('user') 
         if (user) {
            dispatch(setPricingModalOpen())
         } else {
            navigate('/auth/signin')
         }
    
    }

    const handleStripeClick = () => {
        const user = getCookies('user') 
         if (user) {
             dispatch(setLockerPricingModalOpen())
         } else {
            navigate('/auth/signin')
         }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', }}>

            <Header />

            <Box mt={10} sx={{ display: 'flex', width: '100%', justifyContent: 'center', height: 'fit-content', color: 'white', }}>
                <Box p={3} pt={6} pl={{sm:8, xs:2}} pr={{sm:8, xs:3}} pb={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', borderRadius: '20px', backgroundColor: '#1F1F1F', height: '100%', boxSizing: 'border-box' }}>
                    <Typography fontSize={22} fontWeight={600}>
                        Locker Plan
                    </Typography>

                    <Box mt={5} mb={4} pl={5} pr={5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', border: '1px solid #898989', borderRadius: '15px', height: '60px', boxSizing: 'border-box' }}>
                        <Typography fontWeight={600}>
                            1 month
                        </Typography>
                        <Box sx={{ dsiplay: 'flex', justifyContent: 'space-around' }}>

                            <Typography variant='subtitle1'>4.99$</Typography>
                            {/* <Typography variant='body2' sx={{ textDecoration: 'line-through', color: '#464646' }}>$90.25$</Typography> */}
                        </Box>
                    </Box>


                    {/* <Box mt={3} mb={4} pl={5} pr={5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', border: '1px solid #898989', borderRadius: '15px', height: '60px', boxSizing: 'border-box' }}>
                        <Typography fontWeight={600}>
                            3 month
                        </Typography>
                        <Box sx={{ dsiplay: 'flex', justifyContent: 'space-around' }}>

                            <Typography variant='subtitle1'>$100.25$</Typography>
                            <Typography variant='body2' sx={{ textDecoration: 'line-through', color: '#464646' }}>$90.25$</Typography>
                        </Box>
                    </Box> */}

                    <Button onClick={handleStripeClick} fullWidth variant='contained' disableFocusRipple disableRipple sx={{ backgroundColor: '#03A9F4', borderRadius: '10px', height: '70px', fontSize: '20px', fontWeight: 600 }}>
                        Stripe
                    </Button>


                    <Typography fontSize={20} fontWeight={500} sx={{ marginTop: '70px', marginBottom: '40px' }}>
                        Credits table
                    </Typography>

                    <CreditsTable />
                    

                    <Button variant='contained' onClick={handleBuyCredit} sx={{backgroundColor:'#FFD600', fontWeight:600, fontSize:'14px', color:'white', borderRadius:'50px', marginTop:'35px', height:'50px', padding:'0px 30px 0px 30px'}}>
                        Buy credits
                    </Button>
                </Box>



            </Box>

            <FooterTerms />
        </Box>

    )
}

export default PricingPage