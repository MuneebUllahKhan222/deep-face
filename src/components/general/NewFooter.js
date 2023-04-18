import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

const NewFooter = ({colorScheme, bgCol}) => {
    const navigate = useNavigate();
    // const background =  colorScheme === 'light' ? '#E9E9E9' : 'black'
  return (
    <Box sx={colorScheme === 'light' ?{ height: '70vh', display: 'flex', backgroundColor:'white',flexDirection: 'column', alignItems: 'center', '@media(max-width:800px)': { height: 'fit-content', padding: '60px 0px 60px 0px' } } :{ height: '70vh', display: 'flex', backgroundColor:'black',flexDirection: 'column', alignItems: 'center', '@media(max-width:800px)': { height: 'fit-content', padding: '60px 0px 60px 0px' } }}>
            <Box sx={{ height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', '@media(max-width:600px)': { height: '300px', width: '100%' } }}>
                <Box mt={7} pl={{ sm: 10, xs: 5 }} pr={{ sm: 10, xs: 5 }}  sx={colorScheme === 'light' ? { height: '45%', backgroundColor: '#E9E9E9', borderRadius: '800px', width: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center','@media(max-width:600px)': { width: '100%', borderRadius:0, height:'70%', flexDirection:'column', justifyContent:'space-around' }}: { height: '45%', backgroundColor: '#1F1F1F', borderRadius: '800px', width: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center','@media(max-width:600px)': { width: '100%', borderRadius:0, height:'70%', flexDirection:'column', justifyContent:'space-around' }}}>

                    <Typography fontWeight={700} sx={colorScheme === 'light' ? { color: 'black', fontSize: '30px', '@media(max-width:600px)': { fontSize: '30px' },fontFamily:'Raleway'}:{ color: 'white', fontSize: '30px', '@media(max-width:600px)': { fontSize: '30px' },fontFamily:'Raleway'}}>Try it <Typography component={'span'} sx={{ fontSize: '30px', fontWeight: '700', background: 'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)', '-webkit-background-clip': 'text', ' -webkit-text-fill-color': 'transparent',  '@media(max-width:600px)': { fontSize: '30px' },fontFamily:'Raleway'}}>NOW!!!</Typography></Typography>

                    <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', '@media(max-width:600px)': { width:'45%' }, }}>
                        {/* <img src={workArrow} alt={'work1'} height={'60px'} width={'150px'}/> */}
                        <Button onClick={() => navigate('/imageSwap/upload')} variant='contained' disableElevation sx={{fontWeight:600, backgroundColor: '#FFD600', height: '45px', borderRadius: '12px', width: '150px','@media(max-width:600px)': { height:'55px', fontSize:'19px' },'&:hover': { backgroundColor: '#FFD600' }, }}>Swap It</Button>
                    </Box>
                </Box>
            </Box>
            <Box mt={5} sx={{ height: '30%', width: '80%' }}>
                <Footer colorScheme={colorScheme} />
            </Box>

        </Box>
  )
}

export default NewFooter