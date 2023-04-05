import { Box, Button } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSnackbar } from 'notistack';
import React, { useState }  from 'react';
// import { useDispatch } from 'react-redux';
// import { useDispatch } from '../../redux/store';


function Checkoutform({total}) {


    const stripe = useStripe()
    const elements = useElements();
    // const dispatch= useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [buttonDisable, setbuttonDisable] = useState(false);
    // const createDoc = async() => {
    //     const contestData = await handleCreateContest()
    //     const data = await dispatch(createRecord(user?._id,contestData?._id,total))
    //     setbuttonDisable(false)
    // }

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

        console.log(error, 'error')
        if (!error) {
            enqueueSnackbar('Payment successful', { variant: 'success' })
        }
        if (error) {
        enqueueSnackbar('Payment unsuccessful', { variant: 'error' })
        setbuttonDisable(false)
        }
        // setLoading(false)

    };
    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }} >
            {/* <CardElement /> */}
            <PaymentElement />


            <Box mt={5} sx={{ width: "100%", display: 'flex', justifyContent: "space-between" }}>
                <Button 
                    sx={{backgroundColor:'#FFD600', fontWeight:600, height:'60px', borderRadius:'10px'}}
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={buttonDisable}
                >
                    Pay Now
                </Button>
            </Box>
        </Box>
    )
}

export default Checkoutform