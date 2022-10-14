import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AppBar, Box, Toolbar, Typography
} from "@mui/material";

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Home, DirectionsCar, Settings} from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import './style.css';
import Divider from '@mui/material/Divider';
import{List, ListItem, ListItemButton, ListItemText, ListItemIcon} from "@mui/material"

export default function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirecionar = (url)=> {
    navigate(url);
    setMenu(false);
  }

  const handleMenuLateral = () => setMenu(!menu);
  
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Drawer onClose={handleMenuLateral} open={menu}>
        <div className='menu'>
          MENU

          <Divider/>

          <List>
            <ListItemButton onClick={() => redirecionar('/')}>
              <ListItemIcon> <Home/> </ListItemIcon>
              <ListItemText>Inicío</ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => redirecionar('/listar')}>
              <ListItemIcon> <DirectionsCar/> </ListItemIcon>
              <ListItemText>Veículos</ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => redirecionar('/config')}>
              <ListItemIcon> <Settings/> </ListItemIcon>
              <ListItemText>Configurações</ListItemText>
            </ListItemButton>
          </List>

        </div>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuLateral}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Garagem
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={() => {handleClose(); redirecionar('/entrar')}}>Desconectar</MenuItem>
              </Menu>
            </div>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}