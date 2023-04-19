import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/general/Header'
import FooterTerms from '../mainFlow/Terms page/Footer.terms'
import { useDispatch } from 'react-redux'
import { setLockerPricingModalOpen, setPurchaseAmount, setPurchaseCredit, setStripeModalOpen } from '../../store/reducers/user'
import CircleIcon from '@mui/icons-material/Circle';
// import DoneIcon from '@mui/icons-material/Done';
import '../../components/Pricing/pricing.css';
import PricingBoxDetailed from '../../components/Pricing/PricingBoxDetailed'


const PricingPage = () => {
    const dispatch = useDispatch();



    const handleChange = async (amount, credits) => {
        await dispatch(setPurchaseAmount(amount))
        await dispatch(setPurchaseCredit(credits))
    }

    const handleClick = (amount, credits) => {
        handleChange(amount, credits)

        dispatch(setStripeModalOpen())
    }

    const handleSubscribeClick = () => {
        dispatch(setLockerPricingModalOpen())
    }

    const packages = [
        {
            vs: '100 sec of video swap',
            gs: '10 GIF swaps',
            is: '20 image swaps'
        },
        {

            vs: '1000 sec of video swap',
            gs: '100 GIF swap',
            is: '200 image swaps'
        },
        {
            vs: '5000 sec of video swap',
            gs: '500 GIF swap',
            is: '1000 image swaps'
        },
        {
            vs: '10000 sec of video swap',
            gs: '1000 GIF swap',
            is: '2000 image swaps'
        },
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', }}>

            <Header />

            <Box mt={10} pl={{ md: 12, sm: 6, xs: 3 }} pr={{ md: 12, sm: 6, xs: 3 }} sx={{ display: 'flex', width: '100%', height: 'fit-content', color: 'white', boxSizing: 'border-box', flexDirection: 'column', position: 'relative', }}>
                {/* <Box  component={'img'} src={priceLeft} sx={{position:'absolute', zIndex:2, left:'-30', top:'50%', width:170, height:170}}/> */}
                <Box p={2} pt={10} className="pricing-background" pb={10} sx={{
                    borderRadius: '30px', border: '7px solid #272727', color: 'white', display: 'flex', backgroundColor: '#1F1F1F', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: 'fit-content', boxSizing: 'border-box', rowGap: '50px'

                }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Typography textAlign={'center'} fontFamily={'Raleway'} fontWeight={600} fontSize={{ sm: 44, xs: 32 }} >Plans and Pricing</Typography>
                    </Box>


                    <Box pl={4} pr={4} sx={{ display: 'flex', justifyContent: 'center' }}>

                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', backgroundColor: '#1F1F1F', alignItems: 'center', rowGap: '15px', columnGap: '8px', padding: '15px 30px 15px 30px', border: '6px solid #272727', borderRadius: '20px', }}>
                            <Typography fontFamily={'Raleway'} fontStyle={'italic'} fontSize={23}>Credits Breakdown</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', columnGap: '30px', flexWrap: 'wrap', rowGap: '10px' }}>
                                <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', }}>
                                    <CircleIcon size='small' sx={{ color: '#FFD600', height: '15px', width: '15px', marginRight: '6px' }} />
                                    <Typography fontFamily={'Raleway'}>1 Credit/10 Sec video swap</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', color: 'white', alignItems: 'center' }}>
                                    <CircleIcon size='small' sx={{ color: '#FFD600', height: '15px', width: '15px', marginRight: '6px' }} />
                                    <Typography fontFamily={'Raleway'}>1 Credit/2 image swaps</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', color: 'white', alignItems: 'center' }}>
                                    <CircleIcon size='small' sx={{ color: '#FFD600', height: '15px', width: '15px', marginRight: '6px' }} />
                                    <Typography fontFamily={'Raleway'}>1 Credit/1 Gif swap</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>


                    {/* <Box mb={5} sx={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap', rowGap:'15px', columnGap:'8px' }}>
                <Box sx={{display:'flex', color:'white', alignItems:'center'}}>
                    <CircleIcon size='small' sx={{color:'#FFD600', height:'15px', width:'15px', marginRight:'6px'}} />
                    <Typography fontFamily={'Raleway'}>1 Credit/10 Sec video swap</Typography>
                </Box>

                <Box sx={{display:'flex', color:'white', alignItems:'center'}}>
                    <CircleIcon size='small' sx={{color:'#FFD600', height:'15px', width:'15px', marginRight:'6px'}} />
                    <Typography fontFamily={'Raleway'}>1 Credit/2 image swaps</Typography>
                </Box>

                <Box sx={{display:'flex', color:'white', alignItems:'center'}}>
                    <CircleIcon size='small' sx={{color:'#FFD600', height:'15px', width:'15px', marginRight:'6px'}} />
                    <Typography fontFamily={'Raleway'}>1 Credit/1 Gif swap</Typography>
                </Box>

            </Box> */}



                    <Box pl={{ xl: 7, lg: 3 }} pr={{ xl: 7, lg: 3 }} sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', rowGap: '15px', columnGap: '20px' }}>


                        {/* <PricingBox planName={'Startup'} planPrice={10} planCreds={10} handleClick={handleClick}/> */}
                        {/* <PricingBox planName={'Enterprise'} planPrice={100} planCreds={100} handleClick={handleClick}/> */}
                        {/* <PricingBox planName={'Fortune'} planPrice={500} planCreds={550} handleClick={handleClick} bonusCred={50}/> */}
                        {/* <PricingBox planName={'Lift Off'} planPrice={975} planCreds={1100} handleClick={handleClick} bonusCred={125} /> */}
                        <PricingBoxDetailed planName={'Startup'} planPrice={10} planCreds={10} handleClick={handleClick} detail={packages[0]} />
                        <PricingBoxDetailed planName={'Enterprise'} planPrice={100} planCreds={100} handleClick={handleClick} detail={packages[1]} />
                        <PricingBoxDetailed planName={'Fortune'} planPrice={500} planCreds={550} handleClick={handleClick} bonusCred={50} detail={packages[2]} />
                        <PricingBoxDetailed planName={'Lift Off'} planPrice={975} planCreds={1100} handleClick={handleClick} bonusCred={100} detail={packages[3]}>
                            {/* <Box component={'img'} src={Bonus50} sx={{position:'absolute', right:'54%', bottom:'66%', transform:'rotate(-0.1turn)'}} /> */}
                        </PricingBoxDetailed>
                        {/* <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                    <Typography fontSize={28} fontFamily='Raleway'>
                     100$   
                    </Typography>

                    <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>1000 Sec Video Swap </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>100 Gifs swap  </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>200 Image swap </Typography>
                        </Box>

                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={() => handleClick(100, 100)}  sx={{backgroundColor:'#FFD600', color:'white', fontWeight:'550', borderRadius:'40px', padding:'7px 20px 7px 20px'}}>Buy Credits</Button>
                    </Box>
                    </Box> */}






                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', columnGap: '30px', alignItems: 'center', '@media(max-width:1350px)': { flexDirection: 'column', rowGap: '30px', } }}>

                        <Box p={2} pl={3} pr={3} pt={{ sm: 2, xs: 4 }} pb={{ sm: 2, xs: 4 }} sx={{ border: '6px solid #272727', borderRadius: '20px', boxSizing: 'border-box', display: 'flex', columnGap: '30px', alignItems: 'center', height: 'fit-content', '@media(max-width:900px)': { flexDirection: 'column', rowGap: '15px' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '7px' }}>
                                <Typography fontSize={{ sm: 26, xs: 20 }} textAlign={{ sm: 'left', xs: 'center' }} fontWeight={600} fontFamily={'Raleway'}>
                                    Creation Locker <Typography component={'span'} fontFamily={'Raleway'} fontSize={{ sm: 20, xs: 16 }} fontWeight={500}> $4.99/mo</Typography>
                                </Typography>

                                <Typography fontSize={{ md: 23, sm: 18, xs: 16 }} textAlign={{ sm: 'left', xs: 'center' }} fontWeight={550} fontFamily={'Raleway'}>
                                    Save your creations in a private, easy-to-access cloud locker!
                                </Typography>


                            </Box>

                            {/* <Button onClick={handleSubscribeClick} variant='contained' disableFocusRipple disableTouchRipple sx={{ borderRadius: '50px', width: 'fit-content', height:'50px',backgroundColor: '#FFD600', fontWeight: '600', padding:'0px 35px 0px 35px'  }}>
                                    Subscribe
                                </Button> */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                                <Button onClick={handleSubscribeClick} variant='contained' disableFocusRipple disableTouchRipple sx={{ borderRadius: '50px', width: 'fit-content', backgroundColor: '#FFD600', fontWeight: '600', padding: '10px 20px 10px 20px' }}>
                                    Subscribe
                                </Button>
                                <Typography fontFamily={'Raleway'} sx={{ marginLeft: '5px' }}>$4.99 /mo</Typography>
                            </Box>
                        </Box>


                        {/* <Box sx={{display:'flex', justifyContent:'space-evenly',flexDirection:'column', rowGap:'15px', columnGap:'8px', padding:'0px 30px 30px 30px', borderLeft:'1px solid gray', '@media(max-width:1350px)':{border:'none' ,padding:0} }}>
                <Typography fontFamily={'Raleway'} fontStyle={'italic'} fontSize={23}>Credits Breakdown</Typography>
                <Box sx={{display:'flex', color:'white', alignItems:'center'}}>
                    <CircleIcon size='small' sx={{color:'#FFD600', height:'15px', width:'15px', marginRight:'6px'}} />
                    <Typography fontFamily={'Raleway'}>1 Credit/10 Sec video swap</Typography>
                </Box>

                <Box sx={{display:'flex', color:'white', alignItems:'center'}}>
                    <CircleIcon size='small' sx={{color:'#FFD600', height:'15px', width:'15px', marginRight:'6px'}} />
                    <Typography fontFamily={'Raleway'}>1 Credit/2 image swaps</Typography>
                </Box>

                <Box sx={{display:'flex', color:'white', alignItems:'center'}}>
                    <CircleIcon size='small' sx={{color:'#FFD600', height:'15px', width:'15px', marginRight:'6px'}} />
                    <Typography fontFamily={'Raleway'}>1 Credit/1 Gif swap</Typography>
                </Box>

            </Box>  */}



                    </Box>

                </Box>
                {/* <Box p={3} pt={6} pl={{sm:8, xs:2}} pr={{sm:8, xs:3}} pb={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', borderRadius: '20px', backgroundColor: '#1F1F1F', height: '100%', boxSizing: 'border-box' }}>
                    <Typography fontSize={22} fontWeight={600}>
                        Locker Plan
                    </Typography>

                    <Box mt={5} mb={4} pl={5} pr={5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', border: '1px solid #898989', borderRadius: '15px', height: '60px', boxSizing: 'border-box' }}>
                        <Typography fontWeight={600}>
                            1 month
                        </Typography>
                        <Box sx={{ dsiplay: 'flex', justifyContent: 'space-around' }}>

                            <Typography variant='subtitle1'>4.99$</Typography>
                        </Box>
                    </Box>

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
                </Box> */}



            </Box>



            <FooterTerms />
        </Box>

    )
}

export default PricingPage

