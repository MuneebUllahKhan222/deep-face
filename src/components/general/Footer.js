import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = ({ colorScheme }) => {
    return (
        <Box pt={3} sx={{ height: 'fit-content', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', '@media(max-width:700px)': { flexWrap: 'wrap' } }}>
            {/* <Box sx={{display:'flex', width:'100%', justifyContent:'space-between','@media(max-width:700px)':{flexDirection:'column', alignItems:'flex-start'} }}> */}
            <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', '@media(max-width:700px)': { marginBottom: '20px' } }}>
                <Typography sx={{ color: '#B8B8B8' }}>Contact us</Typography>
                <Box sx={{ display: 'flex' }}>
                    {
                        colorScheme === 'light'
                            ?
                            <>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                            </>
                            :
                            <>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px' }}>

                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px' }}>

                                </Box>
                            </>

                    }

                </Box>
            </Box>

            <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', '@media(max-width:700px)': { marginBottom: '20px' } }}>
                <Typography sx={{ color: '#B8B8B8' }}>Social media</Typography>
                <Box sx={{ display: 'flex' }}>
                {
                        colorScheme === 'light'
                            ?
                            <>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#E9E9E9', borderRadius: '50px' }}>

                                </Box>
                            </>
                            :
                            <>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px' }}>

                                </Box>
                                <Box mr={1} sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px' }}>

                                </Box>
                                <Box sx={{ height: '30px', width: '30px', backgroundColor: '#282828', borderRadius: '50px' }}>

                                </Box>
                            </>

                    }
                </Box>
            </Box>

            <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', '@media(max-width:700px)': { marginBottom: '20px' } }}>
                <Typography sx={{ color: '#B8B8B8' }}>Legal</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontSize={12} sx={colorScheme === 'light' ?{ color: '#1F1F1F' }:{ color: '#DDDDDD' }}>Terms and service</Typography>
                    <Typography fontSize={12} sx={colorScheme === 'light' ?{ color: '#1F1F1F' }:{ color: '#DDDDDD' }}>Privacy policy</Typography>
                    <Typography fontSize={12} sx={colorScheme === 'light' ?{ color: '#1F1F1F' }:{ color: '#DDDDDD' }}>Refund policy</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', '@media(max-width:700px)': { marginBottom: '20px' } }}>
                <Typography sx={{ color: '#B8B8B8', }}>Support</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontSize={12} sx={colorScheme === 'light' ?{ color: '#1F1F1F' }:{ color: '#DDDDDD' }}>FAQ</Typography>
                </Box>
            </Box>
            {/* </Box> */}
        </Box>
    )
}

export default Footer