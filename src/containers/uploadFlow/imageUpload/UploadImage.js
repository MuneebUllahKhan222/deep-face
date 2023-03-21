import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../../../components/general/Footer'
import Header from '../../../components/general/Header'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../uploadFlow.css';
import ImageUploading from 'react-images-uploading';

const UploadImage = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <Box sx={{ height: '120vh',display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <Header />
      </Box>


      <Paper elevation={5} sx={{ display: 'flex', boxShadow:'5px 7px 9px 7px rgba(255, 214, 0, .2);',flexDirection: 'column', justifyContent: 'space-around', height: '500px', width: '95%', padding: '30px 20px 90px 20px', rowGap:'30px', alignItems:'center' }} >
        {/* Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>
          <Box sx={{ width: '42%' }}></Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '58%', alignItems: 'center' }}>
            <Box sx={{ color: '#1A1A1A', fontSize: '40px', fontWeight: '600' }}>
              Image Swap
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px', width: 'fit-content' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: '700', background: 'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)', '-webkit-background-clip': 'text', ' -webkit-text-fill-color': 'transparent', }}>Try these</Typography>
              <Box sx={{ borderRadius: '60px', width: '60px', height: '60px', background: 'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <PlayArrowIcon sx={{ fontSize: '30px' }} />
              </Box>
              <Box sx={{ borderRadius: '60px', width: '60px', height: '60px', background: 'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '20px', fontWeight: '600' }}>
                GIF
              </Box>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={5.5}>
            <Box sx={{display:'flex', flexDirection:'column', rowGap:'20px'}}>
            <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Box pt={2} pb={2} onClick={onImageUpload} {...dragProps} sx={{height:'200px', width:'100%', backgroundColor:'#F2F2F2', borderRadius:'15px',display:'flex', justifyContent:'center', alignItems:'center' }}>
              { imageList.length === 0 
              &&
                <Box sx={{display:'flex', alignItems:'center', columnGap:'10px'}}>
                <Box sx={{width:'60px', height:'60px', borderRadius:'60px', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>+</Box>
                <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                <Box sx={{width:'78px', height:'38px',  display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                    Step 1
                </Box>
                <Typography fontSize={20} ><strong>Click</strong>  or <strong>Drag</strong></Typography>
                <Typography fontSize={20}>To upload a <strong>base image</strong></Typography>
                <Typography fontSize={13}><strong>File requirement</strong></Typography>
                <Box sx={{display:'flex', columnGap:'20px'}}>
                  <Typography fontSize={13}>1 pc max count</Typography>
                  <Typography fontSize={13}>5mb image size</Typography>
                </Box>
              </Box>
              </Box>
              }
            </Box>
        )}
        </ImageUploading>


        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Box pt={2} pb={2} onClick={onImageUpload} {...dragProps} sx={{height:'200px', width:'100%', backgroundColor:'#F2F2F2', borderRadius:'15px',display:'flex', justifyContent:'center', alignItems:'center' }}>
              { imageList.length === 0 
              &&
                <Box sx={{display:'flex', alignItems:'center', columnGap:'10px'}}>
                <Box sx={{width:'60px', height:'60px', borderRadius:'60px', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>+</Box>
                <Box sx={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                <Box sx={{width:'78px', height:'38px',  display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                    Step 2
                </Box>
                <Typography fontSize={20} ><strong>Click</strong>  or <strong>Drag</strong></Typography>
                <Typography fontSize={20}>To upload a <strong>input image</strong></Typography>
                <Typography fontSize={13}><strong>File requirement</strong></Typography>
                <Box sx={{display:'flex', columnGap:'20px'}}>
                  <Typography fontSize={13}>1 pc max count</Typography>
                  <Typography fontSize={13}>5mb image size</Typography>
                </Box>
              </Box>
              </Box>
              }
            </Box>
        )}
        </ImageUploading>

            </Box>
          </Grid>
          <Grid item xs={5.5}>
            <Box sx={{height:'420px', width:'100%', backgroundColor:'#F2F2F2', borderRadius:'25px',border:'3px dashed #FFD600' }}>

            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box mb={7} sx={{width:'60%'}}>
        <Footer colorScheme={'light'} />
      </Box>

    </Box>
  )
}

export default UploadImage