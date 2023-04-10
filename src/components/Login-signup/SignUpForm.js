import { Box, Button, Checkbox, FormControlLabel, InputAdornment,TextField, Typography,  } from '@mui/material'
import React, {  useState } from 'react'
// import './Form.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Controller, useForm } from "react-hook-form";
import { validationSchema } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';




const rowFlex = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

const SignupForm = ({onSubmit }) => {
  
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [showPassword, setshowPassword] = useState(false);




  return (
    <Box pl={4} pr={4} pt={2} pb={3} sx={{ height: 'fit-content', width: '400px', backdropFilter: 'blur(7.5px)', background: 'rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', '@media(max-width:600px)':{width:'350px'},'@media(max-width:500px)':{width:'275px', height:'fit-content'} }} >
      <Box sx={{ ...rowFlex, fontSize: '30px', fontWeight: 600, color: 'white', height: '10%' }}>
        Sign up
      </Box>
      <form style={{ height: 'fit-content' }}>
        <Box mt={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Controller
            name={"emailSignup"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                sx={{ borderRadius: '15px',height:'30px',display:'flex', alignItems:'center', width:'95%',padding:'20px 0px 20px 0px',backgroundColor:'rgba(255, 255, 255, 0.2)',input: { color: 'white', } }}
                color='warning'
                autoComplete='off'
                inputMode='email'
                variant='standard'
                value={value}
                error={errors.emailSignup ? true : false}
                // helperText={errors.email ? errors.email.message : ''}
                onChange={onChange}
                placeholder='Email'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white', marginLeft:'20px' }} /></InputAdornment>,
                  disableUnderline: true, 
                }}
              />
            )}
          />
          <Box ml={2} mb={0} sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.emailSignup ? errors.emailSignup.message : ''}
          </Box>
          
          <Controller
            name={"passwordSignup"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                sx={{ borderRadius: '15px', marginTop:'15px',height:'30px',display:'flex', alignItems:'center',width:'95%', padding:'20px 0px 20px 0px',backgroundColor:'rgba(255, 255, 255, 0.2)',input: { color: 'white', userSelect:'none' } }}
                color={'warning'}
                inputMode='password'
                type={showPassword ?'text' : 'password'}
                variant='standard'
                value={value}
                error={errors.passwordSignup ? true : false}
                onChange={onChange}
                placeholder='Password'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><LockIcon sx={{ color: 'white', marginLeft:'20px' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="start" sx={{cursor:'pointer'}} >{!showPassword ? <VisibilityIcon onClick={() => setshowPassword(prev => !prev)} sx={{ color: 'white', marginRight:'10px'  }} />: <VisibilityOffIcon onClick={() => setshowPassword(prev => !prev)} sx={{ color: 'white', marginLeft:'20px' }} />}</InputAdornment>,
                  disableUnderline: true, 
                }}
              />
            )}
          />
          <Box ml={2} mb={0} sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.passwordSignup ? errors.passwordSignup.message : ''}
          </Box>

          <Box mt={1} sx={{ display: 'flex', justifyContent: 'space-between', color: 'white', flexDirection:'column',}}>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
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
              // label={"I agree to Terms of service and Privacy Policy"}

            />
            <Box>I agree to <Typography component={'span'} onClick={() => navigate('/termsAndCondition')} sx={{'&:hover':{ textDecoration:'underline', color:'#FFD600', cursor:'pointer' }}}>Terms of service</Typography> & <Typography component={'span'}  onClick={() => navigate('/termsAndCondition')} sx={{'&:hover':{ textDecoration:'underline', color:'#FFD600', cursor:'pointer' }}}>Privacy Policy</Typography></Box>
            </Box>
          <Box sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.terms ? errors.terms.message : ''}
          </Box>
          </Box>

          <Button onClick={handleSubmit(onSubmit)} variant='contained' fullWidth sx={{ height: '65px', marginTop:'15px',borderRadius: '15px', backgroundColor: '#FFD600', '&:hover': { backgroundColor: '#FFD600' } }}>
            Sign up
          </Button>
          {/* <Box  fontSize={14} sx={{ '&:hover': { color: '#FFD600', textDecoration: 'underline', cursor: 'pointer' } }}>Signup</Box> */}


        </Box>
        <Box fontSize={14} onClick={() => navigate('/signin')} sx={{ color:'white',marginTop:'5px','&:hover': { color: '#FFD600', textDecoration: 'underline', cursor: 'pointer' } }}>Login</Box>
      </form>
      


    </Box>
  )
}

export default SignupForm

