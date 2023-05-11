import React, { useEffect, useState } from 'react';
import './Library.css'
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
const Library = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handledAddTime = (times) => {
        const newTime = time + parseInt(times);
        setTime(newTime);
    }
    return (
        <div className='library'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handledAddTime={handledAddTime}
                    ></Blog>)
                }
            </div>
            <div>
                <Cart
                    time={time}
                ></Cart>
            </div>
        </div>
    );
};

export default Library;