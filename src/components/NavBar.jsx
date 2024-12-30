import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../public/douglasSiteImages/douglasLodgeSmallLogo.png';

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} style={{width: '100%'}}>
      <List>
        <ListItem key={'home'} component={Link} to={'/'}>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem key={'about'} component={Link} to={'/about'}>
          <ListItemText primary={'About'} />
        </ListItem>
        <ListItem key={'communitySquare'} component={Link} to={'/community'}>
          <ListItemText primary={'Community Square'}/>
        </ListItem>
        {/* <ListItem key={'widowsAndOrphans'} onClick={handleClick}>
          <ListItemText primary={'Widows & Orphans'} />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem key={'subLink1'} component={Link} to={'/widowsAndOrphans/information'}>
              <ListItemText primary={'Information'} />
            </ListItem>
            <ListItem key={'subLink2'} component={Link} to={'/widowsAndOrphans/resources'}>
              <ListItemText primary={'Helpful Resources'} />
            </ListItem>
          </List>
        </Collapse> */}
        {/* <ListItem key={'associatedBodies'} component={Link} to={'/community'}>
          <ListItemText primary={'Associated Bodies'} />
        </ListItem> */}
        <ListItem key={'faq'} component={Link} to={'/faq'}>
          <ListItemText primary={'FAQ'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" style={{backgroundColor: '#010d6b'}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <img src={Logo} alt="Logo" style={{ marginRight: '10px', height: '40px', width: 'auto' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Douglas Lodge #153
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
