import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import workArrow from '../../../assets/images/work-arrow.png';
import Footer from '../../../components/general/Footer';

const Section7 = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ height: '70vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', '@media(max-width:800px)': { height: 'fit-content', padding: '60px 0px 60px 0px' } }}>
            <Box sx={{ height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', '@media(max-width:600px)': { height: '300px', width: '100%' } }}>
                <Box mt={7} pl={{ sm: 10, xs: 5 }} pr={{ sm: 10, xs: 5 }} sx={{ height: '45%', backgroundColor: '#1F1F1F', borderRadius: '800px', width: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Typography fontWeight={700} sx={{ color: 'white', fontSize: '30px', '@media(max-width:600px)': { fontSize: '25px' }, '@media(max-width:450px)': { fontSize: '20px' } }}>Try it <Typography component={'span'} sx={{ fontSize: '30px', fontWeight: '700', background: 'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)', '-webkit-background-clip': 'text', ' -webkit-text-fill-color': 'transparent', }}>NOW!!!</Typography></Typography>

                    <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        {/* <img src={workArrow} alt={'work1'} height={'60px'} width={'150px'}/> */}
                        <Button onClick={() => navigate('/imageSwap/upload')} variant='contained' disableElevation sx={{ backgroundColor: '#FFD600', height: '45px', borderRadius: '12px', width: '150px', '&:hover': { backgroundColor: '#FFD600' } }}>Swap It</Button>
                    </Box>
                </Box>
            </Box>
            <Box mt={5} sx={{ height: '30%', width: '70%' }}>
                <Footer />
            </Box>

        </Box>
    )
}

export default Section7