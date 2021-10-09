import React from 'react';
import logo from '../imgs/marvel (2).png';

const Header = () => {
    return (
        <div id="header" className='flex justify-center items-center'>
            <a href='https://www.marvel.com/' rel="noreferrer" target='_blank'><img src={logo} alt="" /></a>
        </div>
    )
}

export default Header
