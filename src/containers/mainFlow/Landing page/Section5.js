import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import work1 from '../../../assets/images/work-1.png'
import work2 from '../../../assets/images/work-2.png'
import work3 from '../../../assets/images/work-3.png'
// import workArrow from '../../../assets/images/work-arrow.png'


const Section5 = () => {
  return (
    <Box sx={{height:'60vh', paddingTop:'40px',backgroundColor:'black', '@media(max-width:800px)':{ height:'fit-content',padding:'60px 40px 60px 40px'} }}>
        <Box  sx={{height:'80%', color:'#1F1F1F', '@media(max-width:800px)':{height:'fit-content'},}}>
            <Box p={2} sx={{height:'20%', display:'flex', flexDirection:'column',justifyContent:'center'}}>
                <Typography fontSize={40} fontWeight={600} sx={{margin:'0 auto 0 auto', color:'white', textAlign:'center'}}>How It <Typography component={'span'} sx={{fontSize:'40px',fontWeight:'700',background:'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)','-webkit-background-clip':'text',' -webkit-text-fill-color':'transparent',}}>Works</Typography></Typography>
                <Typography fontSize={15} fontWeight={700}  sx={{margin:'0 auto 0 auto', color:'#555555'}}>Let your <Typography component={'span'} sx={{fontSize:'15px',fontWeight:'700',background:'linear-gradient(90deg, #0E33BE 30%, #14C483 25%, #FDE235 50%, #FF5757 100%)','-webkit-background-clip':'text',' -webkit-text-fill-color':'transparent',}}>imagination be your guide</Typography></Typography>
            </Box>
            <Box sx={{height:'80%', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', columnGap:'10px', rowGap:'10px' }}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', '@media(max-width:800px)':{margin:'40px 0px'}}}>
                    <img src={work1} alt={'work1'} height={'100px'} width={'100px'} />
                    <Typography fontSize={35} fontWeight={700} sx={{margin:'0 auto', background:'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', '-webkit-background-clip':'text',' -webkit-text-fill-color':'transparent'}}>Step 1</Typography>
                    <Typography fontWeight={700} fontSize={15} sx={{margin:'0 auto', color:'white'}}>Upload your hero image</Typography>
                </Box>

                {/* <img src={workArrow} alt={'work1'} height={'60px'} width={'200px'}/> */}

                <Box  sx={{display:'flex', flexDirection:'column', alignItems:'center','@media(max-width:800px)':{ margin:'40px 0px'}}}>
                    <img src={work2} alt={'work2'} height={'100px'} width={'100px'} />
                    <Typography fontSize={35} fontWeight={700} sx={{margin:'0 auto', background:'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', '-webkit-background-clip':'text',' -webkit-text-fill-color':'transparent'}}>Step 2</Typography>
                    <Typography fontWeight={700} fontSize={15} sx={{margin:'0 auto', color:'white'}}>Upload your base image/Video/GIF</Typography>
                </Box>

                {/* <img src={workArrow} alt={'work1'} height={'60px'} width={'200px'}/> */}


                <Box  sx={{display:'flex', flexDirection:'column', alignItems:'center', '@media(max-width:800px)':{ margin:'40px 0px'}}}>
                    <img src={work3} alt={'work3'} height={'100px'} width={'100px'} />
                    <Typography fontSize={35} fontWeight={700} sx={{margin:'0 auto', background:'linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)', '-webkit-background-clip':'text',' -webkit-text-fill-color':'transparent'}}>Step 3</Typography>
                    <Typography fontWeight={700} fontSize={15} sx={{margin:'0 auto', color:'white'}}>Wait for the AI magic</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Section5