import React from 'react';
import './navbar.scss';
import logo from '../assets/KrishiLogo.png'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="left">
                <img src={logo} alt="lrishi-logo" />
            </div>

            <div className="search">
                <input type="text" placeholder='Search Products' />
                <SearchIcon className='search-icon' />
            </div>

            <div className="right">
                <p>News</p>
                <p>Cart</p>
                <p>Profile</p>
                <p>Sign In</p>
            </div>
        </div>
    )
}

export default Navbar
