import React, { useCallback, useEffect, useState } from 'react';
import './Library.css'
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answer from '../Answer/Answer';

const Library = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState(0);
    const [blogTitle, setBlogTitle] = useState([]);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handledAddTime = (times) => {
        const newTime = time + parseInt(times);
        setTime(newTime);
    }

    const notify = () => toast("You Have Already Bookmarked This Blog");

    const passTitleHandler = (title) => {
        let newTitle = [...blogTitle];
        const exists = blogTitle.find(ttl => ttl === title);
        if (!exists) {
            newTitle = [...blogTitle, title];
        }
        else {
            notify();
        }
        setBlogTitle(newTitle);
    }
    return (
        <div>
            <div className='library'>
                <div>
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handledAddTime={handledAddTime}
                            passTitleHandler={passTitleHandler}
                        ></Blog>)
                    }
                    <ToastContainer />
                </div>
                <div>
                    <Cart
                        time={time}
                        blogTitle={blogTitle}
                    ></Cart>
                </div>
            </div>
            <div>
                <Answer></Answer>
            </div>
        </div>
    );
};

export default Library;