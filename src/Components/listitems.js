import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoginIcon from '@mui/icons-material/Login';
import ListSubheader from '@mui/material/ListSubheader';
import DvrIcon from '@mui/icons-material/Dvr';
import Link from '@mui/material/Link';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Dashboard" /> */}
      <Link href="/" style={{textDecoration:'none'}}>Dashboard</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DvrIcon />
      </ListItemIcon>
      {/*<ListItemText primary="About Us" />*/}
      <Link href="/about" style={{textDecoration:'none'}}>About Us</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MedicalServicesIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Services" /> */}
      <Link href="/services" style={{textDecoration:'none'}}>Services</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ContactPhoneIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Contact" /> */}
      <Link href="/contact" style={{textDecoration:'none'}}>Contact</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LoginIcon />
      </ListItemIcon>
      <ListItemText primary="LogIn" />
    </ListItemButton>
  </React.Fragment>
);
export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
     
    </ListSubheader>
  </React.Fragment>
);
