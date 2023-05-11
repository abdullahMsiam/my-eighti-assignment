import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { id, img, author, time, title, authorImage } = props.blog;
    // console.log(author);
    const handledAddTime = props.handledAddTime;
    return (
        <div className='blog'>
            <div className='blog-image'>
                <img src={img} alt="" />
            </div>
            <div className='blog-info'>
                <div className='author-info'>
                    <img src={authorImage} alt="" />
                    <div><h4>{author}</h4> <p>15 April (few days ago)</p></div>
                </div>
                <div>
                    <p>{time} min read <button><FontAwesomeIcon icon={faBookmark} /></button> </p>
                </div>
            </div>
            <h2>{title}</h2>
            <button onClick={() => handledAddTime(time)}>Mark as read</button>
        </div>
    );
};

export default Blog;