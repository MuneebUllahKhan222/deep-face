import { Box } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../../../components/general/Footer';
import Header from '../../../components/general/Header';
import LoginForm from '../../../components/Login-signup/LoginForm';
import { register } from '../../../store/services/register';


const Signup = () => {
  const dispatch = useDispatch();
  const onSubmit = async(data) => {
    const res =  await dispatch(register(data))
    console.log( res, 'res of signup');
  };
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100%',alignItems:'center', justifyContent:'space-between'}}>
    <Box sx={{height:'10%', width:'100vw'}}>
    <Header />
    </Box>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'fit-content'}}>
      
      <LoginForm type={'Sign up'} onSubmit={onSubmit} />
          
      </Box>
      <Box mb={{xs:5, sm:10}} pl={5} pr={5} sx={{width:'60%', height:'fit-content', '@media(max-width:500px)':{width:'80%'}}}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Signup