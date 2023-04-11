import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';

const Footer = ({ colorScheme }) => {
    const matches600w = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();
    
    return (
        <Box pt={3} sx={{ height: 'fit-content', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', width:'100%','@media(max-width:700px)': { flexWrap: 'wrap', justifyContent:'center', rowGap:'40px', columnGap:'20px' } }}>
            {/* <Box sx={{display:'flex', width:'100%', justifyContent:'space-between','@media(max-width:700px)':{flexDirection:'column', alignItems:'flex-start'} }}> */}
            { 
                !matches600w
                ?
                <>
   
                <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', width:'180px','@media(max-width:700px)': { marginBottom: '20px' }, '@media(max-width:570px)': { marginLeft:'25px'  } }}>
                <Typography fontSize={17} fontWeight={550}  sx={colorScheme === 'light' ? {color: 'black',fontFamily:'Raleway',marginBottom:'13px'}: { color: '#B8B8B8',fontFamily:'Raleway',marginBottom:'13px' }}>Contact us</Typography>
                <Box sx={{ display: 'flex' }}>
                    {
                        colorScheme === 'light'
                            ?
                            <>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                    <EmailIcon sx={{color:'white'}} />
                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                            </>
                            :
                            <>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <EmailIcon sx={{color:'#DDDDDD'}} />
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>

                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>

                                </Box>
                            </>

                    }

                </Box>
            </Box>

            <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', width:'180px', '@media(max-width:700px)': { marginBottom: '20px' },  '@media(max-width:570px)': { marginLeft:'25px'  }  }}>
                <Typography fontSize={17} fontWeight={550}  sx={colorScheme === 'light' ? {color: 'black',fontFamily:'Raleway',marginBottom:'13px'}: { color: '#B8B8B8',fontFamily:'Raleway',marginBottom:'13px' }}>Social media</Typography>
                <Box sx={{ display: 'flex' }}>
                {
                        colorScheme === 'light'
                            ?
                            <>
                            <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <FacebookIcon sx={{color:'white'}} />
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <LinkedInIcon sx={{color:'white'}}/>
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <TwitterIcon sx={{color:'white'}}/>
                                </Box>
                            </>
                            :
                            <>
                            <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <FacebookIcon sx={{ color: '#B8B8B8' }} />
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <LinkedInIcon sx={{ color: '#B8B8B8' }}/>
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <TwitterIcon sx={{ color: '#B8B8B8' }}/>
                                </Box>
                            </>

                    }
                </Box>
            </Box>

            <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', width:'180px', '@media(max-width:700px)': { marginBottom: '20px' },  '@media(max-width:570px)': { marginLeft:'25px'  }  }}>
                <Typography fontSize={17} fontWeight={550}  sx={colorScheme === 'light' ? {color: 'black',fontFamily:'Raleway',marginBottom:'13px'}: { color: '#B8B8B8',fontFamily:'Raleway',marginBottom:'13px' }}>Legal</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography onClick={() => navigate('/termsAndCondition')} fontSize={14} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway', cursor:'pointer' }:{ color: '#DDDDDD',fontFamily:'Raleway',cursor:'pointer' }}>Terms and service</Typography>
                    <Typography onClick={() => navigate('/termsAndCondition')} fontSize={14} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway',cursor:'pointer' }:{ color: '#DDDDDD',fontFamily:'Raleway',cursor:'pointer' }}>Privacy policy</Typography>
                    <Typography fontSize={14} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway' }:{ color: '#DDDDDD',fontFamily:'Raleway' }}>Refund policy</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width:'180px', '@media(max-width:700px)': { marginBottom: '20px' }, '@media(max-width:570px)': { marginLeft:'25px'  }  }}>
                <Typography fontSize={17} fontWeight={550}  sx={colorScheme === 'light' ? {color: 'black',fontFamily:'Raleway',marginBottom:'13px'}: { color: '#B8B8B8',fontFamily:'Raleway',marginBottom:'13px' }}>Support</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontSize={15} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway' }:{ color: '#DDDDDD',fontFamily:'Raleway' }}>FAQ</Typography>
                </Box>
            </Box>
            </>
            :
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', rowGap:'70px'}}>
                <Box sx={{display:'flex', justifyConten:'center', flexDirection:'column', alignItems:'center'}}>
                    <Typography sx={colorScheme === 'light' ? {color: 'black',fontFamily:'Raleway',marginBottom:'13px'}: { color: '#B8B8B8',fontFamily:'Raleway',marginBottom:'13px' }}>Contact us</Typography>
                    {
                        colorScheme === 'light'
                            ?
                            <Box mt={2} sx={{display:'flex'}}>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                    <EmailIcon sx={{color:'white'}} />
                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                            </Box>
                            :
                            <Box mt={2} sx={{display:'flex'}}>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <EmailIcon sx={{color:'#DDDDDD'}} />
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>

                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>

                                </Box>
                            </Box>

                    }
                </Box>


                <Box sx={{display:'flex', justifyConten:'center', flexDirection:'column', alignItems:'center'}}>
                    <Typography sx={colorScheme === 'light' ? {color: 'black',fontFamily:'Raleway',marginBottom:'13px'}: { color: '#B8B8B8',fontFamily:'Raleway',marginBottom:'13px' }}>Social media</Typography>
                    {
                        colorScheme === 'light'
                            ?
                            <Box mt={2} sx={{display:'flex'}}>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                    <EmailIcon sx={{color:'white'}} />
                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                            </Box>
                            :
                            <Box mt={2} sx={{display:'flex'}}>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <EmailIcon sx={{color:'#DDDDDD'}} />
                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>

                                </Box>
                                <Box mr={1} p={0.3} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px', display:'flex', justifyContent:'center', alignItems:'center' }}>

                                </Box>
                            </Box>

                    }
                </Box>

                <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',  }} >
                <Typography fontSize={15}  sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway' }:{ color: '#DDDDDD',fontFamily:'Raleway' }}>FAQ</Typography>
                <Typography fontSize={15} onClick={() => navigate('/termsAndCondition')} letterSpacing={1.2} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway' }:{ color: '#DDDDDD',fontFamily:'Raleway' }}>Terms and services</Typography>
                <Typography fontSize={15} onClick={() => navigate('/termsAndCondition')} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway',cursor:'pointer' }:{ color: '#DDDDDD',fontFamily:'Raleway',cursor:'pointer' }}>Privacy policy</Typography>
                </Box>

                <Box sx={{display:'flex', justifyContent:'center', width:'100%',  }} >
                <Typography fontSize={15} letterSpacing={1.3} sx={colorScheme === 'light' ?{ color: '#1F1F1F',fontFamily:'Raleway' }:{ color: '#DDDDDD',fontFamily:'Raleway' }}>Refund policy</Typography>
                </Box>
            </Box>
            }
            {/* </Box> */}
        </Box>
    )
}

export default Footer