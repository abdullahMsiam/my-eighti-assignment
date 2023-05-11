import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const time = props.time;
    return (
        <div>
            <div className='time'>
                <h3>Spent time of read:{time} min</h3>
            </div>
        </div>
    );
};

export default Cart;