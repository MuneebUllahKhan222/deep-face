import { Box } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/general/Footer';
import Header from '../../../components/general/Header';
import LoginForm from '../../../components/Login-signup/LoginForm';
import register from '../../../store/reducers/register';
import { login } from '../../../store/services/register';
import { styles } from "./Style";


const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    console.log(data,'data');
    const res = await dispatch(login(data))
    if (res.status === 200) {
      navigate('/')
    }
    console.log(res, 'res of signin');
  };
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100%',alignItems:'center', justifyContent:'space-between'}}>
    <Box sx={{height:'10%', width:'100vw'}}>
    <Header />
    </Box>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'fit-content'}}>
      
      <LoginForm type={'Log in'} onSubmit={onSubmit} />
          
      </Box>
      <Box mb={{xs:5, sm:10}} pl={5} pr={5} sx={{width:'60%', height:'fit-content', '@media(max-width:500px)':{width:'80%'}}}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Signin