import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

const CreditsTable = () => {
    return (
        <TableContainer sx={{border:'2.5px solid #272727', borderRadius:'15px'}} >
            <Table sx={{ minWidth: '700px' }}>
                <TableBody>
                    <TableRow >
                        <TableCell sx={{ minWidth: '125px', border:'2.5px solid #272727' }}></TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727'  }}>Pricing</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Photo</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Video</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>GIF</TableCell>
                    </TableRow>


                    <TableRow sx={{height:'75px'}} >
                        <TableCell rowSpan={2} align='center' sx={{ minWidth: '125px', color:'white', border:'2.5px solid #272727' }}>Premium users</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727'  }}>Upload</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>5 credits</TableCell>
                    </TableRow>
                    <TableRow sx={{height:'75px'}}>
                        {/* <TableCell rowSpan={2} sx={{ minWidth: '125px' }}>Premium users</TableCell> */}
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727'  }}>Upload</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>5 credits</TableCell>
                    </TableRow>


                    <TableRow sx={{height:'75px'}} >
                        <TableCell rowSpan={2} align='center' sx={{ minWidth: '125px', color:'white', borderBottom:'none', border:'2.5px solid #272727' }}>Non Premium users</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #27272'}}>Upload</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>5 credits</TableCell>
                    </TableRow>
                    <TableRow sx={{height:'75px','&:last-child td, &:last-child th': { borderBottom: 0 }}}>
                        {/* <TableCell rowSpan={2} sx={{ minWidth: '125px' }}>Premium users</TableCell> */}
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727'  }}>Upload</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>Free</TableCell>
                        <TableCell align='center' sx={{ minWidth: '125px',color:'white', border:'2.5px solid #272727' }}>5 credits</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CreditsTable