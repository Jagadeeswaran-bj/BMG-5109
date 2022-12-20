import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';




function Clip({ url }) {
  return (
    <video key={url} controls width = "100%">
      <source src={url} type="video/mp4"/>
    </video>
  );
}
function PricingContent() {
  return (
         
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
      <CssBaseline />
      <div 
        style={{  
          backgroundImage: "url(" + require("./bg_ehospital.jpg") + ")",
           backgroundColor: 'rgba(255,255,255,0.5)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'

        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}    >
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            
          </Typography>
          <nav  >
           
          </nav>
          <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          
        </Toolbar>
     
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}   >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Training Videos
        </Typography>
        <h2>1. Robotic Arm-Assisted Arthroplasty</h2> <Clip url='videos/video1.mp4'></Clip>
        <h2>2. Design of Gallstone Surgical Instrument</h2> <Clip url='videos/video2.mp4'></Clip>

      
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 20,
          py: [3, 6],
        }}
      >
       
      </Container>
      </div>
    </React.Fragment>
    
  );
}

export default function Pricing() {
  return <PricingContent />;
}