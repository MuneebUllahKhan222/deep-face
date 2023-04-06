import { Box, Button, Grid, LinearProgress, Paper, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/general/Footer'
import Header from '../../../components/general/Header'
import '../uploadFlow.css';
// import test from '../../../assets/images/imageUpload-test.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { DownloadForOffline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getCookies } from '../../../utils';
import Dropzone from 'react-dropzone'
import { useDispatch } from 'react-redux';
import { createDoc, getImage, saveContent, videoUploader } from '../../../store/services/user';
import ImageUploading from 'react-images-uploading';
import { useSnackbar } from 'notistack';
import { setModalOpen, setPricingModalOpen } from '../../../store/reducers/user';



const UploadVideo = () => {
  // const [images, setImages] = useState([]);
  const [inputImage, setInputImage] = useState([]);
  const [baseVideo, setbaseVideo] = useState([]);
  const [apiCalled, setApiCalled] = useState(0);
  const [blobBase, setBlobBase] = useState();
  const [blobInput, setBlobInput] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disableButton, setDisableButton] = useState(true);
  const user = getCookies('user')
  const { enqueueSnackbar } = useSnackbar();
  const matches900pxw = useMediaQuery('(max-width:900px)')

  const onChangeInputImage = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setInputImage(imageList);
    fetch(imageList[0]['data_url'])
      .then(async (res) => {
        setBlobInput(await res.blob())
      })

  };
  console.log(user, 'user')

  useEffect(() => {
    if (inputImage.length > 0 && baseVideo.length > 0) {
      setDisableButton(false)
    }
  }, [inputImage, baseVideo])

  const checkAuth = () => {
    const userCheck = getCookies('user');
    if (userCheck){
      createDocument()
    } else {
      dispatch(setPricingModalOpen())
    }
    // dispatch(setModalOpen())
  }
  const createDocument = async () => {
      setApiCalled(1)
    const token = await dispatch(createDoc(user?._id))
    if (!token) {
      enqueueSnackbar('Something went wrong', { variant: 'error', autoHideDuration: 3000 })
      setApiCalled(0)
      return
    }
    
    const data = await dispatch(videoUploader(blobInput, blobBase, token))
    console.log(data, 'data of image uploader')
    const { result } = await dispatch(getImage(token))
    setResult(result)
    setApiCalled(2)
    return data
    
    
  }

  const downloadContent= (event) => {
    event.preventDefault();
    console.log('clicked')
    const link = document.createElement('a');
    link.href = result;
    link.download = 'result.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const saveVideo = async() => {
    const data = {url:result, uid:user?._id, type:'video'}
    const save = await dispatch(saveContent(data))
    console.log(save, 'res of save')
    if (save?.status === 201) {
      enqueueSnackbar("Video saved successfully", { variant: 'success', autoHideDuration: 3000 })
    }else if (save?.status === 300) {
      enqueueSnackbar('Video already saved', { variant: 'warning', autoHideDuration: 3000 })
    }
     else {
      enqueueSnackbar('Something went wrong', { variant: 'error', autoHideDuration: 3000 })
    }
  
  }

  return (
    <Box sx={{ height: 'fit-content', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <Header colorScheme={'light'} />
      </Box>


      <Paper elevation={5} sx={{ height: 'fit-content', display: 'flex', boxShadow: '5px 7px 9px 7px rgba(255, 214, 0, .2);', flexDirection: 'column', justifyContent: 'space-around', width: '90%', padding: '60px 50px 90px 50px', rowGap: '30px', alignItems: 'center', marginTop: '20px', '@media(max-width:900px)': { width: '80%' }, '@media(max-width:600px)': { width: '70%' } }} >
        {/* Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {!matches900pxw && <Box sx={{ width: '42%' }}></Box>}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '58%', alignItems: 'center', '@media(max-width:900px)': { flexDirection: 'column', alignItems: 'center', rowGap: '30px', width: '100%' }, }}>
            <Box sx={{ color: '#1A1A1A', fontSize: '40px', fontWeight: '600', '@media(max-width:900px)': { fontSize: '30px' } }}>
              Video Swap
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px', width: 'fit-content' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: '700', background: 'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)', '-webkit-background-clip': 'text', ' -webkit-text-fill-color': 'transparent', }}>Try these</Typography>
              <Box onClick={() => navigate('/gifSwap/upload')} sx={{ borderRadius: '60px', width: '60px', height: '60px', background: 'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '20px', fontWeight: '600', cursor: 'pointer' }}>
                {/* <PlayArrowIcon sx={{ fontSize: '30px' }} /> */}
                GIF
              </Box>
              <Box onClick={() => navigate('/imageSwap/upload')} sx={{ cursor: 'pointer', borderRadius: '60px', width: '60px', height: '60px', background: 'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '20px', fontWeight: '600' }}>
                IMG
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box></Box> */}
        <Grid container spacing={2} sx={{ justifyContent: 'space-between', '@media(max-width:900px)': { flexDirection: 'column', justifyContent: 'space-between', } }} >
          <Grid item md={5.8} xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px', width: '100%' }}>
              {baseVideo.length === 0
                ?
                <Dropzone maxFiles={1} maxSize={10000000} accept={{ "video/*": [".mp4"] }}
                  onDrop={(acceptedFiles, fileRejections) => {
                  
                    fileRejections.forEach((file) => {
                      file.errors.forEach((err) => {
                        if (err.code === "file-too-large") {
                          setError(`Error: ${err.message}`);
                        }

                        if (err.code === "file-invalid-type") {
                          setError(`Error: ${err.message}`);
                        }
                      })
                    })
                    setbaseVideo(URL.createObjectURL(...acceptedFiles))
                    fetch(URL.createObjectURL(...acceptedFiles))
                      .then(async (res) => {
                        setBlobBase(await res.blob())
                      })
                  }}
                  
                  >
                  {({ getRootProps, getInputProps }) => (
                    <section style={{ height: '100%' }}>
                      <Box sx={{ width: '100%', cursor: 'pointer' }} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Box pt={3} pb={3} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#F2F2F2', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', '@media(max-width:500px)': { paddingLeft: '20px' } }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px', '@media(max-width:500px)': { flexDirection: 'column', rowGap: '10px' } }}>
                            <Box sx={{ width: '60px', height: '60px', borderRadius: '60px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Typography sx={{ fontSize: '40px', fontWeight: '700', background: 'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)', '-webkit-background-clip': 'text', ' -webkit-text-fill-color': 'transparent', }}>
                                +
                              </Typography></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                              <Box sx={{ width: '78px', height: '38px', fontSize: '15px', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                Step 1
                              </Box>
                              <Typography sx={{ fontSize: { sm: '20px', xs: '17px' }, fontWeight: '700' }} ><strong>Click</strong>  or <strong>Drag</strong></Typography>
                              <Typography fontSize={20}>To upload a <strong>base video</strong></Typography><Typography fontSize={13}><strong>File requirement</strong></Typography>
                              <Box sx={{ display: 'flex', columnGap: '20px' }}>
                                <Typography fontSize={13}>1 Video max count</Typography>
                                <Typography fontSize={13}>10mb Video size</Typography>
                              </Box>
                              {error && <Typography fontSize={13} sx={{ color: 'red' }}>{error}</Typography>}
                            </Box>
                          </Box>
                        </Box>

                      </Box>
                    </section>
                  )}
                </Dropzone>
                :
                <Box  pt={2} pb={2} sx={{ height: '200px', width: '100%', backgroundColor: '#F2F2F2', borderRadius: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: '20px' }}>
                  {/* <Box ml={3} component={'video'}  sx={{ height: '95%', width: '35%' }}><source src={baseVideo} width='100%' height='100%' /></Box> */}
                  <video
                    // onTimeUpdate={handleProgress}
                    // ref={videoRef}
                    width="35%"
                    height="95%"
                    style={{marginLeft:'23px'}}
                    autoPlay={true}
                    loop={true}
                  // controls={true}
                  >
                    <source src={baseVideo} type="video/mp4" />
                  </video>
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: '60%', justifyContent: 'space-between' }}>
                    <Typography fontSize={15} fontWeight={600}>Base Video <Typography component='span' fontSize={15} fontWeight={800} sx={{ color: '#FFD600' }}>UPLOADED</Typography> </Typography>
                    <Box sx={{ width: '100px', height: '38px', fontSize: '15px', fontWeight: 600, display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white' }}>
                      Step 1
                      <CheckCircleIcon sx={{ color: '#FFD600' }} />
                    </Box>
                  </Box>
                </Box>
              }


              <ImageUploading
                multiple
                value={inputImage}
                onChange={onChangeInputImage}
                maxNumber={1}
                width={'100%'}
                dataURLKey="data_url"
                acceptType={['jpg', 'png', 'jpeg', 'svg', 'avi']}
                maxFileSize={'5300000'}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                  errors
                }) => (
                  <Box sx={{ width: '100%', cursor: 'pointer', }} onClick={inputImage.length === 0 ? (onImageUpload) : null} {...dragProps} >
                    {inputImage.length === 0
                      ?
                      <Box pt={3} pb={3} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#F2F2F2', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', '@media(max-width:500px)': { paddingLeft: '20px' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px', '@media(max-width:500px)': { flexDirection: 'column', rowGap: '10px' } }}>
                          <Box sx={{ width: '60px', height: '60px', borderRadius: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 700, fontSize: '40px', background: 'linear-gradient(130deg, #0E33BE 20%, #14C483 30%, #FDE235 50%, #FF5757 100%)' }}>+</Box>
                          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                            <Box sx={{ width: '78px', height: '38px', fontSize: '15px', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                              Step 2
                            </Box>
                            <Typography fontSize={20} ><strong>Click</strong>  or <strong>Drag</strong></Typography>
                            <Typography fontSize={20}>To upload an <strong>input image</strong></Typography>
                            <Typography fontSize={13}><strong>File requirement</strong></Typography>
                            <Box sx={{ display: 'flex', columnGap: '20px' }}>
                              <Typography fontSize={13}>1 pc max count</Typography>
                              <Typography fontSize={13}>5mb image size</Typography>
                            </Box>
                            {errors?.maxFileSize && <Typography fontSize={13} sx={{ color: 'red' }}>Selected image size more than 5 mb</Typography>}
                            {errors?.acceptType && <Typography fontSize={13} sx={{ color: 'red' }}>Your selected file type is not allow</Typography>}
                          </Box>
                        </Box>
                      </Box>
                      :
                      <Box pt={2} pb={2} sx={{ height: '200px', width: '100%', backgroundColor: '#F2F2F2', borderRadius: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: '20px' }}>
                        {/* <img src={inputImage[0]['data_url']} alt='test' height='95%' width='25%' /> */}
                        <Box ml={3} component={'img'} src={inputImage[0]['data_url']} sx={{ height: '95%', width: '35%' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '60%', justifyContent: 'space-between' }}>
                          <Typography fontSize={15} fontWeight={600}>Input Image <Typography component='span' fontSize={15} fontWeight={800} sx={{ color: '#FFD600' }}>UPLOADED</Typography> </Typography>
                          <Box sx={{ width: '100px', height: '38px', fontSize: '15px', fontWeight: 600, display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white' }}>
                            Step 2
                            <CheckCircleIcon sx={{ color: '#FFD600' }} />
                          </Box>
                        </Box>
                      </Box>
                    }
                  </Box>
                )}
              </ImageUploading>


            </Box>
          </Grid>
          <Grid item md={5.8} xs={12} alignItems='center'>
            <Box sx={{ height: '470px', width: '100%', backgroundColor: '#F2F2F2', borderRadius: '25px', border: '3px dashed #FFD600', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', '@media(max-width:600px)': { height: '375px' }, '@media(max-width:500px)': { height: '340px' } }}>
              {
                apiCalled === 0
                  ?
                  <Button disabled={disableButton} onClick={() => checkAuth()} variant='contained' disableElevation sx={{ fontWeight: 600, backgroundColor: '#FFD600', '&:hover': { backgroundColor: '#FFD600' } }} startIcon={<PlayCircleIcon />}>Face Swap</Button>
                  :
                  apiCalled === 1
                    ?
                    <>
                      <LinearProgress variant="determinate" value={90} sx={{ width: '75%', height: '18px', borderRadius: '100px', backgroundColor: '#FFD600', opacity: '1', "& .MuiLinearProgress-barColorPrimary": { backgroundColor: 'orange', borderRadius: '100px', opacity: '' } }} />
                      <Typography fontSize={20} fontWeight={600} sx={{ color: '#FFD600' }}>Processing ...</Typography>
                    </>
                    :
                    <>
                      <Box sx={{ height: '80%', width: '40%', borderRadius: '30px', '@media(max-width:600px)': { width: '60%' } }} >
                        <video
                          // onTimeUpdate={handleProgress}
                          // ref={videoRef}
                          width="100%"
                          height="100%"
                          autoPlay={true}
                          loop={true}
                        // controls={true}
                        >
                          <source src={result} type="video/mp4" />
                        </video>
                        {/* <Box component={'img'} src={result} sx={{ height: '80%', width: '40%', border: '2px solid #FFD600', borderRadius: '30px', '@media(max-width:600px)': { width: '60%' } }} /> */}
                      </Box>
                    </>
              }

            </Box>
          </Grid>
        </Grid>
        {
          apiCalled === 2
          &&
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', columnGap: '20px', '@media(max-width:500px)': { flexDirection: 'column', justifyContent: 'space-between', rowGap: '20px', alignItems: 'center' } }}>
            <Button variant='contained' onClick={() => saveVideo()}  disableElevation disableFocusRipple sx={{ backgroundColor: '#B8B8B8', width: '150px', height: '55px', fontWeight: 600, fontSize: '15px', '&:hover': { backgroundColor: '#B8B8B8' } }}>Save</Button>
            <Button variant='contained' onClick={(e) => downloadContent(e)}  startIcon={<DownloadForOffline />} disableElevation disableFocusRipple sx={{ backgroundColor: '#FFD600', width: '150px', height: '55px', fontWeight: 600, fontSize: '15px', '&:hover': { backgroundColor: '#FFD600' } }}>Download</Button>
          </Box>
        }
      </Paper>

      <Box mb={15} mt={15} sx={{ width: '80%' }}>
        <Footer colorScheme={'light'} />
      </Box>

    </Box>
  )
}

export default UploadVideo