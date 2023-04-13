import { Avatar, Box, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, useMediaQuery } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoLight from '../../assets/images/logo-light.png'
import logoDark from '../../assets/images/logo-dark.png'
import MenuDrawer from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import TollIcon from '@mui/icons-material/Toll';
import { getCookies } from '../../utils';
import PersonIcon from '@mui/icons-material/Person';
import ModalAuth from '../modal/ModalAuth';
import { useDispatch, useSelector } from 'react-redux';
import ModalPricing from '../modal/ModalPricing';
import ModalStripe from '../modal/ModalStripe';
import ModalLocker from '../modal/ModalLocker';
import ModalLockerPricing from '../modal/ModalLockerPricing';
import { setInProgress } from '../../store/reducers/user';

const Header = ({ colorScheme }) => {
    const { modalState, pricingModalState, stripeModalState, lockerAdModalState, lockerPricingModalState, inProgress } = useSelector(state => state?.user)
    const navigate = useNavigate();
    const [open, setopen] = useState(false)
    const [showFeatureMenu, setShowFeatureMenu] = useState(false)
    const [showAvatarMenu, setShowAvatarMenu] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElFeature, setAnchorElFeature] = useState(null);
    const matches = useMediaQuery('(min-width:700px)')
    const dispatch = useDispatch();

    const toggleDrawer = (bool) => {
        setopen(bool)
    }
    // const user = true
    const user = getCookies('user')
    const credits = getCookies('credits')
    const handleClose = () => {
        setShowAvatarMenu(false)
    }

    const handleCloseFeature = () => {
        setShowFeatureMenu(false)
    }

    const handleClickFeature = (event, route) => {
        if (!inProgress) {
            if (window.location.href.includes('upload')) {
                navigate('/main')
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


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setShowAvatarMenu(true)
    };

    const handleLogout = () => {
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        handleClose()
        navigate('/main')
    }

    const handleNavigation = (route) => {
        handleCloseFeature()
        navigate(route)
    }

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
        <Box sx={{ height: '70px', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
            <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', '@media(max-width:800px)': { width: '95%' } }} >

                <Box onClick={() => handleNavigationWhileProcessing('/main')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                {
                    colorScheme === 'light'
                    ?
                    <img src={logoLight} width={80} height={80} alt='logo' />
                    :
                    <img src={logoDark} width={80} height={80} alt='logo' />
                }
                    {/* <img src={logo} alt='logo' />
                    <Typography fontWeight={550} sx={colorScheme === 'light' ? { color: '#363636' } : { color: 'white' }}>Deep duck</Typography> */}
                </Box>

                <Box sx={{ flexGrow: 1 }}></Box>
                {matches
                    ?
                    <>
                        {!user
                            ?
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', columnGap: '25px', justifyContent: 'space-between', }}>
                                <Box onClick={() => navigate('/swap/imageSwap/upload')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Swap it
                                </Box>
                                <Box>
                                    <Box onClick={() => navigate('/main')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        Features
                                    </Box>
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
                                        <MenuItem onClick={() => handleNavigation('/main/videoSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px'}}>
                                            Video Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/main/imageSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                            Image Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/main/gifSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px'}}>
                                            GIF Swap
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <Box onClick={() => handleNavigation('/buy/pay')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Pricing
                                </Box>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', columnGap: '25px', justifyContent: 'space-between' }}>
                                <Box onClick={() => handleNavigationWhileProcessing('/swap/imageSwap/upload')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Swap it
                                </Box>
                                <Box>
                                    <Box onClick={(e) => handleClickFeature(e,'/main')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        Features
                                    </Box>
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
                                        <MenuItem onClick={() => handleNavigation('/main/imageSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px'  }}>
                                            Image Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/main/gifSwap')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px' }}>
                                            GIF Swap
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <Box onClick={() => handleNavigationWhileProcessing('/buy/pay')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Pricing
                                </Box>
                                {
                                    user?.lockerSubscription === true
                                    &&
                                    <Box onClick={() => handleNavigationWhileProcessing('/main/gallery')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        Gallery
                                    </Box>
                                }
                            </Box>
                        }

                        <Box sx={{ flexGrow: 1 }}>

                        </Box>

                        {!user
                            ?
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                                <Button onClick={() => navigate('/auth/signin')} sx={colorScheme === 'video' ? { marginRight: '15px', color: 'white', fontWeight: 600, } : { marginRight: '15px', color: '#888888', fontWeight: 600, }} disableElevation disableFocusRipple variant='text'>
                                    Log in
                                </Button>
                                <Button onClick={() => navigate('/auth/signup')} variant='contained' disableElevation disableFocusRipple sx={{ backgroundColor: '#FFD600', borderRadius: '12px', width: 'fit-content', '&:hover': { backgroundColor: '#FFD600' } }}>Sign up</Button>
                            </Box>
                            :
                            <Box>
                                <IconButton onClick={handleClick}>
                                    <Avatar><PersonIcon /></Avatar>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={showAvatarMenu}
                                    onClose={handleClose}
                                    onClick={handleClose}
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
                                    <Tooltip title={user?.email} placement='top-start'>
                                        <MenuItem sx={{ backgroundColor: '#2A2A2C' }} onClick={handleClose}>
                                            <Avatar sx={{ width: '32px', fontSize: '10px', height: '32px', marginRight: '9px', backgroundColor: '#323235', color: '#707070' }} /> {user?.email.substring(0, 15)}  . . .
                                        </MenuItem>
                                    </Tooltip>
                                    <Divider />
                                    <MenuItem sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }} onClick={handleClose}>
                                        <ListItemIcon>
                                            <TollIcon sx={{ color: 'white' }} fontSize="small" />
                                        </ListItemIcon>
                                        Credits: {credits?.credits}
                                    </MenuItem>
                                    <MenuItem sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px' }} onClick={handleLogout}>
                                        <ListItemIcon>
                                            <Logout sx={{ color: 'white' }} fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        }

                    </>
                    :
                    <>
                        <Button onClick={() => handleNavigationWhileProcessing('/swap/imageSwap/upload')} variant='contained' disableElevation disableFocusRipple sx={{ backgroundColor: '#FFD600', borderRadius: '6px', width: 'fit-content', '&:hover': { backgroundColor: '#FFD600' }, marginRight: '10px', height: '35px' }}>Swap it</Button>
                        <IconButton sx={colorScheme === 'light' ? { color: 'black' } : { color: 'white' }} onClick={() => setopen(true)}><MenuIcon fontSize='large' /></IconButton>
                        <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
                    </>

                }
            </Box>
            <ModalAuth authModalOpen={modalState} />
            <ModalPricing open={pricingModalState} />
            <ModalStripe open={stripeModalState} />
            <ModalLocker open={lockerAdModalState} />
            <ModalLockerPricing open={lockerPricingModalState} />
        </Box>
    )
}

export default Header