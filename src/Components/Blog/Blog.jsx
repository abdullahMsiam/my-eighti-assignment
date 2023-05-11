import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { id, img, author, time, title, authorImage } = props.blog;
    // console.log(author);
    return (
        <div className='blog'>
            <div className='blog-image'>
                <img src={img} alt="" />
            </div>
            <div className='blog-info'>
                <div className='author-info'>
                    <img src={authorImage} alt="" />
                    <div><h5>{author}</h5> <p>15 April (few days ago)</p></div>
                </div>
                <div>
                    <p>{time} min read <a href=""><FontAwesomeIcon icon={faBookmark} /></a> </p>
                </div>
            </div>
            <h2>{title}</h2>
            <a href="">Mark as read</a>
        </div>
    );
};

export default Blog;