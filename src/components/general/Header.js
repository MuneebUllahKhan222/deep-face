import { Avatar, Box, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import MenuDrawer from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import TollIcon from '@mui/icons-material/Toll';
import { delCookies, getCookies } from '../../utils';
import PersonIcon from '@mui/icons-material/Person';

const Header = ({ colorScheme }) => {

    const navigate = useNavigate();
    const [open, setopen] = useState(false)
    const [showFeatureMenu, setShowFeatureMenu] = useState(false)
    const [showAvatarMenu, setShowAvatarMenu] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElFeature, setAnchorElFeature] = useState(null);
    const matches = useMediaQuery('(min-width:700px)')
    const toggleDrawer = (bool) => {
        setopen(bool)
    }
    // const user = true
    const user = getCookies('user')
    const handleClose = () => {
        setShowAvatarMenu(false)
    }

    const handleCloseFeature = () => {
        setShowFeatureMenu(false)
    }

    const handleClickFeature = (event) => {
        setAnchorElFeature(event.currentTarget);
        setShowFeatureMenu(true)
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setShowAvatarMenu(true)
    };

    const handleLogout = () => {
        delCookies('user', {
            path: '/'
        })
        handleClose()
        navigate('/')
    }

    const handleNavigation = (route) => {
        handleCloseFeature()
        navigate(route)
    }

    return (
        <Box sx={{ height: '70px', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
            <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', '@media(max-width:800px)': { width: '95%' } }} >

                <Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <img src={logo} alt='logo' />
                    <Typography sx={colorScheme === 'light' ? { color: '#363636' } : { color: 'white' }}>Deep duck</Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }}></Box>
                {matches
                    ?
                    <>
                        {!user
                            ?
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', columnGap:'25px',justifyContent: 'space-between',}}>
                                <Box onClick={() => navigate('/imageSwap/upload')} sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Swap it
                                </Box>
                                <Box>
                                <Box onClick={handleClickFeature} sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
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
                                    <MenuItem onClick={() => handleNavigation('/imageSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                        Image Swap
                                    </MenuItem>
                                    <MenuItem onClick={() => handleNavigation('/gifSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                        GIF Swap
                                    </MenuItem>
                                    <MenuItem onClick={() => handleNavigation('/videoSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px' }}>
                                        Video Swap
                                    </MenuItem>
                                </Menu>
                            </Box>
                                <Box sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Pricing
                                </Box>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', columnGap:'25px',justifyContent: 'space-between'}}>
                                <Box onClick={() => navigate('/imageSwap/upload')} sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Swap it
                                </Box>
                                <Box>
                                <Box onClick={handleClickFeature} sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
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
                                    <MenuItem onClick={() => handleNavigation('/imageSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                        Image Swap
                                    </MenuItem>
                                    <MenuItem onClick={() => handleNavigation('/gifSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }}>
                                        GIF Swap
                                    </MenuItem>
                                    <MenuItem onClick={() => handleNavigation('/videoSwap/upload')} sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px' }}>
                                        Video Swap
                                    </MenuItem>
                                </Menu>
                                </Box>
                                <Box sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Pricing
                                </Box>
                                <Box onClick={() => navigate('/gallery')} sx={colorScheme === 'light' ? { color: '#888888', cursor: 'pointer', '&:hover': { color: 'black' } } : { color: '#888888', cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                    Gallery
                                </Box>
                            </Box>
                        }

                        <Box sx={{ flexGrow: 1 }}>

                        </Box>

                        {!user
                            ?
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                                <Button onClick={() => navigate('/signin')} sx={{ marginRight: '15px', color: '#888888' }} disableElevation disableFocusRipple variant='text'>
                                    Log in
                                </Button>
                                <Button onClick={() => navigate('/signup')} variant='contained' disableElevation disableFocusRipple sx={{ backgroundColor: '#FFD600', borderRadius: '12px', width: 'fit-content', '&:hover': { backgroundColor: '#FFD600' } }}>Sign up</Button>
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
                                    <MenuItem sx={{ backgroundColor: '#2A2A2C' }} onClick={handleClose}>
                                        <Avatar sx={{ width: '32px', height: '32px', marginRight: '9px', backgroundColor: '#323235', color: '#707070' }} /> Account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem sx={{ backgroundColor: '#323235', borderRadius: '10px', height: '50px', marginBottom: '20px' }} onClick={handleClose}>
                                        <ListItemIcon>
                                            <TollIcon sx={{ color: 'white' }} fontSize="small" />
                                        </ListItemIcon>
                                        Credit: 20
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
                        <IconButton sx={{ color: '#FFD600' }} onClick={() => setopen(true)}><MenuIcon fontSize='large' /></IconButton>
                        <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
                    </>

                }
            </Box>
        </Box>
    )
}

export default Header