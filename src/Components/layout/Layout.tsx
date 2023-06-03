import { Container, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import { Footer } from './Footer'
import { ResponsiveAppBar } from './NavBar'
import { WhatsAppB } from './WhatsApp'

interface Props {
  children: any
}

export const Layout = (props: Props) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#171717',
    backgroundSize: 'cover',
    '@media screen and (max-width:355px)': {
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
    }
  }}>
    <ResponsiveAppBar/>
    <CssBaseline />
    <Container maxWidth='xl'
      sx={{
        display: 'flex',
        flexGrow: 1,
        overflowY: 'visible'
      }}>
      <Box
        component={'main'}
        sx={{
          marginTop: '10rem',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          minHeight: '100vh',
          '@media screen and (max-width: 600px)': {
            marginTop: '6rem',
          }
        }}
      >
        {props.children}
      </Box>
    </Container>
    <Container>
    <Footer />
    </Container>
    <WhatsAppB/>
  </Box>
)