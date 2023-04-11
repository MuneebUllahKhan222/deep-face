import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import React, { useRef, useState } from 'react'
import NoContent from '../../../assets/images/GalleryNoContent.png'
import DownloadIcon from '@mui/icons-material/Download';

const GalleryTabsandContent = ({ images, gifs, videos }) => {
    const [value, setValue] = useState(0)
    const imgRef = useRef()
    const gifRef = useRef()
    const videoRef = useRef()

    // const [images, setimages] = useState([]);
    // const [gif, setgif] = useState([]);
    // const [videos, setvideos] = useState([]);

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

    const matches1200w = useMediaQuery('(min-width: 700px) and (max-width: 1200px)')
    const matches800w = useMediaQuery('(min-width: 500px) and (max-width: 700px)')
    const matches500w = useMediaQuery('(max-width:500px)')

    const downloadContent = (type) => {
        if (type === 'image') {
            const link = document.createElement('a');
            link.href = imgRef.current.src;
            link.download = 'result.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (type === 'gif') {
            const link = document.createElement('a');
            link.href = gifRef.current.src;
            link.download = 'result.gif';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            const link = document.createElement('a');
            link.href = videoRef.current.src;
            link.download = 'result.mp4';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
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
                    value === 0 && images?.length === 0
                        ?
                        <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                            <Box mb={3} component={'img'} src={NoContent}></Box>
                            <Typography sx={{ color: '#6E6E6E', fontSize: '14px' }}>No media yet</Typography>
                        </Box>
                        :
                        value === 0 && images?.length !== 0
                            ?
                            <Box p={4} pt={8} pb={8} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                <ImageList sx={{ height: 'fit-content', width: '80%', backgroundColor: 'black', borderRadius: '20px', '@media(max-width:600px)': { width: '100%' } }} cols={matches1200w ? 3 : matches800w ? 2 : matches500w ? 2 : 5} rowHeight={300} variant='masonary'>
                                    {
                                        images?.map(img => (
                                            <ImageListItem key={img?._id}>
                                                {/* <Box component={'img'} src={img?.url} /> */}
                                                <img
                                                    ref={imgRef}
                                                    // src={`${img?.url}?w=164&h=164&fit=crop&auto=format`}
                                                    // srcSet={`${img?.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                    // src={`${img?.url}?w=248&fit=crop&auto=format`}
                                                    // srcSet={`${img?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    src={img?.url}
                                                    alt={'save images'}
                                                    loading="lazy"
                                                />

                                                <ImageListItemBar
                                                    position='top'
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'white' }}
                                                            onClick={() => downloadContent('image')}

                                                        >
                                                            <DownloadIcon />
                                                        </IconButton>
                                                    }
                                                    actionPosition="left"
                                                />
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>
                            </Box>
                            :
                            null

                }

                {
                    value === 1 && gifs?.length === 0
                        ?
                        <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                            <Box mb={3} component={'img'} src={NoContent}></Box>
                            <Typography sx={{ color: '#6E6E6E', fontSize: '14px' }}>No media yet</Typography>
                        </Box>
                        :
                        value === 1 && gifs?.length !== 0
                            ?
                            <Box p={4} pt={8} pb={8} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                <ImageList sx={{ height: 'fit-content', width: '80%', backgroundColor: 'black', borderRadius: '20px', '@media(max-width:600px)': { width: '100%' } }} cols={matches1200w ? 3 : matches800w ? 2 : matches500w ? 2 : 5} rowHeight={300} variant='masonary'>
                                    {
                                        gifs?.map(gif => (
                                            <ImageListItem key={gif?._id}>
                                                <img
                                                    ref={gifRef}
                                                    src={gif?.url}
                                                    alt={'saved gif'}
                                                    loading="lazy"
                                                />

                                                <ImageListItemBar
                                                    position='top'
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'white' }}
                                                            onClick={() => downloadContent('gif')}

                                                        >
                                                            <DownloadIcon />
                                                        </IconButton>
                                                    }
                                                    actionPosition="left"
                                                />
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>
                            </Box>
                            : null

                }

                {
                    value === 2 && videos?.length === 0
                        ?
                        <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                            <Box mb={3} component={'img'} src={NoContent}></Box>
                            <Typography sx={{ color: '#6E6E6E', fontSize: '14px' }}>No media yet</Typography>
                        </Box>
                        :
                        value === 2 && videos?.length !== 0
                            ?
                            <Box p={4} pb={10} sx={{ color: 'white', backgroundColor: '#1F1F1F', borderRadius: '20px', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <ImageList sx={{ height: 'fit-content', width: '80%', backgroundColor: 'black', borderRadius: '20px', '@media(max-width:600px)': { width: '100%' } }} cols={matches1200w ? 3 : matches800w ? 2 : matches500w ? 2 : 5} rowHeight={300} variant='masonary'>
                                    {
                                        videos?.map(video => (
                                            <ImageListItem key={video?._id}>
                                            <video
                                            width="100%"
                                            autoPlay={true}
                                            loop={true}
                                            // controls={true}
                                            >
                                            <source src={video?.url} ref={videoRef} type="video/mp4" />
                                            </video>

                                                <ImageListItemBar
                                                    position='top'
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'white' }}
                                                            onClick={() => downloadContent('video')}

                                                        >
                                                            <DownloadIcon />
                                                        </IconButton>
                                                    }
                                                    actionPosition="left"
                                                />
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>

                            </Box>
                            :
                            null

                }
            </Box>
        </Box>
    )
}

export default GalleryTabsandContent