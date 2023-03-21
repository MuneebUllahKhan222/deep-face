import { Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    const navigate = useNavigate();
    const [open, setopen] = useState(false)
    const matches = useMediaQuery('(min-width:700px)')
    const toggleDrawer = ( bool) => {
        setopen(bool)
    }

    useEffect(() => {
        console.log(open, 'open');
    },[open])

  return (
    <Box sx={{height:'70px', display:'flex', justifyContent:'center', background:'transparent'}}>
        <Box sx={{width:'90%', display:'flex', alignItems:'center','@media(max-width:800px)':{width:'97%'}}} >

            <Box onClick={() => navigate('/')} sx={{display:'flex', alignItems:'center'}}>
                <img src={logo} alt='logo' />
                <Typography sx={{color:'white'}}>Deep duck</Typography>
            </Box>

            <Box sx={{flexGrow:1}}></Box>
            { matches 
            ?
            <>
                <Box sx={{display:'flex', alignItems:'center', width:'20%', justifyContent:'space-between', '@media(max-width:1100px)':{width:'30%'},'@media(max-width:800px)':{width:'35%'}}}>
                <Box sx={{color:'#888888', cursor:'pointer', '&:hover': {color:'white'}}}>
                    Swap it
                </Box>
                <Box sx={{color:'#888888'}}>
                    Features
                </Box>
                <Box sx={{color:'#888888', cursor:'pointer', '&:hover': {color:'white'}}}>
                    Pricing
                </Box>
            </Box>

            <Box sx={{flexGrow:1}}>

            </Box>

            <Box sx={{display:'flex', alignItems:'center', width:'fit-content' }}>
                <Button onClick={() => navigate('/signin')} sx={{marginRight:'15px', color:'#888888'}} disableElevation variant='text'>
                        Log in
                </Button>   
                <Button onClick={() => navigate('/signup')} variant='contained' disableElevation sx={{backgroundColor:'#FFD600',borderRadius:'12px',width:'fit-content', '&:hover':{backgroundColor:'#FFD600'}}}>Sign up</Button>   
            </Box>
            </>
            :
            <>
            {/* <Button onClick={() => setopen(true)} >drawer</Button> */}
            <IconButton sx={{color:'#FFD600'}} onClick={() => setopen(true)}><MenuIcon fontSize='large'/></IconButton>
            <Menu open={open} toggleDrawer={toggleDrawer} />
            </>
            
            }
        </Box>
    </Box>
  )
}

export default Header