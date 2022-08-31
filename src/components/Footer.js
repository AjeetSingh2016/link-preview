import React from 'react'
import {Box, Typography} from '@mui/material';

const Footer = () => {
  return (
   <Box sx={{
       height: '5vh',
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
       display: 'flex',
       position: 'absolute',
       bottom: '0',
       bgcolor:"#00112B",
   }}>
       <Typography paddingBottom= '10px' color="#ffff">
           Made by Ajeet 🚀
       </Typography>
   </Box>
  )
}

export default Footer