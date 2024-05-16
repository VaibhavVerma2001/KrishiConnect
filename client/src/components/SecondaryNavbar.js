import React from 'react';
import './secondaryNavbar.scss';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { display, margin } from '@mui/system';

function SecondaryNavbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const myStyle = {
        height: "40px",
        backgroundColor: "#8fbe7b",
    }

    return (
        // <div className='secondary-navbar'>
        //   <span>Home</span>
        //   <span>Fruits</span>
        //   <span>Vegetables</span>
        //   <span>Crops</span>
        //   <span>Seeds</span>
        //   <span>Pesticides</span>
        //   <span>Fertilizers</span>
        //   <span>Equipments</span>
        // </div>
        <AppBar className='secondary-navbar' position="static" sx={myStyle}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem
                                style={{ minWidth: "300px" }} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About Us</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Home
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Vegetables
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Fruits
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Crops
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Seeds
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Pesticides
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Fertilizers
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Equipments
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            About Us
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Contact Us
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default SecondaryNavbar
