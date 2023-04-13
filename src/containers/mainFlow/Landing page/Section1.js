import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import stick from '../../../assets/images/stick.png'
import heading from '../../../assets/images/h1-heading.png'
import Header from '../../../components/general/Header';
import expression from '../../../assets/images/section1-expression.png'
import funny from '../../../assets/images/section1-funny.png'
import kid from '../../../assets/images/section1-kid.png'
import model1 from '../../../assets/images/section1-model1.png'
import model2 from '../../../assets/images/section1-model2.png'
import smile from '../../../assets/images/section1-smile.png'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

const Section1 = () => {
    const navigate = useNavigate();
  return (
    <Box  sx={{height:'100vh',display:'flex', flexDirection:'column',justifyContent:'space-between',backgroundColor:'black','@media(max-width:800px)':{ height:'fit-content', padding:'0px 0 40px 0'}}}>
    <Box sx={{height:'10%'}}>
    <Header />
    </Box>
        <Box className='section-1'  sx={{display:'flex', height:'90%',flexDirection:'column', alignItems:'center',  justifyContent:'center', '@media(max-width:800px)':{padding:'20px 30px 0px 30px'}}}>
        <Box sx={{height:'fit-content', display:'flex', justifyContent:'space-between', '@media(max-width:1200px)':{width:'80%'},alignItems:'center','@media(max-width:800px)':{flexDirection:'column', width:'100%'}}}>

            <Box sx={{ display:'flex', flexDirection:'column', width:'40%','@media(max-width:1000px)':{width:'40%'},'@media(max-width:800px)':{width:'60%', alignItems:'center'}, '@media(max-width:600px)':{width:'90%'}, '@media(max-width:450px)':{width:'100%'}}}>
                <Box sx={{ display:'flex', alignItems:'center', '@media(max-width:800px)':{justifyContent:'center', marginTop:'30px'}}}>
                    <Typography fontWeight={600} sx={{color:'white',fontSize:'40px', fontFamily:'Raleway','@media(max-width:900px)':{fontSize:'35px'},'@media(max-width:800px)':{fontSize:'30px',}}}>Swap It!</Typography>
                    <img src={stick}  alt='stick' />
                </Box>
                <Typography fontSize={15} fontWeight={500} sx={{color:'white', fontFamily:'Raleway'}}>Face swapping on an Image, Video or GIF is as easy as 1-2-3! Start your AI journey today!</Typography>
                <Button onClick={() => navigate('/swap/imageSwap/upload')} variant='contained' disableElevation sx={{backgroundColor:'#FFD600', height:'45px',borderRadius:'12px',width:'fit-content', marginTop:'25px', fontWeight:600,'&:hover':{backgroundColor:'#FFD600'}}}>Try Swap it</Button>           
            </Box>


            <Box sx={{width:'27%','@media(max-width:800px)':{width:'40%', marginTop:'30px'}, '@media(max-width:600px)':{width:'50%'}, '@media(max-width:450px)':{width:'60%'}}}>
                <img src={heading} alt={'imageSwap'} width={'100%'} />
            </Box>


        </Box>


        <Box mt={4} sx={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', color:'white', width:'90%', rowGap:'20px', columnGap:'10px', '@media(max-width:600px)':{width:'100%'}}}>
            <Box p={1} sx={{height:'137px', width:'167px', borderRadius:'15px', backgroundColor:'#25282C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <img src={expression} alt='expression' width={'100%'} />
                <Typography sx={{margin:'0 auto 0 auto', fontSize:'12px', fontFamily:'Raleway'}}>Swap expression</Typography>
            </Box>
            <Box p={1} sx={{height:'137px', width:'167px', borderRadius:'15px', backgroundColor:'#25282C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <img src={smile} alt='expression' width={'100%'} />
                <Typography sx={{margin:'0 auto 0 auto', fontSize:'12px', fontFamily:'Raleway'}}>Swap expression</Typography>
            </Box>
            <Box p={1} sx={{height:'137px', width:'167px', borderRadius:'15px', backgroundColor:'#25282C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <img src={funny} alt='expression' width={'100%'} />
                <Typography sx={{margin:'0 auto 0 auto', fontSize:'12px', fontFamily:'Raleway'}}>Swap expression</Typography>
            </Box>
            <Box p={1} sx={{height:'137px', width:'167px', borderRadius:'15px', backgroundColor:'#25282C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <img src={model1} alt='expression' width={'100%'} />
                <Typography sx={{margin:'0 auto 0 auto', fontSize:'12px', fontFamily:'Raleway'}}>Swap expression</Typography>
            </Box>
            <Box p={1} sx={{height:'137px', width:'167px', borderRadius:'15px', backgroundColor:'#25282C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <img src={model2} alt='expression' width={'100%'} />
                <Typography sx={{margin:'0 auto 0 auto', fontSize:'12px', fontFamily:'Raleway'}}>Swap expression</Typography>
            </Box>
            <Box p={1} sx={{height:'137px', width:'167px', borderRadius:'15px', backgroundColor:'#25282C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <img src={kid} alt='expression' width={'100%'} />
                <Typography sx={{margin:'0 auto 0 auto', fontSize:'12px', fontFamily:'Raleway'}}>Swap expression</Typography>
            </Box>  
        </Box>
        </Box>
    </Box>
  )
}

export default Section1