import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/general/Header'
import FooterTerms from '../mainFlow/Terms page/Footer.terms'
import CreditsTable from '../../components/general/CreditsTable'
import { useDispatch } from 'react-redux'
import { setLockerPricingModalOpen, setPricingModalOpen, setPurchaseAmount, setPurchaseCredit, setStripeModalOpen } from '../../store/reducers/user'
import CircleIcon from '@mui/icons-material/Circle';
import DoneIcon from '@mui/icons-material/Done';


const PricingPage = () => {
    const dispatch = useDispatch();
    const handleBuyCredit=() => {
            dispatch(setPricingModalOpen())

    
    }

    const handleStripeClick = () => {
             dispatch(setLockerPricingModalOpen())       
    }

    const handleChange =async (amount, credits) => {
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

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', }}>

            <Header />

            <Box mt={10} pl={5} pr={5} sx={{ display: 'flex', width: '100%', height: 'fit-content', color: 'white', boxSizing:'border-box', flexDirection:'column',  }}>

            <Box p={2} pt={10} pb={10} sx={{ borderRadius:'30px' , border:'7px solid #272727',color:'white',display: 'flex', backgroundColor:'#1F1F1F',flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: 'fit-content', boxSizing:'border-box', rowGap:'50px', 
                
             }}>
            <Box mb={10} sx={{ display: 'flex', flexDirection: 'column', }}>
                    <Typography textAlign={'center'} fontWeight={600} fontSize={{sm:44, xs:32}} >We’ve got a plan that's perfect for you</Typography>
                </Box>
            

            <Box mb={10} sx={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap', rowGap:'15px', columnGap:'8px' }}>
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

            </Box>




            <Box  sx={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap', rowGap:'15px', columnGap:'8px' }}>
                <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                    {/* <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}> */}
                    <Typography fontSize={28} fontFamily='Raleway'>
                     10$   
                    </Typography>

                    <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
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

                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={() => handleClick(10, 10)}  sx={{backgroundColor:'#FFD600', color:'white', fontWeight:'550', borderRadius:'40px', padding:'7px 20px 7px 20px'}}>Buy Credits</Button>
                    </Box>
                    </Box>


                    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
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
                    </Box>

                    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                    {/* <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}> */}
                    <Typography fontSize={28} fontFamily='Raleway'>
                     500$   
                    </Typography>

                    <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>5000 Sec Video Swap </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>1000 Gifs swap  </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>2000 Images swap </Typography>
                        </Box>

                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={() => handleClick(500, 500)}  sx={{backgroundColor:'#FFD600', color:'white', fontWeight:'550', borderRadius:'40px', padding:'7px 20px 7px 20px'}}>Buy Credits</Button>
                    </Box>
                    </Box>

                    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                    {/* <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}> */}
                    <Typography fontSize={28} fontFamily='Raleway'>
                     1000$   
                    </Typography>

                    <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>10000 Sec Video Swap </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>1000 Gifs swap  </Typography>
                        </Box>

                        <Box sx={{display:'flex'}}>
                            <DoneIcon  sx={{color:'#FFD600', marginRight:'10px'}}/>
                            <Typography fontFamily={'Raleway'}>2000 Images swap </Typography>
                        </Box>

                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={() => handleClick(1000, 1000)}  sx={{backgroundColor:'#FFD600', color:'white', fontWeight:'550', borderRadius:'40px', padding:'7px 20px 7px 20px'}}>Buy Credits</Button>
                    </Box>
                    </Box>
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
                <Box mt={8} ml={2} sx={{disaply:'flex', flexDirection:'column', color:'white'}}>
                <Typography fontFamily={'Raleway'} fontSize={30} fontWeight={600}>Creation Locker</Typography>
                <Typography fontFamily={'Raleway'} fontSize={{xs:18, sm:20}} sx={{marginTop:'10px'}}>"Save your creations in a private, easy-to-access cloud locker!"</Typography>
                <Box sx={{display:'flex', alignItems:'flex-end', }}>
                    <Button onClick={handleSubscribeClick} variant='contained' disableFocusRipple disableTouchRipple  sx={{borderRadius:'50px', width:'fit-content', backgroundColor:'#FFD600', marginTop:'30px', fontWeight:'600', padding:'10px 20px 10px 20px'}}>
                        Subscribe
                    </Button>
                    <Typography fontFamily={'Raleway'} sx={{marginLeft:'5px'}}>$4.99/mo</Typography>
                    </Box>
            </Box>


            </Box>

            

            <FooterTerms />
        </Box>

    )
}

export default PricingPage