import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




function AboutContent() {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          ABOUT US
        </Typography>
        <Typography variant="h5" align="center" color="text.primary" component="p">
          We are second year Undergraduate Information Technology students of Institute of Technology University of Moratuwa (NDT). It is our final year group project.<br/>
          When we see the world nowadays there is a tragedy in the whole world. In the near past of the world this is the most dangerous situation for all human beings. This is no one 
          else. This is Covid-19.When project ideas were considered by us, we got a point from this pandemic situation. We were searched about “How normal people have being affected from Covid-19 situation nowadays?”, "What can be given to them as solutions using technologies which we can be handle and which are known by us?”, "What are the problems people are facing with the pandemic situation?”, "What kind of solutions can be 
          given by us for these problems?” like this. As a result of our research we got lots of knowledge and also gathered information from PHI and also using Internet and online resources. So, we have selected this one as our project.
        </Typography>
      </Container>
    );
}

export default function about() {
  return <AboutContent />;
}