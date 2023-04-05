import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/general/Header'
import GalleryTabsandContent from './GalleryTabsandContent'
import { useDispatch } from 'react-redux'
import { fetchContent } from '../../../store/services/user'
import { getCookies } from '../../../utils'

const Gallery = () => {
    const disaptch = useDispatch();
    const [images, setImages ] = useState();
    const [gifs, setGifs ] = useState();
    const [videos, setVideos ] = useState();
    const user = getCookies('user')
    const fetchData = async () => {
        const info = {
            uid: user?._id,
            type:'all'
        }
        const data = await disaptch(fetchContent(info))
        console.log(data,'data of fetcher ')
        // setContent(data)
        const imageUrls = data?.data.filter(d => d.type === 'image' && d.url)
        const gifUrls = data?.data.filter(d => d.type === 'gif')
        const videoUrls = data?.data.filter(d => d.type === 'video')
        setImages(imageUrls)
        setGifs(gifUrls)
        setVideos(videoUrls)
    }

    useEffect(() => {
        fetchData();
    },[])

    // useEffect(() => {
    //     console.log(images, gifs, videos)
    // },[images])

    return (
        <Box pb={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', height: 'fit-content', color:'white' }}>
            <Header />  
            <Box p={5} pl={{md:13, xs:5}} pr={{md:13, xs:5}}>
                <Typography sx={{fontSize:'22px', fontWeight:600, marginBottom:'40px'}}>
                    My Gallery
                </Typography>

                <GalleryTabsandContent images={images} gifs={gifs} videos={videos} />
            </Box>

        </Box>
    )
}

export default Gallery