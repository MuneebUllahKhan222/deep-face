import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const SignoutDrawer = ({ toggleDrawer }) => {
    const navigate = useNavigate();
    const [anchorElFeature, setAnchorElFeature] = useState(null);
    const [showFeatureMenu, setShowFeatureMenu] = useState(false);

    const handleNavigation = (route) => {
        handleCloseFeature()
        navigate(route)
    };
    const handleCloseFeature = () => {
        setShowFeatureMenu(false)
    }

    const handleClickFeature = (event) => {
        if (window.location.href.includes('upload')) {
            navigate('/main')
        } else {
            setAnchorElFeature(event.currentTarget);
            setShowFeatureMenu(true)
        }
    };




    return (
        <Box pt={4} pb={2} pl={3} pr={3} sx={{}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Typography onClick={() => toggleDrawer(false)} sx={{ cursor: 'pointer' }}><CloseIcon /></Typography>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', cursor: 'pointer', flexDirection: 'column', justifyContent: 'space-between', width: '95%', height: '80px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box onClick={handleClickFeature} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Features</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                        <Menu
                            anchorEl={anchorElFeature}
                            id="account-menu"
                            open={showFeatureMenu}
                            onClose={handleCloseFeature}
                            onClick={handleCloseFeature}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    backgroundColor: '#2A2A2C',
                                    borderRadius: '15px',
                                    padding: '15px',
                                    color: 'white',
                                    width: '241px'
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={() => handleNavigation('/main/videoSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                Video Swap
                            </MenuItem>
                            <MenuItem onClick={() => handleNavigation('/main/imageSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                Image Swap
                            </MenuItem>
                            <MenuItem onClick={() => handleNavigation('/main/gifSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px' }}>
                                GIF Swap
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box onClick={() => navigate('/buy/pay')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Pricing</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Contact us</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Button disableFocusRipple onClick={() => navigate('/auth/signup')} sx={{ marginTop: '30px', height: '50px', borderRadius: '10px', backgroundColor: '#FFD600', '&:hover': { backgroundColor: '#FFD600' } }} variant='contained' fullWidth>Sign Up</Button>
                <Button disableFocusRipple onClick={() => navigate('/auth/signin')} sx={{ marginTop: '10px', height: '50px', borderRadius: '10px', backgroundColor: '#1E1E1E', '&:hover': { backgroundColor: '#FFD600' } }} variant='contained' fullWidth>Login</Button>

                <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', alignItems: 'center' }}>
                    <Typography onClick={() => navigate('/main/termsAndCondition')} fontSize={12} sx={{ cursor: 'pointer', color: '#5E5E5E', '&:hover': { color: 'white' } }} fontFamily={'Raleway'}>Terms of service</Typography>
                    <Typography>|</Typography>
                    <Typography onClick={() => navigate('/main/termsAndCondition')} fontSize={12} sx={{ cursor: 'pointer', color: '#5E5E5E', '&:hover': { color: 'white' } }} fontFamily={'Raleway'}>Privacy policy</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default SignoutDrawer