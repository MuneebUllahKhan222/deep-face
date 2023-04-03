import { Drawer, Box } from '@mui/material'
import React from 'react'
import SignoutDrawer from './SignoutDrawer'
import LoginDrawer from './LoginDrawer'
import { getCookies } from '../../utils'


function MenuDrawer({ open, toggleDrawer }) {
    const user = getCookies('user');

    return (
        <Box>
            <Drawer
                anchor={'right'} // FROM WHERE DO YOU WANT DRAWER TO ORIGINATE E.G LEFT RIGHT TOP BOTTM
                open={open}
                onClose={() => toggleDrawer(false)}

            >
                {/* // INSIDE DRAWER COMPONENT PLACE ALL THE JSX YOU WANT TO SHOW IN DRAWER  */}

                <Box sx={{ width: '390px', backgroundColor: '#0E0E0E', height: '100%', color: 'white', '@media(max-width:430px)': { width: '300px' }, '@media(max-width:500px)': { width: '330px' } }}>
                    {user
                        ?
                        <LoginDrawer toggleDrawer={toggleDrawer} />
                        :
                        <SignoutDrawer toggleDrawer={toggleDrawer} />
                    }
                </Box>

            </Drawer>

        </Box>
    )
}

export default MenuDrawer