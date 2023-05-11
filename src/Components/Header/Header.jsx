import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2>Know Thyself</h2>
            </div>
            <div className='header-link'>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Header;