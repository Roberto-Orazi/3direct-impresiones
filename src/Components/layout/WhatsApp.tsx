import * as React from 'react'
import { WhatsApp } from '@mui/icons-material'

export const WhatsAppB = () => (
  <a href='wa.link/ac1lqt'
    target="_blank"
    rel="noopener noreferrer">
    <WhatsApp sx={{
      color: '#fff',
      fontSize: '4rem',
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 1000,
      backgroundColor: '#ff1744',
      borderRadius: '50%',
      padding: '1rem',
      boxShadow: '0 0 10px rgba(0,0,0,.3)',
      transition: 'all .3s ease',
      '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: '#333bc5',
        boxShadow: '0 0 10px rgba(0,0,0,.6)',
      }
    }} />
  </a>
)