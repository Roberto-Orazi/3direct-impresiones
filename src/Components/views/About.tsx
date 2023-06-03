import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Trimaker from '../../assets/images/nebula.png'
import { Box, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h2' sx={{color: '#fff'}}>Nuestras Maquinas</Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item><img src={Trimaker} alt='trimaker'/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img src={Trimaker} alt='trimaker'/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><img src={Trimaker} alt='trimaker'/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><img src={Trimaker} alt='trimaker'/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img src={Trimaker} alt='trimaker'/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img src={Trimaker} alt='trimaker'/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}