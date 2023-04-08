import { Box, Button, Dialog, Typography, useMediaQuery } from '@mui/material'
import React from 'react';
import './modal.css';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setLockerAdModalClose, setLockerPricingModalOpen } from '../../store/reducers/user';
import { getCookies } from '../../utils';
import { changeStatus } from '../../store/services/register';

const ModalLocker = ({open}) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        const user = getCookies('user')
        dispatch(setLockerAdModalClose())
        if(user?.firstTimeLogin === true) {
            dispatch(changeStatus(user?._id, user?.token))
        }
    }

    const handleClick = () => {
        dispatch(setLockerPricingModalOpen())
        handleClose()
    }

    const matches900w = useMediaQuery('(min-width: 600px) and (max-width: 1000px)')
    const matches600w = useMediaQuery('(max-width:600px)')

    return (
        <Dialog open={open} onClose={handleClose} fullScreen={true} sx={{ background: 'rgba(31, 31, 31, 0.75)', backdropFilter: 'blur(4px)', }}
            PaperProps={{
                style: {
                    backgroundColor: '#1F1F1F',
                    height: matches900w?'55%':matches600w?'45%':'65%',
                    width: matches900w?'85%':'79%',
                    borderRadius: '10px',
                },
            }}>
            <Box p={{sm:5, xs:2}} pt={3} pr={{sm:4, xs:2}} className='locker-background' sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }} >
                <Box onClick={handleClose} sx={{ display: 'flex', justifyContent: 'flex-end', color: 'white', height:'7%' }}><CloseIcon /></Box>

                <Box  ml={2} sx={{display:'flex', flexDirection:'column', color:'white', height:'93%', justifyContent:'center', '@media(max-width:600px)':{alignItems:'center'}}}>
                    <Typography fontSize={{md:32, sm:26, xs:19}} fontWeight={500}>Upgrade to Premium</Typography> 
                    <Typography textAlign={{xs:'center',sm:'left'}} fontSize={{md:32, sm:26, xs:19}} fontWeight={500} sx={{color:"#FFD600"}}>Save Your Memories in Style!</Typography>
                    <Typography textAlign={{xs:'center',sm:'left'}} fontSize={{md:18, sm:15, xs:15}} fontWeight={400} sx={{marginTop:'10px',}}>That should take place right after they finish paying for credits. Like "Store all your creations in your private </Typography>
                    <Typography fontSize={{md:18, sm:15, xs:15}} fontWeight={600} sx={{color:"#FFD600"}}>Creation Locker!"</Typography>

                    <Button onClick={handleClick} variant='contained' disableFocusRipple disableTouchRipple  sx={{borderRadius:'50px', width:'fit-content', backgroundColor:'#FFD600', marginTop:'30px', fontWeight:'600', padding:'10px 20px 10px 20px'}}>
                        Subscribe Now
                    </Button>
                </Box>
            </Box>

        </Dialog>
    )
}

export default ModalLocker