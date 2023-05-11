import React from 'react';
import './Title.css'

const Title = (props) => {
    return (
        <div className='title-name'>
            <h3>{props.bk}</h3>
        </div >
    );
};

export default Title;