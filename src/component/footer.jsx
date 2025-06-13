import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
;

const Footer = () => (
  <Box  mt="80px" bgcolor="#FFF3F4" sx={{display:"flex" ,flexDirection:"column"}} width="100%">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px " mb="50px">
      <img src="../public/gym.svg" alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <table style={{alignSelf:"center"} }>
        <tr>
            <th>Utils</th>
            <th>Information</th>
            <th>Follow Us</th>
        </tr>
        <tr>
            <td>activities</td>
            <td>reclamation</td>
            <td>Facebook</td>
        </tr>
        <tr>
            <td>planning</td>
            <td>general conditions</td>
            <td>Instagram</td>
        </tr>
        <tr>
            <td>club</td>
            <td>about US</td>
            <td>twitter</td>
        </tr>
    </table>
  </Box>
);

export default Footer;