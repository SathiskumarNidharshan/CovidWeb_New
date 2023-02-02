import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';


const tiers = [
    {
        title: 'About web page',
        description: [
          'This web page mainly desinged for PHIs. They can got the details of corona positive patients details and their close contacts.',
          
        ],
        
      },

      {
        title: 'Register for free',
        fontColor:red,
        description: [
          'Everyone can use this web application. It is a free web application.'
        ],
        
      },

      {
        title: 'Identify your identity',
        description: [
          'The mobile application must use your authentic information so that your identity can be identified',
          
        ],
        
      },
  {
    title: 'Treating COVID-19',
    description: [
      'If you test positive and are more likely to get very sick from COVID-19, external icon that can reduce your chances of being hospitalized or dying from the disease.',
      
    ],
    
  },
  {
    title: 'Symptoms',
    description: [
      'Fever or chills,',
      'Cough,',
      'Muscle or body aches,',
      'Headache,',
      'Congestion or runny nose'
      
    ],
    
  },
  {
    title: 'Treatments',
    description: [
      'Some treatments might have side effects or interact with other medications you are taking. Ask a healthcare provider if medications to treat COVID-19 are right for you.',
      
    ],
    
  },
  
];

function ServicesContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          SERVICES
        </Typography>
        <Typography variant="h5" align="center" fontFamily="Segoe UI" color='#9500ae' component="p">
        We are here to clear your doubts about our webpage and ease the use of our webpage.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-start" >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={10}
              md={4}
            
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' , color:'#e1bee7' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[600]
                        : theme.palette.grey[200],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                      
                    }}
                  >
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="left"
                        key={line}
                        color='#4a148c'
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Services() {
  return <ServicesContent />;
}