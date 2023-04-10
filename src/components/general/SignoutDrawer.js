import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const SignoutDrawer = ({ toggleDrawer }) => {
    const navigate = useNavigate();
    return (
        <Box pt={4} pb={2} pl={3} pr={3} sx={{}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Typography onClick={() => toggleDrawer(false)} sx={{cursor:'pointer'}}><CloseIcon /></Typography>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', cursor:'pointer',flexDirection: 'column', justifyContent: 'space-between', width: '95%', height: '80px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Features</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Pricing</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center',width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                        <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Contact us</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Button disableFocusRipple onClick={() => navigate('/signup')} sx={{marginTop:'30px',height:'50px',borderRadius:'10px',backgroundColor:'#FFD600', '&:hover':{backgroundColor:'#FFD600'}}} variant='contained' fullWidth>Sign Up</Button>
                <Button disableFocusRipple onClick={() => navigate('/signin')} sx={{marginTop:'10px',height:'50px',borderRadius:'10px',backgroundColor:'#1E1E1E', '&:hover':{backgroundColor:'#FFD600'}}} variant='contained' fullWidth>Login</Button>

                <Box mt={2} sx={{display:'flex', justifyContent:'space-between', width:'80%', alignItems:'center'}}>
                    <Typography onClick={() => navigate('/termsAndCondition')} fontSize={12} sx={{cursor:'pointer',color:'#5E5E5E','&:hover':{color:'white'}}} fontFamily={'Raleway'}>Terms of service</Typography>
                    <Typography>|</Typography>
                    <Typography onClick={() => navigate('/termsAndCondition')} fontSize={12} sx={{cursor:'pointer',color:'#5E5E5E','&:hover':{color:'white'}}} fontFamily={'Raleway'}>Privacy policy</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default SignoutDrawer