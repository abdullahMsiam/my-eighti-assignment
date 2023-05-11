import React from 'react';
import './Cart.css';
import Title from '../Title/Title';
const Cart = (props) => {
    const time = props.time;
    const blogTitle = props.blogTitle;
    const newBlogTitle = [...blogTitle];
    return (
        <div className='cart-container'>
            <div className='time'>
                <h3>Spent time of read: {time}min</h3>
            </div>

            <div className='book-mark'>
                <h2>Bookmarked Blogs: {blogTitle.length} </h2>
                {
                    newBlogTitle.map(bk => <Title bk={bk}></Title>)
                }
            </div>
        </div>
    );
};

export default Cart;