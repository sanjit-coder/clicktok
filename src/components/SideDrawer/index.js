import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {useLocation, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from 'assets/images/logo.svg';
import {navLinksData} from 'utils/constants';

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: prop => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideDrawer = ({children, tabSelected}) => {
  console.log('CHILDREN ARE', children);
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleNavClick = data => {
    navigate(data?.route);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isHomePage) {
    return (
      <Box sx={{display: 'flex'}}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <div className="sideDrawer__headerContainer">
            {open && (
              <div className="sideDrawer__logo">
                <img
                  src={logo}
                  alt="Logo"
                  className="sideDrawer__logo__image"></img>
              </div>
            )}
            <div onClick={handleDrawerClose} className="sideDrawer__arrow">
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </div>
          </div>
          <div className="sideDrawer__navMenuList">
            {navLinksData &&
              navLinksData.map(item => {
                return (
                  <div
                    className={
                      tabSelected === item?.tabName
                        ? `sideDrawer__navMenuListItem sideDrawer__navMenuListItem__active`
                        : `sideDrawer__navMenuListItem`
                    }
                    key={item?.tabText}
                    onClick={() => handleNavClick(item)}>
                    <div className="sideDrawer__navMenuListItem__icon">
                      {item?.tabIcon}
                    </div>
                    {open && (
                      <div
                        className={
                          tabSelected === item?.tabName
                            ? `sideDrawer__navMenuListItem__text sideDrawer__navMenuListItem__text__active`
                            : `sideDrawer__navMenuListItem__text`
                        }>
                        {item?.tabText}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1}}>
          <div className="sideDrawer__rightMenuContainer">
            <div className="sideDrawer__rightMenuContainer__profile">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle sx={{fontSize: '40px'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => navigate('/')}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
          <div style={{padding: '25px 16px'}}>{children}</div>
        </Box>
      </Box>
    );
  }
};

export default SideDrawer;
