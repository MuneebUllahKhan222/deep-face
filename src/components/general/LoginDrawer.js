import React, { useState } from 'react'
import { Box, Button, Menu, MenuItem, Typography, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TollIcon from '@mui/icons-material/Toll';
import { delAllCookies, getCookies } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { resetAll, setInProgress } from '../../store/reducers/user';
import CloseIcon from '@mui/icons-material/Close';

const LoginDrawer = ({ toggleDrawer }) => {

    const navigate = useNavigate();
    const user = getCookies('user');
    const credits = getCookies('credits')
    const dispatch = useDispatch();
    const [anchorElFeature, setAnchorElFeature] = useState(null);
    const [showFeatureMenu, setShowFeatureMenu] = useState(false);
    const { inProgress } = useSelector(state => state?.user)


    const logout = () => {
        delAllCookies()
        dispatch(resetAll())
        navigate('/home')
    }

    const handleNavigation = (route) => {
        handleCloseFeature()
        navigate(route)
    };
    const handleCloseFeature = () => {
        setShowFeatureMenu(false)
    }

    const handleClickFeature = (event, route) => {
        if (!inProgress) {
            if (window.location.href.includes('upload')) {
                navigate('/home')
            } else {
                setAnchorElFeature(event.currentTarget);
                setShowFeatureMenu(true)
            }
        } else {
            const alertUser = window.confirm("Are you sure you want to leave this page without saving its contents?");
            if (alertUser){
                dispatch(setInProgress(false))
                navigate(route)
            } 
        }
       
    };

    const handleNavigationWhileProcessing = (route) => {
        if (inProgress){
            const alertUser = window.confirm("Are you sure you want to leave this page without saving its contents?");
            if (alertUser){
                dispatch(setInProgress(false))
                navigate(route)
            } 
        } else {
            navigate(route)
        }
      }
    return (
        <Box pt={4} pb={2} pl={3} pr={3} sx={{ height: '90vh' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ width: '32px', fontSize: '10px', height: '32px', marginRight: '9px', backgroundColor: '#323235', color: '#707070' }} />
                        <Typography fontSize={13} fontFamily={'Raleway'}>{user?.email?.substring(0, 15)}... <Typography fontSize={13} component={'span'} sx={{ color: '#737373', marginLeft: '5px' }}>{'>'}</Typography></Typography>
                    </Box>
                    <Typography sx={{ cursor: 'pointer' }} onClick={() => toggleDrawer(false)}><CloseIcon /></Typography>
                </Box>


                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TollIcon sx={{ color: '#737373' }} fontSize="small" />
                            <Typography ml={1} fontSize={14} fontWeight={400} fontFamily={'Raleway'}>Credits: {credits?.credits}</Typography>
                        </Box>

                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>


                {user?.lockerSubscription === true
                    &&
                    <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px', cursor: 'pointer' }}>
                        <Box onClick={() => handleNavigationWhileProcessing('/gallery')} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography ml={1} fontSize={15} fontWeight={400} fontFamily={'Raleway'}>Gallery</Typography>

                            <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                        </Box>
                    </Box>}

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '95%', height: '80px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box onClick={(e) => handleClickFeature(e, '/home')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} sx={{ cursor: 'pointer' }} fontFamily={'Raleway'} >Features</Typography>
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
                            <MenuItem onClick={() => handleNavigation('/videoSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                Video Swap
                            </MenuItem>
                            <MenuItem onClick={() => handleNavigation('/imageSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                Image Swap
                            </MenuItem>
                            <MenuItem onClick={() => handleNavigation('/gifSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px' }}>
                                GIF Swap
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box onClick={() => handleNavigationWhileProcessing('/pricing')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} sx={{ cursor: 'pointer' }} fontFamily={'Raleway'}>Pricing</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Box p={2} pt={3} pb={3} mt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', height: '10px', backgroundColor: '#1E1E1E', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography ml={1} fontSize={14} fontWeight={400} sx={{ cursor: 'pointer' }} fontFamily={'Raleway'}>Contact us</Typography>
                        <Typography sx={{ color: '#737373' }}>{'>'}</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
                <Button disableFocusRipple onClick={() => logout()} sx={{ cursor: 'pointer', marginTop: '10px', height: '50px', borderRadius: '10px', backgroundColor: '#1E1E1E', '&:hover': { backgroundColor: '#FFD600' } }} variant='contained' fullWidth>Log out</Button>

                <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', alignItems: 'center' }}>
                    <Typography onClick={() => handleNavigationWhileProcessing('/termsAndCondition')} fontSize={12} sx={{ color: '#5E5E5E', cursor: 'pointer', '&:hover': { color: 'white' } }} fontFamily={'Raleway'}>Terms of service</Typography>
                    <Typography>|</Typography>
                    <Typography onClick={() => handleNavigationWhileProcessing('/termsAndCondition')} fontSize={12} sx={{ color: '#5E5E5E', cursor: 'pointer', '&:hover': { color: 'white' } }} fontFamily={'Raleway'}>Privacy policy</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginDrawer