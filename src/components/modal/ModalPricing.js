import { Box,  Dialog,  Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { resetFlows, setModalOpen, setPricingModalClose, setPurchaseAmount, setPurchaseCredit, setStripeModalOpen } from '../../store/reducers/user';
import CloseIcon from '@mui/icons-material/Close';
import { getCookies } from '../../utils';
// import { useSnackbar } from 'notistack';
import CircleIcon from '@mui/icons-material/Circle';
import './modal.css'
import PricingBoxDetailed from '../Pricing/PricingBoxDetailed';

const ModalPricing = ({open}) => {

    // const {purchaseAmount} = useSelector(state => state?.user)
    // const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleClose = () => {
        const user = getCookies('user')
        if (user) {
            dispatch(setPricingModalClose())
            dispatch(resetFlows())
        } else {
            dispatch(setPricingModalClose());
            dispatch(setModalOpen());
            dispatch(resetFlows())
        }
    }

    const handleChange =async (amount, credits) => {
        await dispatch(setPurchaseAmount(amount))
        await dispatch(setPurchaseCredit(credits))
    }
    const packages = [
        {
            credits:10,
            amount:10,
            perCredit:1,
            vs:'100 sec of video swap',
            gs:'10 GIF swaps',
            is:'20 image swaps'
        },
        {
            credits:100,
            amount:100,
            perCredit:1,
            vs:'1000 sec of video swap',
            gs:'100 GIF swap',
            is:'200 image swaps'
        },
        {
            credits:500,
            amount:500,
            perCredit:1,
            vs:'5000 sec of video swap',
            gs:'500 GIF swap',
            is:'1000 image swaps' 
        },
        {
            credits:1000,
            amount:975,
            perCredit:0.975,
            vs:'10000 sec of video swap',
            gs:'1000 GIF swap',
            is:'2000 image swaps'
        },
    ]

    const handleClick = (amount, credits) => {
            handleChange(amount, credits)

            dispatch(setStripeModalOpen())
    }

    return (
        <Dialog open={open} onClose={handleClose} fullScreen={true} sx={{ background: 'rgba(31, 31, 31, 0.75)', backdropFilter: 'blur(4px)', }}
            PaperProps={{
                style: {
                    backgroundColor: '#1F1F1F',
                    height: '85%',
                    width: '85%',
                    borderRadius: '10px',
                    

                },
            }}>
            <Box className='pricing-background'  p={2} pt={2} pb={4} sx={{ color:'white',display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', boxSizing:'border-box', rowGap:'25px',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              width: '0.6em',
            },
            '&::-webkit-scrollbar-track': {
              background: '#1F1F1F',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#272727',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: '#272727',
            },
                
             }}>
            <Box  sx={{ display: 'flex', flexDirection: 'column', }}>
                <Box  mr={2} onClick={handleClose} sx={{display:'flex', justifyContent:'flex-end', color:'white'}}><CloseIcon /></Box>
                    <Typography textAlign={'center'} fontWeight={600} fontSize={{sm:32, xs:28}} fontFamily={'Raleway'}>Pay as you go</Typography>
                </Box>

            <Box pl={4} pr={4} sx={{display:'flex', justifyContent:'center'}}>

            <Box sx={{display:'flex', justifyContent:'space-evenly',flexDirection:'column',backgroundColor: '#1F1F1F', alignItems:'center',rowGap:'15px', columnGap:'8px', padding:'15px 30px 15px 30px',border:'6px solid #272727', borderRadius:'20px','@media(max-width:1350px)':{  padding:0} }}>
                <Typography fontFamily={'Raleway'} fontStyle={'italic'} fontSize={23}>Credits Breakdown</Typography>
                <Box sx={{display:'flex', justifyContent:'space-evenly',columnGap:'30px', flexWrap:'wrap', rowGap:'10px'}}>
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

            </Box> 
            </Box>


            <Box pb={4} sx={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap', rowGap:'15px', columnGap:'8px' }}>
            {/* <PricingBox planName={'Startup'} planPrice={10} planCreds={10} handleClick={handleClick}/>
                        <PricingBox planName={'Enterprise'} planPrice={100} planCreds={100} handleClick={handleClick}/>
                        <PricingBox planName={'Fortune'} planPrice={500} planCreds={550} handleClick={handleClick} bonusCred={50}/>
                        <PricingBox planName={'Lift Off'} planPrice={975} planCreds={1100} handleClick={handleClick} bonusCred={125} /> */}
                        <PricingBoxDetailed planName={'Startup'} planPrice={10} planCreds={10} handleClick={handleClick} detail={packages[0]}/>
                        <PricingBoxDetailed planName={'Enterprise'} planPrice={100} planCreds={100} handleClick={handleClick} detail={packages[1]}/>
                        <PricingBoxDetailed planName={'Fortune 500'} planPrice={500} planCreds={550} handleClick={handleClick} bonusCred={50} detail={packages[2]}/>
                        <PricingBoxDetailed planName={'Lift Off!'} planPrice={975} planCreds={1100} handleClick={handleClick} bonusCred={100} detail={packages[3]}/>
             </Box>
            {/* <Box sx={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap', rowGap:'15px', columnGap:'8px' }}>
                <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column',backgroundColor: '#1F1F1F',}}>
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


                    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column',backgroundColor: '#1F1F1F',}}>
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

                    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column',backgroundColor: '#1F1F1F',}}>
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

                    <Box p={2} sx={{border:'6px solid #272727', borderRadius:'20px', boxSizing:'border-box', width:'280px', height:'320px',display:'flex', justifyContent:'space-between', flexDirection:'column',backgroundColor: '#1F1F1F',}}>
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







                </Box> */}
            


            </Box>

            {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%' }}>
                <Box pt={4} sx={{ display: 'flex', flexDirection: 'column', }}>
                <Box mb={1} mr={2} onClick={handleClose} sx={{display:'flex', justifyContent:'flex-end', color:'white'}}><CloseIcon /></Box>
                    <Typography textAlign={'center'} fontWeight={600} fontSize={{sm:32, xs:28}} sx={{ color: '#FFD600' }}>Pay as you go</Typography>
                    <Typography textAlign={'center'} fontSize={{sm:22, xs:19}} fontWeight={400} sx={{ color: '#A2A2A2' }}>Credits available for use forever</Typography>
                </Box>

                <Typography textAlign={'center'} fontWeight={600} fontSize={32} sx={{ color: '#FFD600' }}>USD $1 <Typography component={'span'} fontSize={18}>/credit</Typography></Typography>

                <Box >
                    <TableContainer sx={{ width: '100%' }}>
                        <Table sx={{ minWidth: 800, }}>
                            <TableBody>
                                {
                                    packages?.map(p => (
                                        <TableRow hover key={p?.amount} sx={{'&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell  align='center' sx={{ color: '#E9E9E9', fontSize: '16px',fontWeight:400 }}>
                                        <Radio
                                        disableTouchRipple
                                        disableFocusRipple
                                            checked={purchaseAmount?.toString() === p?.amount?.toString()}
                                            onChange={(e) => handleChange( p?.amount, p?.credits)}
                                            value={p?.amount}
                                            name="radio-buttons"
                                            sx={{
                                                color: '#FFD600',
                                                '&.Mui-checked': {
                                                    color: '#FFD600',
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 25,
                                                },
                                            }}
                                        />
                                        {`${p?.credits} credits`}
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: '#E9E9E9', fontSize: '16px' }}>
                                        ${p?.amount}
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: 'white', fontSize: '18px' }}>
                                        $ {p?.perCredit}/credit
                                    </TableCell>

                                    <TableCell align='center' sx={{ color: 'white', fontSize: '14px' }}>
                                         {p?.vs}<br />{p?.gs}<br />{p?.is}
                                    </TableCell>
                                    <TableCell   sx={{ height:'100%',color: 'white', fontSize: '18px', textAlign:'center' }}>
                                        <Box onClick={handleClick} sx={{width:'125px', cursor:'pointer',height:'45px', borderBottom:'none',backgroundColor:'#FFD600', borderRadius:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            Buy now
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                    ))
                               
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box> */}

        </Dialog>
    )
}

export default ModalPricing