import { Box, Dialog, Radio, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetFlows,  setLockerPricingModalClose, setPurchaseSubAmount, setPurchaseSubMonth, setStripeModalOpen, setSubcriptionFlow } from '../../store/reducers/user';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';

const ModalLockerPricing = ({open}) => {

    const {purchaseSubscriptionAmount} = useSelector(state => state?.user)
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleClose = () => {
            dispatch(setLockerPricingModalClose())
            dispatch(resetFlows())

    }

    const handleChange =async (amount, months) => {
        console.log(months, 'month')
        await dispatch(setPurchaseSubAmount(amount))
        await dispatch(setPurchaseSubMonth(months))
        await dispatch(setSubcriptionFlow())
    }
    const packages = [
        {
            month:1,
            amount:4.99,
            offer:'Unlimited storage for 1 month',
        },
    ]

    const handleClick = () => {
        if(purchaseSubscriptionAmount) {
            dispatch(setStripeModalOpen())
        } else {
            enqueueSnackbar('Please select a package', {variant:'warning', autoHideDuration:3000})
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} fullScreen={true} sx={{ background: 'rgba(31, 31, 31, 0.75)', backdropFilter: 'blur(4px)', }}
            PaperProps={{
                style: {
                    backgroundColor: '#1F1F1F',
                    height: '40%',
                    width: '60%',
                    borderRadius: '10px',

                },
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%' }}>
                <Box pt={4} sx={{ display: 'flex', flexDirection: 'column', }}>
                <Box mb={1} mr={2} onClick={handleClose} sx={{display:'flex', justifyContent:'flex-end', color:'white'}}><CloseIcon sx={{cursor:'pointer'}} /></Box>
                    <Typography textAlign={'center'} fontWeight={600} fontSize={{sm:32, xs:28}} sx={{ color: '#FFD600' }}>Buy Locker Storage</Typography>
                    <Typography textAlign={'center'} fontSize={{sm:22, xs:19}} fontWeight={400} sx={{ color: '#A2A2A2' }}>Unlimited Locker Storage</Typography>
                </Box>

                {/* <Typography textAlign={'center'} fontWeight={600} fontSize={32} sx={{ color: '#FFD600' }}>USD $1 <Typography component={'span'} fontSize={18}>/credit</Typography></Typography> */}

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
                                            checked={purchaseSubscriptionAmount?.toString() === p?.amount?.toString()}
                                            onChange={(e) => handleChange( p?.amount, p?.month)}
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
                                        {`${p?.month} month`}
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: '#E9E9E9', fontSize: '16px' }}>
                                        ${p?.amount}
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: 'white', fontSize: '14px' }}>
                                         {p?.offer}
                                    </TableCell>
                                    <TableCell  align='center'  sx={{ height:'100%',color: 'white', fontSize: '18px', textAlign:'center' }}>
                                    <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', height:'100%', width:'100%'}}>
                                    <Box onClick={handleClick} sx={{padding:'0px 20px 0px 20px', width:'125px',cursor:'pointer',height:'45px', borderBottom:'none',backgroundColor:'#FFD600', borderRadius:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            Subcribe now
                                        </Box>
                                    </Box>
                                        
                                    </TableCell>
                                </TableRow>
                                    ))
                               
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

        </Dialog>
    )
}

export default ModalLockerPricing