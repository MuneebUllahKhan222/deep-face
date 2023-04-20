import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, addStripeJS  } from "@stripe/react-stripe-js";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Checkoutform from "./Checkoutform";
import { createIntent } from "../../store/services/user";
import { useCallback } from "react";
import TagManager from 'react-gtm-module';



function StripeForm() {
    const {purchaseAmount, purchaseSubscriptionAmount, subscriptionFlow} = useSelector(state => state?.user)
    const dispatch = useDispatch();
    const [clientSecret, setClientSecret] = useState("");
    const [stripe, setStripe] = useState('')
    let total;
    // Very imp if statement decides b/w locker flow or credit flow
    if(subscriptionFlow){
      total = purchaseSubscriptionAmount;
    } else {
     total = purchaseAmount
    }
    
    
    const fetchData = useCallback(async () => {
      TagManager.initialize({ gtmId: 'AW-11145098203' });
      const info = {
          amount: (Math.floor(total * 100)).toString(),
      }
      const stripePromise = await loadStripe("pk_live_51Mk7w0A5OVE42MIUZ1yrBiwYe5GxEnRKz4Cu3Dflh7QmhSUVTvgCMHV6MwdDBecdGkPmQWWW1X8PUkpXtSMMyema00fmu67Drq");
      // const stripePromise = await loadStripe("pk_test_51Lj1VASGZP3p3zAFtVcaROPwiUqDuCIEVwh3cFK8320PfdnsZtbY6gqIcfiixLNaSEYaklsIpdBoM6RREobVrw9B0014tcuE1j");
      addStripeJS(stripePromise);
      setStripe(stripePromise)
      const data = await dispatch(createIntent(info))
      setClientSecret(data?.data?.client_secret);
      stripe.addStripeJSListener(function(event) {
        TagManager.dataLayer({
          'event': 'stripe',
          'eventCategory': 'Stripe',
          'eventAction': event.type,
          'eventLabel': event.data.object.id,
          'eventValue': event.data.object.amount
        });
      });
  },[dispatch, total,stripe]) 
    // fetchData()
  useEffect(() => {
    fetchData()
  }, [fetchData]);

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
      {clientSecret
      ?
        <Elements options={options} stripe={stripe}>    
        <Checkoutform total={total} />    
      </Elements>
      :
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
        <CircularProgress />
      </Box>
      }
  </div>
  )
}

export default StripeForm


