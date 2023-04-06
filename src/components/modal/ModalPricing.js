import { Box, Dialog, Radio, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, setPricingModalClose, setPurchaseAmount, setPurchaseCredit, setStripeModalOpen } from '../../store/reducers/user';
import CloseIcon from '@mui/icons-material/Close';
import { getCookies } from '../../utils';
import { useSnackbar } from 'notistack';

const ModalPricing = ({open}) => {

    const {purchaseAmount} = useSelector(state => state?.user)
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleClose = () => {
        const user = getCookies('user')
        if (user) {
            dispatch(setPricingModalClose())
        } else {
            dispatch(setPricingModalClose());
            dispatch(setModalOpen());
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

    const handleClick = () => {
        if(purchaseAmount) {

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
                    height: '80%',
                    width: '79%',
                    borderRadius: '10px',

                },
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%' }}>
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
            </Box>

        </Dialog>
    )
}

export default ModalPricing