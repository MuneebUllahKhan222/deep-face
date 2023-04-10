import { Box, Button } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSnackbar } from 'notistack';
import React, { useState }  from 'react';
import ModalAuth from '../../components/modal/ModalAuth';
import { useDispatch, useSelector } from 'react-redux';
import { resetFlows, setLockerAdModalOpen, setLockerPricingModalClose, setModalOpen, setPricingModalClose, setStripeModalClose } from '../../store/reducers/user';
import { purchaseCredits, purchaseSubscription } from '../../store/services/user';
import { getCookies } from '../../utils';



function Checkoutform({total}) {


    const stripe = useStripe()
    const elements = useElements();
    const {modalState,} = useSelector(state => state?.user)
    const dispatch= useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [buttonDisable, setbuttonDisable] = useState(true);
    const {purchaseAmount, purchaseCredits:credits, subscriptionFlow, purchaseSubscriptionAmount, purchaseSubscriptionMonth} = useSelector(state => state?.user)


    const handleAfterPurchaseCreds = async() => {
        const user = getCookies('user')

            console.log(purchaseAmount, credits, ' creds', subscriptionFlow);
            const res = await dispatch(purchaseCredits({uid:user?._id, amount: purchaseAmount, credits:credits}));
            console.log(res, 'res of pucrhase');
            dispatch(setStripeModalClose());
            enqueueSnackbar('Payment successful', { variant: 'success' });
            dispatch(resetFlows());
            if (user?.lockerSubscription === false || user?.firstTimeLogin === true)
            setTimeout(() => {
                dispatch(setLockerAdModalOpen())

            },700)
    }

    const handleAfterPurchaseSubscribtion = async() => {
        const user = getCookies('user')
            dispatch(setLockerPricingModalClose())
            const res = await dispatch(purchaseSubscription({uid:user?._id, amount: purchaseSubscriptionAmount, month:purchaseSubscriptionMonth}))
            console.log(res, 'res of pucrhase')
            dispatch(setStripeModalClose())
            dispatch(resetFlows())
            enqueueSnackbar('Payment successful', { variant: 'success' })
    }

    const handleSubmit = async (e) => {
        setbuttonDisable(true)
        const host = window?.location?.origin;

        if (!stripe || !elements) {
            return;
        }
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${host}`,
            },
            redirect: 'if_required'
        });

        if (!error) {
            if(!subscriptionFlow){
                handleAfterPurchaseCreds()
            } else {
                handleAfterPurchaseSubscribtion()
            }
        }
        if (error) {
        enqueueSnackbar('Payment unsuccessful', { variant: 'error' })
        setbuttonDisable(false)
        }
    };

    const handleClick =() => {
        const user = getCookies('user')
        // Check if any required fields are empty
        if (!user) {
                dispatch(setModalOpen())
                dispatch(setPricingModalClose())
                  
        } else {
            dispatch(setPricingModalClose())
            handleSubmit()
        }
    }

    const handlePaymentChange = (event) => {
        setbuttonDisable(!event.complete);
      };

     
    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }} >
            <PaymentElement onChange={handlePaymentChange}/>

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