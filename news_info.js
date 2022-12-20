import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "../../Components/Footer";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';



const footers = [
  {
    title: 'TRAINING VIDEOS',
    description: [{name:'Training Videos',pageURL: '/TrainingVideos'}],
  },

  {
    title: 'EHOSPITAL NEWSROOM',
    description: [{name:'EHospital Newsrooms',pageURL: '/'}],
  },

  {
    title: 'EHOSPITAL BLOG',
    description: [{name:'EHospital Blog',pageURL: '/'}],
  },
  {
    title: 'EHOSPITAL YOUTUBE CHANNEL',
    description: [{name:'EHospital YouTube Channel',pageURL: '/'}],
  },
  {
    title: 'REPORT TO THE COMMUNITY',
    description: [{name:'Report to the Community',pageURL: '/'}],
  },
  {
    title: 'FACEBOOK',
    description: [{name:'Facebook',pageURL: '/'}],
  },
  {
    title: 'TWITTER',
    description: [{name:'Twitter',pageURL: '/'}],
  },
  {
    title: 'LINKEDIN',
    description: [{name:'LinkedIn',pageURL: '/'}],
  },
];


function PricingContent() {
    return (
        
  
     
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
        <CssBaseline />
        <div 
          style={{  
            backgroundImage: "url(" + require("./medical1.jpg") + ")",
            backgroundColor: 'rgba(255,255,255,0.5)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
  
          }}
        >
         
             <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}   >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            NEWS & INFORMATION
            </Typography>
            <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >  
        </Container>
        {footers.map((footer) => (
              
              <ul>
                {footer.description.map((item) => (
                  <li key={item.name}>
                    <Link href={item.pageURL} variant="subtitle1" color="text.secondary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
          ))}
        
        </Container>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            
            mt: 10,
            py: [3, 6],
          }}
        >
         
          
        </Container>
        <Footer/>
        </div>
      </React.Fragment>
      
    );
  }
  
  export default function Pricing() {
    return <PricingContent />;
  }