import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text,navigateTo, style}) => {
    const navigate = useNavigate()
  return (
    <Button onClick={() => navigate(navigateTo)} variant='contained' disableElevation sx={{backgroundColor:'#FFD600', height:'45px',borderRadius:'12px', '&:hover':{backgroundColor:'#FFD600'}, ...style}}>{text}</Button>           
  )
}

export default CustomButton