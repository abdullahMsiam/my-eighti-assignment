import React from 'react';
import './Library.css'
import Blog from '../Blog/Blog';
const Library = () => {
    return (
        <div className='library'>
            <div>
                <Blog></Blog>
            </div>
            <div>
                <h1>cart
                </h1>
            </div>
        </div>
    );
};

export default Library;