import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import './Form.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { validationSchema } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';



const rowFlex = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

const LoginForm = ({ type, onSubmit }) => {
  
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [check, setCheck] = useState(false)
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup')
  }

  // const handleClickSubmit = () => {

  // }



  return (
    <Box p={4} sx={{ height: '350px', width: '400px', backdropFilter: 'blur(7.5px)', background: 'rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', '@media(max-width:600px)':{width:'350px'},'@media(max-width:500px)':{width:'275px', height:'300px'} }} >
      <Box sx={{ ...rowFlex, fontSize: '30px', fontWeight: 600, color: 'white', height: '10%' }}>
        {type}
      </Box>
      <form style={{ height: 'fit-content' }}>
        <Box mt={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Controller
            name={"email"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                sx={{ borderRadius: '15px', backgroundColor:'rgba(255, 255, 255, 0.2)',input: { color: 'white', borderRadius: '15px' } }}
                color='warning'
                inputMode='email'
                value={value}
                error={errors.email ? true : false}
                // helperText={errors.email ? errors.email.message : ''}
                onChange={onChange}
                placeholder='Email'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white' }} /></InputAdornment>,
                }}
              />
            )}
          />
          <Box ml={2} mb={2} sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.email ? errors.email.message : ''}
          </Box>
          
          <Controller
            name={"password"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                sx={{ borderRadius: '15px', backgroundColor:'rgba(255, 255, 255, 0.2)',input: { color: 'white', borderRadius: '15px' } }}
                color={'warning'}
                inputMode='Password'
                value={value}
                error={errors.password ? true : false}
                onChange={onChange}
                placeholder='Password'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><LockIcon sx={{ color: 'white' }} /></InputAdornment>,
                }}
              />
            )}
          />
          <Box ml={2} mb={2} sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.password ? errors.password.message : ''}
          </Box>
          <Button onClick={handleSubmit(onSubmit)} variant='contained' fullWidth sx={{ height: '28%', borderRadius: '15px', backgroundColor: '#FFD600', '&:hover': { backgroundColor: '#FFD600' } }}>
            {type}
          </Button>


        </Box>
      </form>


      {type.toLowerCase() === 'log in' &&
        <Box mt={5} sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
          <Box onClick={handleSignupClick} fontSize={14} sx={{ '&:hover': { color: '#FFD600', textDecoration: 'underline', cursor: 'pointer' } }}>Signup</Box>
          <Box fontSize={14} sx={{ '&:hover': { color: '#FFD600', textDecoration: 'underline', cursor: 'pointer' } }}>Forgot Password?</Box>
        </Box>
      }

      {type.toLowerCase() === 'sign up' &&

        <Box mt={5} sx={{ display: 'flex', justifyContent: 'space-between', color: 'white', flexDirection:'column' }}>
          <FormControlLabel
              control={
                <Controller
                  name={'terms'}
                  // value={check}
                  control={control}
                  render={({field: props }) => {
                    return (
                      <Checkbox
                        sx={{color:'#FFD600','&.Mui-checked': {color: '#FFD600'}}}
                        value={check}
                        checked={props.value}
                        onChange={(e) => {
                          props.onChange(e.target.checked)
                          setCheck(e.target.checked)
                          }}
                      />
                    );
                  }}
                  // control={control}
                />
              }
              label={"I agree to Terms of service and Privacy Policy"}

            />
          <Box sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.terms ? errors.terms.message : ''}
          </Box>
        </Box>
      }


    </Box>
  )
}

export default LoginForm


{/* <TextField
                fullWidth
                sx={{ borderRadius: '15px', height: '28%', input: { color: 'white', height: '40px', borderRadius: '15px' } }}
                color='warning'
                inputMode='email'
                value={value}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : ''}
                onChange={onChange}
                placeholder='Email'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white' }} /></InputAdornment>,
                }}
              /> */}