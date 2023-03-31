import { Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/general/Footer';
import Header from '../../../components/general/Header';
import LoginForm from '../../../components/Login-signup/LoginForm';
import { login, updatePassword } from '../../../store/services/register';
import ConfirmPasswordForm from '../../../components/Login-signup/ConfirmPasswordForm';
import { getCookies } from '../../../utils';







const NewPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const {email} =getCookies('forgotPass')
    const onSubmit = async (data) => {
        console.log(data)
        const res = await dispatch(updatePassword({...data, email}))
      if (res.status === 200) {
        navigate('/signin')
        enqueueSnackbar(res?.message, { variant: 'success', autoHideDuration: 3000 })
      } else {
        enqueueSnackbar((res?.message || 'Something went wrong'), { variant: 'error', autoHideDuration: 3000 })
      }
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ height: '10%', width: '100vw' }}>
          <Header />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>
  
          <ConfirmPasswordForm  onSubmit={onSubmit} />
  
        </Box>
        <Box mb={{ xs: 5, sm: 10 }} pl={5} pr={5} sx={{ width: '60%', height: 'fit-content', '@media(max-width:500px)': { width: '80%' } }}>
          <Footer />
        </Box>
      </Box>
    )
}

export default NewPassword