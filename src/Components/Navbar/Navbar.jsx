import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <ul className='navbar'>
            <li className='navbar_item' >Home</li>
            <li className='navbar_item' >Teams</li>
            <li className='navbar_item' >Players</li>
            <li className='navbar_item' >Competitions</li>
        </ul>
    );
};

export default Navbar;