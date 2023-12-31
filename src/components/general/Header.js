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
import { setInProgress, setLockerPricingModalOpen } from '../../store/reducers/user';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import CollectionsIcon from '@mui/icons-material/Collections';
import ModalUnsubscribe from '../modal/ModalUnsubscribe';

const Header = ({ colorScheme }) => {
    const { modalState, pricingModalState, stripeModalState, lockerAdModalState, lockerPricingModalState, inProgress, unsubscribeModalState } = useSelector(state => state?.user)
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
        navigate('/home')
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

    const handleCreditClick = () => {
        if (credits?.credits === 0) {
            navigate('/pricing')
        } 
        handleClose()
    }

    const handleLockerClick = () => {
        const date1 = new Date('7/13/2010');
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        if (diffDays <= 7) {
            navigate('/pricing')
            dispatch(setLockerPricingModalOpen())
        } 
        handleClose()
    }



    return (
        <Box sx={{ height: '70px', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
            <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', '@media(max-width:800px)': { width: '95%' } }} >

                <Box onClick={() => handleNavigationWhileProcessing('/home')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                {
                    colorScheme === 'light'
                    ?
                    <img src={logoLight} width={80} height={80} alt='logo' />
                    :
                    <img src={logoDark} width={80} height={80} alt='logo' />
                }
                    {/* <img src={logo} alt='logo' />
                    <Typography fontWeight={550} sx={colorScheme === 'light' ? { color: '#363636' } : { color: 'white' }}>deep face</Typography> */}
                </Box>

                <Box sx={{ flexGrow: 1 }}></Box>
                {matches
                    ?
                    <>
                        {!user
                            ?
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', columnGap: '25px', justifyContent: 'space-between', }}>
                            <Box>
                                    <Box onClick={(e) => handleClickFeature(e,'/home')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        Home
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
                                                padding: '10px',
                                                color: 'white',
                                                width: '180px'
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={() => handleNavigation('/videoSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '15px', fontFamily:'Raleway', fontSize:'14px'}}>
                                        <PlayArrowIcon sx={{marginRight:'10px'}} /> Video Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/imageSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '15px',fontFamily:'Raleway', fontSize:'14px'}}>
                                        <ImageIcon  sx={{marginRight:'10px'}} /> Image Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/gifSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px',fontFamily:'Raleway',fontSize:'14px'}}>
                                        <GifIcon fontSize='large' sx={{marginRight:'10px'}} />  GIF Swap
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <Box onClick={() => navigate('/imageSwap/upload')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Swap It
                                </Box>
                                <Box onClick={() => handleNavigation('/pricing')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Pricing
                                </Box>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', columnGap: '25px', justifyContent: 'space-between' }}>
                            <Box>
                                    <Box onClick={(e) => handleClickFeature(e,'/home')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        Home
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
                                                padding: '10px',
                                                color: 'white',
                                                width: '180px'
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={() => handleNavigation('/videoSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '15px', fontFamily:'Raleway', fontSize:'14px'}}>
                                        <PlayArrowIcon sx={{marginRight:'10px'}} /> Video Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/imageSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '15px',fontFamily:'Raleway', fontSize:'14px'}}>
                                        <ImageIcon  sx={{marginRight:'10px'}} /> Image Swap
                                        </MenuItem>
                                        <MenuItem onClick={() => handleNavigation('/gifSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px',fontFamily:'Raleway',fontSize:'14px'}}>
                                        <GifIcon fontSize='large' sx={{marginRight:'10px'}} />  GIF Swap
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <Box onClick={() => handleNavigationWhileProcessing('/imageSwap/upload')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Swap It
                                </Box>
                                <Box onClick={() => handleNavigationWhileProcessing('/pricing')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Pricing
                                </Box>
                                {
                                    user?.lockerSubscription === true
                                    &&
                                    <Box onClick={() => handleNavigationWhileProcessing('/locker')} sx={colorScheme === 'light' ? { color: 'black', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'black' } } : colorScheme === 'video' ? { color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#FFFFFF' } } : { color: '#888888', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        Locker
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
                                            padding: '10px',
                                            color: 'white',
                                            width: '241px'
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <Tooltip title={user?.email} placement='top-start'>
                                        <MenuItem sx={{ backgroundColor: '#2A2A2C' }} onClick={handleClose}>
                                            <Avatar sx={{ width: '32px', fontSize: '10px', height: '32px', marginRight: '9px', backgroundColor: '#323235', color: '#707070',fontFamily:'Raleway' }} /> {user?.email.substring(0, 15)}  . . .
                                        </MenuItem>
                                    </Tooltip>
                                    <Divider />
                                    <MenuItem sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '15px', fontFamily:'Raleway' }} onClick={handleCreditClick}>
                                        <ListItemIcon>
                                            <TollIcon sx={{ color: 'white' }} fontSize="small" />
                                        </ListItemIcon>
                                        Credits: {credits?.credits}
                                    </MenuItem>

                                    <MenuItem sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '15px',fontFamily:'Raleway' }} onClick={handleLockerClick}>
                                        <ListItemIcon>
                                            <CollectionsIcon sx={{ color: 'white' }} fontSize="small" />
                                        </ListItemIcon>
                                        Locker
                                    </MenuItem>
                                    <MenuItem sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px',fontFamily:'Raleway' }} onClick={handleLogout}>
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
                        <Button onClick={() => handleNavigationWhileProcessing('/imageSwap/upload')} variant='contained' disableElevation disableFocusRipple sx={{ backgroundColor: '#FFD600', borderRadius: '6px', width: 'fit-content', '&:hover': { backgroundColor: '#FFD600' }, marginRight: '10px', height: '35px' }}>Swap It</Button>
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
            <ModalUnsubscribe open={unsubscribeModalState}/>
        </Box>
    )
}

export default Header