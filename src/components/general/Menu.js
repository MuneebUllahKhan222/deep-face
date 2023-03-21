import {  Drawer, Box } from '@mui/material'
import React from 'react'


function Menu({open, toggleDrawer}) {
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
                            <Box  sx={{width:'300px', backgroundColor:'black', height:'100%',color:'white'}}> 
                                <Box onClick={() => toggleDrawer(false)} sx={{color:'white'}}>
                                    close
                                </Box>
                                <Box  sx={{height:'50px', borderBottom:'1px solid white'}}>
                                    Pricing
                                </Box>
                                <Box  sx={{height:'50px', borderBottom:'1px solid white'}}>
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

export default Menu