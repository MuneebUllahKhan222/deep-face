import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import Checkoutform from "./Checkoutform";
import { createIntent } from "../../store/services/user";


function StripeForm() {
    
    const dispatch = useDispatch();
    const [clientSecret, setClientSecret] = useState("");
    const [stripe, setStripe] = useState('')
    const total = 10000.5
    
    const fetchData = async () => {
        const info = {
            amount: (Math.floor(10000.5)).toString(),
        }
        const stripePromise = await loadStripe("pk_test_51Lj1VASGZP3p3zAFtVcaROPwiUqDuCIEVwh3cFK8320PfdnsZtbY6gqIcfiixLNaSEYaklsIpdBoM6RREobVrw9B0014tcuE1j");
        setStripe(stripePromise)
        const data = await dispatch(createIntent(info))
        console.log(data, 'dato')
        setClientSecret(data?.data?.client_secret)
    }
    // fetchData()
  useEffect(() => {
    fetchData()
  }, []);

  const appearance = {
    theme: 'night',
    labels:'floating'
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (
    <div className="App">
    {/* {clientSecret && ( */}
    
      {clientSecret
      ?
        <Elements options={options} stripe={stripe}>
        
        <Checkoutform total={total} />
        {/* <PaymentElement />  */}
        {/* <TextField /> */}
        
      </Elements>
      :
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
        <CircularProgress />
      </Box>
      }
    {/* )} */}
  </div>
  )
}

export default StripeForm


