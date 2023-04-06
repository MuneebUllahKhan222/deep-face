import { Box, Button } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSnackbar } from 'notistack';
import React, { useState }  from 'react';
import ModalAuth from '../../components/modal/ModalAuth';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, setPricingModalClose, setStripeModalClose } from '../../store/reducers/user';
import { purchaseCredits } from '../../store/services/user';
import { getCookies } from '../../utils';



function Checkoutform({total}) {


    const stripe = useStripe()
    const elements = useElements();
    const {modalState,} = useSelector(state => state?.user)
    const dispatch= useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [buttonDisable, setbuttonDisable] = useState(false);
    const {purchaseAmount, purchaseCredits:credits} = useSelector(state => state?.user)

    const handleSubmit = async (e) => {
        // setLoading(true)
        setbuttonDisable(true)
        console.log('clicked');
        const host = window?.location?.origin;
        // event.preventDefault();

        

        if (!stripe || !elements) {
            return;
        }
        // console.log(elements, host, 'form');
        // handleCreateContest()
        // createDoc()
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${host}`,
            },
            redirect: 'if_required'
        });

        if (!error) {
            const user = getCookies('user')
            console.log(purchaseAmount, credits, ' creds')
            const res = await dispatch(purchaseCredits({uid:user?._id, amount: purchaseAmount, credits:credits}))
            console.log(res, 'res of pucrhase')
            dispatch(setStripeModalClose())
            enqueueSnackbar('Payment successful', { variant: 'success' })
        }
        if (error) {
        enqueueSnackbar('Payment unsuccessful', { variant: 'error' })
        setbuttonDisable(false)
        }
        // setLoading(false)

    };

    const handleClick =() => {
        const user = getCookies('user')
        if (!user) {
            dispatch(setModalOpen())
            dispatch(setPricingModalClose())
        } else {
            handleSubmit()
        }
    }
    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }} >
            {/* <CardElement /> */}
            <PaymentElement />

            <ModalAuth  authModalOpen={modalState} pay={handleSubmit} elements={elements} />
            <Box mt={5} sx={{ width: "100%", display: 'flex', justifyContent: "space-between" }}>
                <Button 
                    sx={{backgroundColor:'#FFD600', fontWeight:600, height:'60px', borderRadius:'10px'}}
                    fullWidth
                    variant="contained"
                    onClick={handleClick}
                    disabled={buttonDisable}
                >
                    Pay Now
                </Button>
            </Box>
        </Box>
    )
}

export default Checkoutform