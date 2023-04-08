import React from 'react'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TollIcon from '@mui/icons-material/Toll';
import { delAllCookies, getCookies } from '../../utils';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../store/reducers/user';

const LoginDrawer = ({toggleDrawer}) => {

    const navigate= useNavigate();
    const user =getCookies('user')
    const dispatch = useDispatch();

    const logout = () => {
        delAllCookies()
        dispatch(resetAll())
        navigate('/')
    }
  return (
    <Box pt={4} pb={2} pl={3} pr={3} sx={{height:'90vh'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',height:'100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                <Avatar sx={{ width: '32px', fontSize:'10px',height: '32px', marginRight: '9px', backgroundColor: '#323235', color: '#707070' }} />
                <Typography fontSize={13}>{user?.email?.substring(0,15)}... <Typography fontSize={13} component={'span'} sx={{color:'#737373', marginLeft:'5px'}}>{'>'}</Typography></Typography>
                </Box>
                    <Typography onClick={() => toggleDrawer(false)}>&#x1F5D9;</Typography>
                </Box>


                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center',width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <TollIcon sx={{ color: '#737373' }} fontSize="small" />
                        <Typography ml={1} fontSize={14} fontWeight={400}>Credits: 20</Typography>
                    </Box>
                        
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>


                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center',width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box onClick={() => navigate('/gallery')} sx={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                        <Typography ml={1} fontSize={15} fontWeight={400}>Gallery</Typography>
                        
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '95%', height: '80px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400}>Features</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400}>Pricing</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center',width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                        <Typography ml={1} fontSize={14} fontWeight={400}>Contact us</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

               <Box sx={{display:'flex', flexGrow:1}}></Box>
                <Button  disableFocusRipple onClick={() => logout()} sx={{marginTop:'10px',height:'50px',borderRadius:'10px',backgroundColor:'#1E1E1E', '&:hover':{backgroundColor:'#FFD600'}}} variant='contained' fullWidth>Log out</Button>

                <Box mt={2} sx={{display:'flex', justifyContent:'space-between', width:'80%', alignItems:'center'}}>
                    <Typography onClick={() => navigate('/termsAndCondition')} fontSize={12} sx={{color:'#5E5E5E'}}>Terms of service</Typography>
                    <Typography>|</Typography>
                    <Typography onClick={() => navigate('/termsAndCondition')} fontSize={12} sx={{color:'#5E5E5E'}}>Privacy policy</Typography>
                </Box>
            </Box>
        </Box>
  )
}

export default LoginDrawer