import {  Drawer, Box, Typography } from '@mui/material'
import React from 'react'


function MenuDrawer({open, toggleDrawer}) {
    // const [open, setopen] = useState(false)
    // const toggleDrawer = ( bool) => {
    //     setopen(bool)
    // }

    return (
        <Box>
                        <Drawer
                            anchor={'right'} // FROM WHERE DO YOU WANT DRAWER TO ORIGINATE E.G LEFT RIGHT TOP BOTTM
                            open={open}
                            onClose={() => toggleDrawer(false)}
                            
                        >
                        {/* // INSIDE DRAWER COMPONENT PLACE ALL THE JSX YOU WANT TO SHOW IN DRAWER  */}
                            <Box  sx={{width:'300px', backgroundColor:'#1E1E1E', height:'100%',color:'white'}}> 
                                <Box mb={2} onClick={() => toggleDrawer(false)} sx={{color:'white'}}>
                                    close
                                </Box>
                                <Box pl={4} sx={{height:'60px', backgroundColor:'#2A2A2C',borderBottom:'1px solid white', display:'flex', alignItems:'center', '&:hover':{backgroundColor:'#323235'}}}>
                                    <Typography fontSize={17} fontWeight={550}>Pricing</Typography>
                                </Box>
                                <Box   sx={{height:'50px', borderBottom:'1px solid white'}}>
                                    Pricing
                                </Box>
                                <Box  sx={{height:'50px', borderBottom:'1px solid white'}}>
                                    Pricing
                                </Box>

                                {/* {
                                    ['OKR','OKR','OKR','OKR',].map(okr => <Box>{okr}</Box>)                               
                                } */}
                            </Box>
                        </Drawer>

        </Box>
    )
}

export default MenuDrawer