import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../../components/general/Header'
import GalleryTabsandContent from './GalleryTabsandContent'

const Gallery = () => {
    return (
        <Box pb={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', height: 'fit-content', color:'white' }}>
            <Header />  
            <Box p={5} pl={{md:13, xs:5}} pr={{md:13, xs:5}}>
                <Typography sx={{fontSize:'22px', fontWeight:600, marginBottom:'40px'}}>
                    My Gallery
                </Typography>

                <GalleryTabsandContent />
            </Box>

        </Box>
    )
}

export default Gallery