import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'

const TabsandContent = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styleTerms ={
    color: value === 0 ?'white':'#6E6E6E',
    backgroundColor:value === 0 ?'#2B2B2B':'black',
  }

  const stylePrivacy ={
    color: value === 1?'white':'#6E6E6E',
    backgroundColor:value === 1 ?'#2B2B2B':'black',
  }

  return (
    <Box >
      <Tabs value={value} onChange={handleChange} textColor='warning' TabIndicatorProps={{style: {backgroundColor: "transparent",textColor:'white'} }} >
        <Tab label="Terms of service" sx={{ borderRadius:'333px', ...styleTerms }} />
        <Tab label="Privacy policy" sx={{ borderRadius:'333px', ...stylePrivacy, }} />
      </Tabs>
      <Box mt={2} sx={{ height: 'fit-content', width: '100%', backgroundColor: '#1F1F1F', borderRadius: '20px' }}>
        {
          value === 0
          &&
          <Box p={4} pb={10} sx={{color:'white'}}>
          <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>
            Terms of service 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>

        </Box>

      }

      {
          value === 1
          &&
          <Box p={4} pb={10} sx={{color:'white'}}>
          <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>
            Privacy policy 
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>

          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop:'30px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus rutrum, malesuada risus vel, gravida orci. Sed lacinia aliquam dolor, non sodales. <br /> est faucibus vel. Praesent arcu tortor, porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, <br /> sit amet tempus sapien dictum. Phasellus dictum purus non nulla volutpat feugiat. Mauris velit enim, posuere sit amet suscipit molestie, sollicitudin vitae mauris. Sed vehicula lacus vel venenatis lobortis. Vestibulum sollicitudin justo gravida rhoncus posuere. Curabitur fringilla ligula nibh, eu pulvinar nulla volutpat non. Vestibulum at nisi pulvinar purus ultricies vestibulum ut fringilla ligula. Maecenas quis porta tortor, ut malesuada sem. Proin quis neque magna. Ut suscipit blandit ipsum vel porttitor <br /> porta quis lorem et, dapibus dapibus neque. Phasellus dapibus a ex in varius. Proin aliquam erat id lacus aliquet, sit amet tempus sapien dictum. Phasellus dictum p
          </Typography>

        </Box>

      }
      </Box>
    </Box>
  )
}

export default TabsandContent