import React, { useEffect, useState } from 'react';
import './Library.css'
import Blog from '../Blog/Blog';
const Library = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='library'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div>
                <h1>cart
                </h1>
            </div>
        </div>
    );
};

export default Library;