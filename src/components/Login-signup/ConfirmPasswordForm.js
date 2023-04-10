import { Box, Button, InputAdornment,TextField,  } from '@mui/material'
import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import { Controller, useForm } from "react-hook-form";
import { confirmPassSchema,  } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';




const rowFlex = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}


const ConfirmPasswordForm = ({onSubmit}) => {
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(confirmPassSchema),
  });

  const [showPassword, setshowPassword] = useState(false)
  const [showconfirmPassword, setshowConfirmPassword] = useState(false)




  return (
    <Box pl={4} pr={4} pt={2} pb={3} sx={{ height: 'fit-content', width: '400px', backdropFilter: 'blur(7.5px)', background: 'rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', '@media(max-width:600px)':{width:'350px'},'@media(max-width:500px)':{width:'275px', height:'fit-content'} }} >
      <Box fontFamily={'Raleway'} sx={{ ...rowFlex, fontSize: '30px', fontWeight: 600, color: 'white', height: '10%', textAlign:'center' }}>
        Enter New Password
      </Box>
      <form style={{ height: 'fit-content' }}>
        <Box mt={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Controller
            name={"newPassword"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                sx={{ borderRadius: '15px', marginTop:'15px',height:'30px',display:'flex', alignItems:'center',width:'95%', padding:'20px 0px 20px 0px',backgroundColor:'rgba(255, 255, 255, 0.2)',input: { color: 'white', } }}
                color={'warning'}
                inputMode='password'
                type={showPassword ?'text' : 'password'}
                variant='standard'
                value={value}
                error={errors.newPassword ? true : false}
                onChange={onChange}
                placeholder='New password'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><LockIcon sx={{ color: 'white', marginLeft:'20px' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="start" sx={{cursor:'pointer'}} >{!showPassword ? <VisibilityIcon onClick={() => setshowPassword(prev => !prev)} sx={{ color: 'white', marginRight:'10px' }} />: <VisibilityOffIcon onClick={() => setshowPassword(prev => !prev)} sx={{ color: 'white', marginLeft:'20px' }} />}</InputAdornment>,
                  disableUnderline: true, 
                }}
              />
            )}
          />
          <Box ml={2} mb={0} sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.newPassword ? errors.newPassword.message : ''}
          </Box>
          
          <Controller
            name={"confirmPassword"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                sx={{ borderRadius: '15px', marginTop:'15px',height:'30px',display:'flex', alignItems:'center',width:'95%', padding:'20px 0px 20px 0px',backgroundColor:'rgba(255, 255, 255, 0.2)',input: { color: 'white', } }}
                color={'warning'}
                inputMode='password'
                type={showconfirmPassword ?'text' : 'password'}
                variant='standard'
                value={value}
                error={errors.confirmPassword ? true : false}
                onChange={onChange}
                placeholder='Confirm password'
                InputProps={{
                  startAdornment: <InputAdornment position="start" ><LockIcon sx={{ color: 'white', marginLeft:'20px' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="start" sx={{cursor:'pointer'}} >{!showconfirmPassword ? <VisibilityIcon onClick={() => setshowConfirmPassword(prev => !prev)} sx={{ color: 'white', marginRight:'10px' }} />: <VisibilityOffIcon onClick={() => setshowConfirmPassword(prev => !prev)} sx={{ color: 'white', marginLeft:'20px' }} />}</InputAdornment>,
                  disableUnderline: true, 
                }}
              />
            )}
          />
          <Box ml={2} mb={0} sx={{display:'flex', alignItems:'center', width:'100%', color:'red'}}>
          {errors.confirmPassword ? errors.confirmPassword.message : ''}
          </Box>
            <Button onClick={handleSubmit(onSubmit)} variant='contained' fullWidth sx={{ height: '65px', marginTop:'15px',borderRadius: '15px', backgroundColor: '#FFD600', '&:hover': { backgroundColor: '#FFD600' } }}>
            Change password
          </Button>
          


        </Box>
      </form>
      

    </Box>
  )
}

export default ConfirmPasswordForm