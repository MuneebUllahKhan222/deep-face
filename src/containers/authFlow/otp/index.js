import { Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Footer from '../../../components/general/Footer';
import Header from '../../../components/general/Header';
import {  verifyOTP } from '../../../store/services/register';
import PinInput from 'react-pin-input';
import { getCookies } from '../../../utils';


const rowFlex = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

function OTP() {

    const [pin, setPin] = useState();

    useEffect(() => {
        console.log(pin);
    }, [pin])

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {state} = useLocation();
    // const {email} = state;
    // console.log(email)
    const {email} = getCookies('forgotPass')
    const { enqueueSnackbar } = useSnackbar();
  
    const onSubmit = async (val) => {
      const res = await dispatch(verifyOTP({email,val}))
      if (res?.status === 200) {
        navigate('/newPassword')
      } else {
        enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration: 3000 })
      }
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ height: '10%', width: '100vw' }}>
          <Header />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>
  
        <Box pl={4} pr={4} pt={2} pb={3} sx={{ height: 'fit-content', width: '400px', backdropFilter: 'blur(7.5px)', background: 'rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', '@media(max-width:600px)':{width:'350px'},'@media(max-width:500px)':{width:'275px', height:'fit-content'} }} >
      <Box sx={{ ...rowFlex, fontSize: '30px', fontWeight: 600, color: 'white', height: '10%' }}>
        Enter OTP
      </Box>
      <form style={{ height: 'fit-content' }}>
        <Box mt={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <PinInput
                length={6}
                  initialValue=""
                  secret={true} //if set to false all characters will be visible
                  onChange={(value) => {setPin(value)}}
                  onComplete={(val) => onSubmit(val)} //function that run when field are completely filled here "i" is the index of box
                  type="numeric"
                  inputMode="number"
                  style={{ margin: "20px 0" }} //To apply styles behind boxes of pin input
                  inputStyle={{ borderRadius:'5px', height:'60px', borderColor:'#CDCED1', width:'47px', backgroundColor:'#F5F6F7', margin:'0 4px' }} //to change style of boxes
                  inputFocusStyle={{ borderColor: "blue" }} //styles applied on being focused
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          
      

          


        </Box>
      </form>

      

    </Box>
  
        </Box>
        <Box mb={{ xs: 5, sm: 10 }} pl={5} pr={5} sx={{ width: '60%', height: 'fit-content', '@media(max-width:500px)': { width: '80%' } }}>
          <Footer />
        </Box>
      </Box>
    )
}

export default OTP