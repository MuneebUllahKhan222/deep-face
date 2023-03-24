import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import NoContent from '../../../assets/images/GalleryNoContent.png'

const GalleryTabsandContent = () => {
    const [value, setValue] = useState(0)

    // const [images, setimages] = useState([]);
    // const [gif, setgif] = useState([]);
    // const [videos, setvideos] = useState([]);
    const images = []
    const gif = []
    const videos = []

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const styleImages = {
        color: value === 0 ? 'white' : '#6E6E6E',
        backgroundColor: value === 0 ? '#2B2B2B' : 'black',
    }

    const styleGifs = {
        color: value === 1 ? 'white' : '#6E6E6E',
        backgroundColor: value === 1 ? '#2B2B2B' : 'black',
    }
    const styleVideos = {
        color: value === 2 ? 'white' : '#6E6E6E',
        backgroundColor: value === 2 ? '#2B2B2B' : 'black',
    }

    return (
        <Box >
            <Tabs value={value} onChange={handleChange} textColor='warning' TabIndicatorProps={{ style: { backgroundColor: "transparent", textColor: 'white' } }} >
                <Tab label="Images" sx={{ borderRadius: '333px', ...styleImages }} />
                <Tab label="GIFs" sx={{ borderRadius: '333px', ...styleGifs, }} />
                <Tab label="Videos" sx={{ borderRadius: '333px', ...styleVideos, }} />
            </Tabs>
            <Box mt={2} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#1F1F1F', borderRadius: '20px' }}>
                {
                    value === 0 && images.length === 0
                    ?
                    <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Box mb={3} component={'img'} src={NoContent}></Box>
                        <Typography sx={{ color: '#6E6E6E', fontSize: '14px' }}>No media yet</Typography>
                    </Box>
                    :
                    value === 0 && images.length !== 0
                    ?
                    <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        
                    </Box>
                    :
                    null

                }

                {
                    value === 1 && gif.length === 0
                    ?
                    <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Box mb={3} component={'img'} src={NoContent}></Box>
                        <Typography sx={{ color: '#6E6E6E', fontSize: '14px' }}>No media yet</Typography>
                    </Box>
                    :
                    value === 1 && gif.length !== 0
                    ?
                    <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        
                    </Box>
                    :null

                }

                {
                    value === 2 && videos.length === 0
                    ?
                    <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Box mb={3} component={'img'} src={NoContent}></Box>
                        <Typography sx={{ color: '#6E6E6E', fontSize: '14px' }}>No media yet</Typography>
                    </Box>
                    :
                    value === 2 && videos.length !== 0
                    ?
                    <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        
                    </Box>
                    :
                    null

                }
            </Box>
        </Box>
    )
}

export default GalleryTabsandContent