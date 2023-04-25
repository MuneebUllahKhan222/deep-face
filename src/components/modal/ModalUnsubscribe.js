import { Box, Button, Dialog, Typography } from '@mui/material'
import React from 'react'
import { useDispatch,  } from 'react-redux';
import {  setUnsubcribeModalClose, } from '../../store/reducers/user';
import CloseIcon from '@mui/icons-material/Close';
import { unSubscribe } from '../../store/services/user';
import { getCookies } from '../../utils';
import { useSnackbar } from 'notistack';

const ModalUnsubscribe = ({open}) => {

    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleClose = () => {
            dispatch(setUnsubcribeModalClose())
    }
    const handleClick = async () => {
      const user = getCookies('user')
      const data = await dispatch(unSubscribe({uid: user?._id, subscriptionId: user?.subscriptionId}))
      enqueueSnackbar(data?.message, {variant:'success', autoHideDuration:3000})
      dispatch(setUnsubcribeModalClose())
    }


    return (
        <Dialog open={open} onClose={handleClose} fullScreen={true} sx={{ background: 'rgba(31, 31, 31, 0.75)', backdropFilter: 'blur(4px)', }}
            PaperProps={{
                style: {
                    backgroundColor: '#1F1F1F',
                    height: '50%',
                    width: '70%',
                    borderRadius: '10px',

                },
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%',
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
                <Box pt={1} sx={{ display: 'flex', flexDirection: 'column', height:'100%' }}>
                <Box mb={1} mr={2} onClick={handleClose} sx={{display:'flex', justifyContent:'flex-end', color:'white'}}><CloseIcon sx={{cursor:'pointer'}} /></Box>
                <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'space-evenly', rowGap:'30px', height:'95%' }}>

                    <Typography textAlign={'center'} fontWeight={600} fontSize={{sm:32, xs:28}} sx={{ color: '#FFD600', fontFamily:'Raleway'}}>Unsubscribe Locker Storage</Typography>
                    <Typography textAlign={'center'} fontWeight={550} fontSize={{sm:20, xs:17}} sx={{  color:'white',fontFamily:'Raleway'  }}>If you unsubscribe the Locker plan you won't be able to save your creation, You have time span of 30 days to download all your creations from the locker after that locker will be terminate.</Typography>
                    <Button onClick={() => handleClick()} sx={{backgroundColor:'#FFD600', color:'white', fontWeight:'600', width:'200px', height:'50px'}} variant='contained'>Unsubscribe</Button>
                </Box>
                </Box>

                {/* <Typography textAlign={'center'} fontWeight={600} fontSize={32} sx={{ color: '#FFD600' }}>USD $1 <Typography component={'span'} fontSize={18}>/credit</Typography></Typography> */}

                
            </Box>

        </Dialog>
    )
}

export default ModalUnsubscribe