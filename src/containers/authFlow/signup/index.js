import { Box } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/general/Footer';
import Header from '../../../components/general/Header';
import SignupForm from '../../../components/Login-signup/SignUpForm';
import { register } from '../../../store/services/register';
import {useSnackbar } from 'notistack';
import { getCookies } from '../../../utils';
import { setLockerAdModalOpen } from '../../../store/reducers/user';


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar} = useSnackbar();
  const onSubmit = async(data) => {
    const res =  await dispatch(register(data))
    if (res?.status === 200) {
      navigate('/home')
      enqueueSnackbar('Sign up successful', { variant: 'success', autoHideDuration:3000 })
      const user = getCookies('user')
      if (user?.firstTimeLogin === true) {
        dispatch(setLockerAdModalOpen())
      }
    } else {
      enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration:3000 })
    }
  };
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100%',alignItems:'center', justifyContent:'space-between'}}>
    <Box sx={{height:'10%', width:'100vw'}}>
    <Header />
    </Box>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'fit-content','@media(max-width:662px)':{marginTop:'50px'}}}>
      
      {/* <LoginForm type={'Sign up'} onSubmit={onSubmit} /> */}
      <SignupForm  onSubmit={onSubmit} />
          
      </Box>
      <Box mb={{xs:5, sm:10}} pl={5} pr={5} sx={{width:'60%', height:'fit-content', '@media(max-width:500px)':{width:'80%'},  '@media(max-width:662px)':{marginTop:'50px'}}}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Signup