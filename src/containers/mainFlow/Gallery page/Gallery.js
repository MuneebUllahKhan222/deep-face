import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/general/Header'
import GalleryTabsandContent from './GalleryTabsandContent'
import { useDispatch } from 'react-redux'
import { fetchContent } from '../../../store/services/user'
import { getCookies } from '../../../utils'
import { useCallback } from 'react'
import { setUnsubcribeModalOpen } from '../../../store/reducers/user'

const Gallery = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState();
    const [gifs, setGifs] = useState();
    const [videos, setVideos] = useState();
    const user = getCookies('user')


    const fetchData =  useCallback(async () => {
        const info = {
            uid: user?._id,
            type: 'all'
        }
        const data = await dispatch(fetchContent(info))
        // setContent(data)
        const imageUrls = data?.data.filter(d => d.type === 'image' && d.url)
        const gifUrls = data?.data.filter(d => d.type === 'gif')
        const videoUrls = data?.data.filter(d => d.type === 'video')
        setImages(imageUrls)
        setGifs(gifUrls)
        setVideos(videoUrls)
    }, [user?._id, dispatch])

    useEffect(() => {
        fetchData();
    }, [fetchData])


    return (
        <Box pb={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'black', height: 'fit-content', color: 'white' }}>
            <Header />
            <Box p={5} pl={{ md: 13, xs: 5 }} pr={{ md: 13, xs: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 600, marginBottom: '40px', fontFamily: 'Raleway' }}>
                        My Locker
                    </Typography>
                    {
                        user?.showLocker
                        &&

                    <Button onClick={() => dispatch(setUnsubcribeModalOpen())} sx={{backgroundColor:'#FFD600', color:'white', fontWeight:600, height:'50px', borderRadius:'50px', padding:'0px 20px 0px 20px'}}>Unsubscribe</Button>
                    }
                </Box>


                <GalleryTabsandContent images={images} gifs={gifs} videos={videos} />
            </Box>

        </Box>
    )
}

export default Gallery