import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Container } from '@mui/material'
import {
  Instagram, LocationOn, Schedule, WhatsApp
} from '@mui/icons-material'
import Logo from '../../assets/images/3dpng.png'

export const Footer = () => (
  <Container sx={{
    backgroundColor: '#2a2a2a',
  }}>
  <Box sx={{
    flexGrow: 1,
    width: '100%',
    position: 'absolute',
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  }}>
    <Grid container spacing={3} sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '1300px',
      margin: '0 auto',
      '@media screen and (max-width:1300px)': {
        width: '100%',
      },
      '@media screen and (max-width:1000px)': {
        display: 'flex',
        flexDirection: 'column',
        alignBoxs: 'center',
        justifyContent: 'center',
        width: '100%',
      },
    }}>
      <Grid xs sx={{
        display: 'flex',
        alignBoxs: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          alignBoxs: 'center',
          justifyContent: 'center',
        }}>
          <img src={Logo} width={300} alt='Logo'/>
        </Box>
      </Grid>
      <Grid xs sx={{}}>
        <Box sx={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h3>CONTACTO</h3>
          <Box sx={{
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <LocationOn />
              <h5>
                Villa Gobernador Galvez
              </h5>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <WhatsApp />
              <h5>
                +54 9 3412152970
              </h5>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Schedule />
              <h5>
                Lun a Vie de 9 a 15 hs
              </h5>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs>
        <Box sx={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignBoxs: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem',
          color: '#fff',
          boxShadow: 'none',
        }}>
          <h3>REDES SOCIALES</h3>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            gap: '1.2rem',
          }}>
            <div>
              <a href='https://www.instagram.com/3directimpresiones/'>
                <Instagram sx={{
                  color: '#fff',
                }}/>
              </a>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <Box>
    <hr />
    <Typography variant='body2' sx={{ color: '#fff', textAlign: 'center', marginBottom: '1rem'}}>
      Developed by Roberto Orazi
    </Typography>
    </Box>
  </Box >
  </Container>
)