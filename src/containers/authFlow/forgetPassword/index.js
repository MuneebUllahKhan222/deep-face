import { Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/general/Footer';
import Header from '../../../components/general/Header';
import ForgotEmailForm from '../../../components/Login-signup/ForgotEmailForm';
import {  sendOTPEmail } from '../../../store/services/register';
import { setCookies } from '../../../utils';


const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    const res = await dispatch(sendOTPEmail(data))
    console.log(res)
    if (res?.status === 200) {
      setCookies('forgotPass', {email:res?.data?.email},{path:'/'})
      navigate('/otp', {state:{email:res?.data?.email}})
      enqueueSnackbar(res?.message, { variant: 'info', autoHideDuration: 3000 })
    } 
    else {
      enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration: 3000 })
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ height: '10%', width: '100vw' }}>
        <Header />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>

        {/* <LoginForm type={'Log in'} onSubmit={onSubmit} /> */}
        <ForgotEmailForm onSubmit={onSubmit} />

      </Box>
      <Box mb={{ xs: 5, sm: 10 }} pl={5} pr={5} sx={{ width: '60%', height: 'fit-content', '@media(max-width:500px)': { width: '80%' } }}>
        <Footer />
      </Box>
    </Box>
  )
}

export default ForgetPassword