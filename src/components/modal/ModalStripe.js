import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'
import StripeForm from '../../containers/paymentFlow/StripeForm'
import { useDispatch } from 'react-redux'
import { setStripeModalClose } from '../../store/reducers/user'

const ModalStripe = ({open}) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setStripeModalClose())
    }
  return (
    <Dialog open={open} onClose={handleClose} sx={{ background: 'rgba(31, 31, 31, 0.75)', backdropFilter: 'blur(4px)', }}
    PaperProps={{
      style: {
        backgroundColor: '#1F1F1F',
        padding: '30px',
        height: 'fit-content',
        width: '450px'
      },
    }}>
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'sapce-between', color:'white', rowGap:'40px'}}>
        <Typography textAlign={'center'} fontSize={28} fontWeight={600}>Checkout</Typography>
        <StripeForm />
    </Box>

    </Dialog>
  )
}

export default ModalStripe