import { Box, Button, Checkbox, Dialog, FormControlLabel, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema, validationSchema } from '../Login-signup/Validation';
import { resetAllModals,  setModalClose } from '../../store/reducers/user';
import { useDispatch } from 'react-redux';
import { login, register } from '../../store/services/register';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ModalAuth = ({ authModalOpen, pay, elements}) => {

  const [loginRegister, setloginRegister] = useState(false)
  const [check, setCheck] = useState(false)
  const dispatch = useDispatch();
  const { enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [showPasswordSignup, setshowPasswordSignup] = useState(false);
  
  const { handleSubmit, formState: { errors }, control, reset} = useForm({
    resolver: yupResolver(loginRegister? validationSchema:loginValidationSchema ),
    // resolver: yupResolver(loginValidationSchema ),
  });

  const handleClose = () => {
     dispatch(setModalClose())
  }

  const onLogin = async (data) => {
    
    if (elements !==null || undefined) {
      console.log('if entered')
      const res = await dispatch(login(data))
      if (res.status === 200) {
        handleClose()
        pay();
        enqueueSnackbar('Login successful', { variant: 'success', autoHideDuration: 2000 })
      } else {
        enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration: 3000 })
      }
    } else {
      console.log('else entered')
      const res = await dispatch(login(data))
    if (res.status === 200) {
      handleClose()
      enqueueSnackbar('Login successful', { variant: 'success', autoHideDuration: 2000 })
    } else {
      enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration: 3000 })
    }
    }
  };

  const onSignUp = async(data) => {
    if (elements !==null || undefined) {
      const res = await dispatch(register(data))
      if (res.status === 200) {
        handleClose()
        pay();
        enqueueSnackbar('Signup successful', { variant: 'success', autoHideDuration: 3000 })
      } else {
        enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration: 3000 })
      }
    } else {
      const res = await dispatch(register(data))
    if (res.status === 200) {
      handleClose()
      enqueueSnackbar('Signup successful', { variant: 'success', autoHideDuration: 3000 })
    } else {
      enqueueSnackbar(res?.message, { variant: 'error', autoHideDuration: 3000 })
    }
    }
  };

  const toggleLoginRegister = () => {
      reset({
        passwordSignup:'',
        password:'',
        email:'',
        emailSignup:''
      })
      setshowPassword(false);
      setshowPasswordSignup(false);
      setloginRegister(!loginRegister)
  }


  const handleTermsNaviagtion = () => {
    dispatch(resetAllModals())
    navigate('/termsAndCondition')
  }


  return (
    <Dialog open={authModalOpen} onClose={handleClose} sx={{ background: 'rgba(31, 31, 31, 0.75)', backdropFilter: 'blur(4px)', }}
      PaperProps={{
        style: {
          backdropFilter: 'blur(7.5px)',
          background: 'rgba(255,255,255,0.27)',
          padding: '30px',
          height: 'fit-content',
          width: '450px'
        },
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%' }}>
      <Box mb={1} mr={2} onClick={handleClose} sx={{display:'flex', justifyContent:'flex-end', color:'white', width:'100%'}}><CloseIcon /></Box>
        <Typography fontWeight={600} fontSize={25} sx={{ color: 'white', marginBottom:'5px' }}>{loginRegister? 'Sign Up' :'Log in'}</Typography>

        {
          loginRegister
          ?
          <>
          <Controller
          name={'emailSignup'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              sx={{ borderRadius: '15px', height: '30px', display: 'flex', alignItems: 'center', width: '95%', padding: '20px 0px 20px 0px', backgroundColor: 'rgba(255, 255, 255, 0.2)', input: { color: 'white', } }}
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
                startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white', marginLeft: '20px' }} /></InputAdornment>,
                disableUnderline: true,
              }}
            />

          )}
        />
        <Box ml={2} mb={errors.emailSignup ?1:2} sx={{ display: 'flex', alignItems: 'center', width: '100%', color: 'red' }}>
          {errors.emailSignup ? errors.emailSignup.message : ''}
        </Box>

        <Controller
          name={"passwordSignup"}
          control={control}
          render={({ field: { onChange, value } }) => (

            <TextField
              fullWidth
              sx={{ borderRadius: '15px', height: '30px', display: 'flex', alignItems: 'center', width: '95%', padding: '20px 0px 20px 0px', backgroundColor: 'rgba(255, 255, 255, 0.2)', input: { color: 'white', } }}
              autoComplete='off'
              inputMode='password'
              variant='standard'
              value={value}
              type={showPasswordSignup ?'text' : 'password'}
              error={errors?.passwordSignup ? true : false}
              // helperText={errors.email ? errors.email.message : ''}
              onChange={onChange}

              placeholder='Password'
              InputProps={{
                startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white', marginLeft: '20px' }} /></InputAdornment>,
                endAdornment: <InputAdornment position="start" sx={{cursor:'pointer'}} >{!showPasswordSignup ? <VisibilityIcon onClick={() => setshowPasswordSignup(prev => !prev)} sx={{ color: 'white', marginRight:'10px' }} />: <VisibilityOffIcon onClick={() => setshowPasswordSignup(prev => !prev)} sx={{ color: 'white', marginLeft:'20px' }} />}</InputAdornment>,
                disableUnderline: true,
              }}
            />
          )}
        />
        <Box ml={2} mb={errors?.passwordSignup ? 0 : 1} sx={{ display: 'flex', alignItems: 'center', width: '100%', color: 'red' }}>
          {errors?.passwordSignup ? errors?.passwordSignup?.message : ''}
        </Box>
        </>
          :
          <>
          <Controller
          name={'email'}
          defaultValue={''}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              sx={{ borderRadius: '15px', height: '30px', display: 'flex', alignItems: 'center', width: '95%', padding: '20px 0px 20px 0px', backgroundColor: 'rgba(255, 255, 255, 0.2)', input: { color: 'white', } }}
              color='warning'
              autoComplete='off'
              inputMode='email'
              variant='standard'
              value={value}
              error={errors.email ? true : false}
              // helperText={errors.email ? errors.email.message : ''}
              onChange={onChange}

              placeholder='Email'
              InputProps={{
                startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white', marginLeft: '20px' }} /></InputAdornment>,
                disableUnderline: true,
              }}
            />

          )}
        />
        <Box ml={2} mb={errors.email? 1 :2} sx={{ display: 'flex', alignItems: 'center', width: '100%', color: 'red' }}>
          {errors.email ? errors.email.message : ''}
        </Box>

        <Controller
          name={"password"}
          defaultValue={''}
          control={control}
          render={({ field: { onChange, value } }) => (

            <TextField
              fullWidth
              sx={{ borderRadius: '15px', height: '30px', display: 'flex', alignItems: 'center', width: '95%', padding: '20px 0px 20px 0px', backgroundColor: 'rgba(255, 255, 255, 0.2)', input: { color: 'white', } }}
              autoComplete='off'
              inputMode='password'
              variant='standard'
              value={value}
              type={showPassword ?'text' : 'password'}
              error={errors.password ? true : false}
              // helperText={errors.email ? errors.email.message : ''}
              onChange={onChange}

              placeholder='Password'
              InputProps={{
                startAdornment: <InputAdornment position="start" ><PersonIcon sx={{ color: 'white', marginLeft: '20px' }} /></InputAdornment>,
                endAdornment: <InputAdornment position="start" sx={{cursor:'pointer'}} >{!showPassword ? <VisibilityIcon onClick={() => setshowPassword(prev => !prev)} sx={{ color: 'white', marginRight:'10px' }} />: <VisibilityOffIcon onClick={() => setshowPassword(prev => !prev)} sx={{ color: 'white', marginLeft:'20px' }} />}</InputAdornment>,
                disableUnderline: true,
              }}
            />
          )}
        />
        <Box ml={2} mb={errors.email? 1 :2}  sx={{ display: 'flex', alignItems: 'center', width: '100%', color: 'red' }}>
          {errors.password ? errors.password.message : ''}
        </Box>
        </>
        }
      </Box>

      {loginRegister &&
        <Box ml={4} sx={{ display: 'flex', justifyContent: 'space-between', color: 'white', flexDirection:'column',}}>
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
                        sx={{color:'#FFD600',width:10, height:10,'&.Mui-checked': {color: '#FFD600'}}}
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
            <Box>I agree to <Typography component={'span'} onClick={() => handleTermsNaviagtion()} sx={{'&:hover':{ textDecoration:'underline', color:'#FFD600', cursor:'pointer' }}}>Terms of service</Typography> & <Typography component={'span'}  onClick={() => handleTermsNaviagtion()} sx={{'&:hover':{ textDecoration:'underline', color:'#FFD600', cursor:'pointer' }}}>Privacy Policy</Typography></Box>
            </Box>
          <Box sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.terms ? errors.terms.message : ''}
          </Box>
          </Box>
          }

     

      {loginRegister
      ?
      <Button variant='contained' onClick={handleSubmit(onSignUp)} fullWidth sx={{ height: '68px', marginTop: '15px', borderRadius: '15px', backgroundColor: '#FFD600', fontWeight:600,'&:hover': { backgroundColor: '#FFD600' } }}>
        Signup
      </Button>
      :
      <Button variant='contained' onClick={handleSubmit(onLogin)} fullWidth sx={{ height: '68px', marginTop: '15px', borderRadius: '15px', backgroundColor: '#FFD600', fontWeight:600,'&:hover': { backgroundColor: '#FFD600' } }}>
        Login
      </Button>
      }
      


      <Typography sx={{color:'white'}} variant='body2' mt={1} gutterBottom align='center'>
        {loginRegister ? 'Already have an account?' : "Don't have an account?"} <Button variant='text' onClick={() => toggleLoginRegister()} sx={{color:'#FFD600'}} size='small' >{loginRegister ? 'Login' : "SignUp"}</Button>
        {/* Don't have an account?<Button variant='text' color='secondary' size='small'>"SignUp"</Button> */}
      </Typography>
    </Dialog>
  )
}

export default ModalAuth